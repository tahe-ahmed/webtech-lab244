const { check, validationResult } = require('express-validator')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const sqlite = require('sqlite3').verbose()
const express = require('express')
const cors = require('cors')

const validateArray = [
  // Validate author field
  check('author')
    .exists() // Check if author is provided
    .withMessage('author is required') // If not provided, show error message
    .isString() // Check if author is a string
    .withMessage('author must be string'), // If not a string, show error message

  // Validate tags field
  check('tags')
    .exists() // Check if tags are provided
    .withMessage('tags is required') // If not provided, show error message
    .isString() // Check if tags is a string
    .withMessage('tags must be string'), // If not a string, show error message

  // Validate alt field
  check('alt')
    .exists() // Check if alt is provided
    .withMessage('alt is required') // If not provided, show error message
    .isString() // Check if alt is a string
    .withMessage('alt must be string'), // If not a string, show error message

  // Validate description field
  check('description')
    .exists() // Check if description is provided
    .withMessage('description is required') // If not provided, show error message
    .isString() // Check if description is a string
    .withMessage('description must be string'), // If not a string, show error message

  // Validate image field
  check('image').exists().withMessage('image is required'),
]

let db = my_database('./gallery.db')

const app = express()

// Middleware to enable CORS
app.use(cors())

// Parse JSON request body
app.use(express.json())

// Swagger UI documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Route handler to get all data
app.get('/authors', (req, res) => {
  // Query the gallery database to get all entries
  db.all(`SELECT * FROM gallery`, (err, rows) => {
    // Check if there was an error with the database query
    if (err) {
      // Log the error to the console
      console.error(err)
      // Return a 500 Internal Server Error response with a JSON error message
      return res.status(500).json({ error: err.message })
    }
    // Return a 200 OK response with the JSON data from the database
    res.status(200).json(rows)
  })
})

// Route handler to get an author by author name
app.get('/:author', (req, res) => {
  // Get the author name from the URL parameters
  const author = req.params.author

  // Query the gallery database to get all entries with the specified author name
  db.all(`SELECT * FROM gallery WHERE author=?`, [author], (err, rows) => {
    // Check if there was an error with the database query
    if (err) {
      // Log the error to the console
      console.error(err)
      // Return a 500 Internal Server Error response with a JSON error message
      return res.status(500).json({ error: 'Internal Server Error' })
    }
    // Check if no entries were found with the specified author name
    if (rows.length === 0) {
      // Return a 404 Not Found response with a JSON error message
      return res.status(404).json({ error: 'Not Found' })
    }
    // Return a 200 OK response with the JSON data from the database
    res.status(200).json(rows)
  })
})

// Route handler to reset the DB
app.get('/authors/reset', (req, res) => {
  // Run a DELETE query on the "gallery" table in the database
  db.run('DELETE FROM gallery', (error) => {
    if (error) {
      // If the DELETE query fails, set the HTTP status code to 500 and return a JSON response with an error message
      res.status(500).json({
        error: `Failed to delete data from the database: ${error.message}`,
      })
    } else {
      // If the DELETE query succeeds, create a new table using the "createTable" function
      createTable(db)
      // Set the HTTP status code to 204 and return an empty response
      res.status(204).send()
    }
  })
})

// Route handler to create a new author
app.post('/author', validateArray, (req, res) => {
  // to validate the incoming data
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  // Destructure the incoming data
  const { author, alt, tags, image, description } = req.body

  // Execute the query to insert the data into the database
  db.run(
    `INSERT INTO gallery (author, alt, tags, image, description) VALUES (?, ?, ?, ?, ?)`,
    [author, alt, tags, image, description],
    function (err) {
      // If an error occurs, return a 500 status code with the error message
      if (err) {
        return res.status(500).json({ error: err.message })
      }
      // Return a 201 status code and the last inserted id
      res.status(201).json({ id: this.lastID })
    },
  )
})

// Route handler to delete an author
app.delete(
  '/author/:id',
  [
    // Check if the "id" parameter exists and is a numeric value
    check('id')
      .exists()
      .isNumeric()
      .withMessage(
        'id must be a number or a string representation of a number',
      ),
  ],
  (req, res) => {
    // Check if there are any validation errors in the request
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      // If there are errors, return a response with a 400 Bad Request status and the array of errors
      return res.status(400).json({ errors: errors.array() })
    }

    // Get the author ID from the URL parameters
    const id = req.params.id

    // Run a DELETE query on the "gallery" table in the database
    db.run(`DELETE FROM gallery WHERE id = ?`, [id], function (err) {
      if (err) {
        // If the query fails, return a response with a 500 Internal Server Error status and the error message
        return res.status(500).json({ error: err.message })
      }
      if (this.changes === 0) {
        // If the author ID is not found in the database, return a response with a 404 Not Found status
        return res.status(404).json({ error: 'Not Found' })
      }
      // If the query succeeds, return a response with a 204 No Content status
      res.status(204).send()
    })
  },
)

// Route handler to upate an author
app.put('/author/:id', validateArray, (req, res) => {
  // Check if there are any validation errors in the request
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    // If there are errors, return a response with a 400 Bad Request status and the array of errors
    return res.status(400).json({ errors: errors.array() })
  }

  // Get the author ID from the URL parameters
  const id = req.params.id
  // Destructure the properties from the request body
  const { author, alt, tags, image, description } = req.body

  // Run an UPDATE query on the "gallery" table in the database
  db.run(
    'UPDATE gallery SET author = ?, alt = ?, tags = ?, image = ?, description = ? WHERE id = ?',
    [author, alt, tags, image, description, id],
    (err) => {
      if (err) {
        // If the query fails, return a response with a 500 Internal Server Error status and the error message
        return res
          .status(500)
          .set({ 'Content-Type': 'application/json' })
          .json({ error: err.message })
      }
      if (this.changes === 0) {
        // If the author ID is not found in the database, return a response with a 404 Not Found status
        return res.status(404).json({ error: 'Not Found' })
      }
      // If the query succeeds, return a response with a 204 No Content status and a success message
      res
        .set({ 'Content-Type': 'application/json' })
        .status(204)
        .json({ message: 'The record was updated successfully' })
    },
  )
})

app.listen(3000)
console.log(
  'Your Web server should be up and running, waiting for requests to come in. Try http://localhost:3000/authors',
)

function my_database(filename) {
  // Connect to the database by opening `filename` and creating it if it does not exist:
  const db = new sqlite.Database(filename, (err) => {
    if (err) {
      console.error(`Error connecting to database: ${err.message}`)
    }
    console.log('Connected to the gallery database.')
  })

  // Create the author table if it does not already exist:
  createTable(db)

  // Return the connected database
  return db
}

function createTable(db) {
  db.serialize(() => {
    // Create table 'gallery' if it does not exist
    db.run(`
      CREATE TABLE IF NOT EXISTS gallery (
        id INTEGER PRIMARY KEY,
        author CHAR(100) NOT NULL,
        alt CHAR(100) NOT NULL,
        tags CHAR(256) NOT NULL,
        image char(2048) NOT NULL,
        description CHAR(1024) NOT NULL
      )
    `)

    // Check if table 'gallery' is empty
    db.all(`SELECT count(*) as count FROM gallery`, (err, result) => {
      if (err) {
        console.error(err)
      } else if (result[0].count === 0) {
        console.log("Table 'gallery' is empty, inserting dummy photo entries.")
        // Insert dummy photo entries
        db.run(
          `INSERT INTO gallery (author, alt, tags, image, description) VALUES (?, ?, ?, ?, ?)`,
          [
            'Tim Berners-Lee',
            'Image of Berners-Lee',
            'html,http,url,cern,mit',
            'https://upload.wikimedia.org/wikipedia/commons/9/9d/Sir_Tim_Berners-Lee.jpg',
            "The internet and the Web aren't the same thing.",
          ],
          (err) => {
            if (err) {
              console.error(err)
            }
          },
        )
        db.run(
          `INSERT INTO gallery (author, alt, tags, image, description) VALUES (?, ?, ?, ?, ?)`,
          [
            'Grace Hopper',
            'Image of Grace Hopper at the UNIVAC I console',
            'programming,linking,navy',
            'https://upload.wikimedia.org/wikipedia/commons/3/37/Grace_Hopper_and_UNIVAC.jpg',
            'Grace was very curious as a child; this was a lifelong trait. At the age of seven, she decided to determine how an alarm clock worked and dismantled seven alarm clocks before her mother realized what she was doing (she was then limited to one clock).',
          ],
          (err) => {
            if (err) {
              console.error(err)
            }
          },
        )
      } else {
        console.log(
          `Table 'gallery' already contains ${result[0].count} item(s) at startup.`,
        )
      }
    })
  })
}
