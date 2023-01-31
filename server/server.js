// var express = require('express'),
//   //   router = express.Router(),
//   //   bodyParser = require('body-parser'),
//   swaggerUi = require('swagger-ui-express'),
//   swaggerDocument = require('./swagger.json')

// var app = express()

// app.get('/photos', (req, res) => {
//   res.send([
//     {
//       id: 515961,
//       author: 'Grace Hopper',
//       alt: 'Image of Grace Hopper at the UNIVAC I console',
//       tags: 'programming,linking,navy',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/3/37/Grace_Hopper_and_UNIVAC.jpg',
//       description:
//         'Grace was very curious as a child; this was a lifelong trait. At the age of seven, she decided to determine how an alarm clock worked and dismantled seven alarm clocks before her mother realized what she was doing (she was then limited to one clock).',
//     },
//     {
//       id: 515962,
//       author: 'Enrico Fermi',
//       alt: 'Image of Fermi',
//       tags: 'prof,manhattan,smart',
//       image:
//         'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRVHVIpMCnQ_mmX4bzGBeiHx3d0k4y3H5LTF7ox0hD65ADHrA2lR3Kw1ouqiFemFFG_',
//       description: 'Long description of image of Fermi.',
//     },
//     {
//       id: 515963,
//       author: 'Otto Hahn',
//       alt: 'Image of Hahn',
//       tags: 'prof,man,smart',
//       image:
//         'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQDW9R_fsu5YgEkl26Nkt8g7rUcVo2vxcg7sBAs8Yq3_ZaDy8Y_TYhUhIrDhvaHvaZN',
//       description: 'Long description of image of Hahn.',
//     },
//     {
//       id: 515964,
//       author: 'Robert Oppenheimer',
//       alt: 'Image of Oppenheimer',
//       tags: 'prof,man,smart',
//       image:
//         'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQw-A5k8555iikQtHWyiICdn7Aa1neuFimW_-aC0XFme_9GHRukomyJ0iO5Qj2bYhXM',
//       description: 'Long description of image of Oppenheimer.',
//     },
//     {
//       id: 515965,
//       author: 'Werner Heisenberg',
//       alt: 'Image of Heisenberg',
//       tags: 'chemistry,physics',
//       image:
//         'https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png',
//       description:
//         "This isn't actually Werner Heisenberg but who reads these long descriptions anyway.",
//     },
//     {
//       id: 515966,
//       author: 'Ken Thompson',
//       alt: 'Image of Thompson',
//       tags: 'prof,man,smart',
//       image:
//         'https://ieeecs-media.computer.org/wp-media/2018/03/30194024/ken-thompson-e1522438858381.jpg',
//       description: 'Ken Thompson did stuff with computers.',
//     },
//     {
//       id: 515967,
//       author: 'Ken Thompson',
//       alt: 'Image of Thompson',
//       tags: 'prof,man,unix',
//       image:
//         'https://www.unixmen.com/wp-content/uploads/2015/10/thompson01.jpg',
//       description: 'Another image of Ken Thompson.',
//     },
//     {
//       id: 515968,
//       author: 'Ken Thompson',
//       alt: 'Image of Thompson',
//       tags: 'chess,unix',
//       image:
//         'https://preview.redd.it/dnvqmhw17jf61.jpg?auto=webp&s=d5a7d4ec09f8ead4a6b8331a742c6cdc5de04068',
//       description: 'Ken was on the forefront of chess computers.',
//     },
//     {
//       id: 515969,
//       author: 'Tim Berners-Lee',
//       alt: 'Image of Berners-Lee',
//       tags: 'html,http,url,cern,mit',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/9/9d/Sir_Tim_Berners-Lee.jpg',
//       description: "The internet and the Web aren't the same thing.",
//     },
//     {
//       id: 515970,
//       author: 'Tim Berners-Lee',
//       alt: 'Image of Berners-Lee',
//       tags: 'www,internet',
//       image:
//         'https://cdn.britannica.com/94/123894-050-53EC378E/Tim-Berners-Lee-2005.jpg',
//       description: 'TimBL works at MIT nowadays.',
//     },
//     {
//       id: 515971,
//       author: 'Albert Einstein',
//       alt: 'Image of Einstein',
//       tags: 'tongue,man,smart',
//       image:
//         'https://parade.com/.image/t_share/MTkwNTgwOTUyNjU2Mzg5MjQ1/albert-einstein-quotes-jpg.jpg',
//       description: 'Long description of image of Einstein.',
//     },
//     {
//       id: 515972,
//       author: 'Richard Feynman',
//       alt: 'Image of Feynman',
//       tags: 'physics,man,nobel',
//       image:
//         'https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Richard_Feynman_Nobel.jpg/220px-Richard_Feynman_Nobel.jpg',
//       description: 'Long description of image of Feynman.',
//     },
//     {
//       id: 515973,
//       author: 'Karen Spärck Jones',
//       alt: 'Image of Karen Spärck Jones in 2002 (University of Cambridge)',
//       tags: 'IDF,retrieval,nlp',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/a/af/Karen_Sp%C3%A4rck.jpg',
//       description:
//         'Karen Sparck-Jones’ discoveries helped pave the way for modern-day information retrieval that allows search engines to quickly identify the most relevant results and curate millions of responses to internet queries. ',
//     },
//     {
//       id: 515974,
//       author: 'asd',
//       alt: 'asd',
//       tags: 'asd',
//       image:
//         'https://cdn.britannica.com/20/217720-050-857D712B/American-novelist-Stephen-King-2004.jpg',
//       description: 'sda',
//     },
//   ])
// })

// app.post('/photo', (req, res) => {
//   res.send('Got a POST request')
//   res.status(201)
// })

// app.listen(3000, () => {
//   console.log('Example app listening on port 3000!')
// })

// ###############################################################################
// Web Technology at VU University Amsterdam
// Assignment 3
//
// The assignment description is available on Canvas.
// Please read it carefully before you proceed.
//
// This is a template for you to quickly get started with Assignment 3.
// Read through the code and try to understand it.
//
// Have you read the zyBook chapter on Node.js?
// Have you looked at the documentation of sqlite?
// https://www.sqlitetutorial.net/sqlite-nodejs/
//
// Once you are familiar with Node.js and the assignment, start implementing
// an API according to your design by adding routes.

// ###############################################################################
//
// Database setup:
// First: Our code will open a sqlite database file for you, and create one if it not exists already.
// We are going to use the variable "db' to communicate to the database:
// If you want to start with a clean sheet, delete the file 'phones.db'.
// It will be automatically re-created and filled with one example item.
const { check, validationResult } = require('express-validator')
const validateArray = [
  check('author')
    .exists()
    .withMessage('author is required')
    .isString()
    .withMessage('author must be string'),
  check('tags')
    .exists()
    .withMessage('tags is required')
    .isString()
    .withMessage('tags must be string'),
  check('alt')
    .exists()
    .withMessage('alt is required')
    .isString()
    .withMessage('alt must be string'),
  check('description')
    .exists()
    .withMessage('description is required')
    .isString()
    .withMessage('description must be string'),
  check('image').exists().withMessage('image is required'),
]

swaggerUi = require('swagger-ui-express')
swaggerDocument = require('./swagger.json')

const sqlite = require('sqlite3').verbose()
let db = my_database('./gallery.db')

// ###############################################################################
// The database should be OK by now. Let's setup the Web server so we can start
// defining routes.
//
// First, create an express application `app`:

var express = require('express')
var app = express()

// We need some middleware to parse JSON data in the body of our HTTP requests:
app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// ###############################################################################
// Routes
//
// TODO: Add your routes here and remove the example routes once you know how
//       everything works.
// ###############################################################################

// This example route responds to http://localhost:3000/hello with an example JSON object.
// Please test if this works on your own device before you make any changes.

app.get('/authors', (req, res) => {
  //   response_body = { Hello: 'World' }
  db.all(`SELECT * FROM gallery`, (err, rows) => {
    // TODO: add code that checks for errors so you know what went wrong if anything went wrong
    // TODO: set the appropriate HTTP response headers and HTTP response codes here.

    // # Return db response as JSON
    if (err) {
      // handle error
      return res
        .status(500)
        .set({ 'Content-Type': 'application/json' })
        .json({ error: err.message })
    }
    res.set({ 'Content-Type': 'application/json' }).status(200).json(rows)
  })

  // This example returns valid JSON in the response, but does not yet set the
  // associated HTTP response header.  This you should do yourself in your
  // own routes!
  //   res.json(response_body)
})

// This route responds to http://localhost:3000/db-example by selecting some data from the
// database and return it as JSON object.
// Please test if this works on your own device before you make any changes.

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
      return res
        .status(500)
        .set({ 'Content-Type': 'application/json' })
        .json({ error: 'Internal Server Error' })
    }
    // Check if no entries were found with the specified author name
    if (rows.length === 0) {
      // Return a 404 Not Found response with a JSON error message
      return res
        .status(404)
        .set({ 'Content-Type': 'application/json' })
        .json({ error: 'Not Found' })
    }
    // Return a 200 OK response with the JSON data from the database
    res.status(200).set({ 'Content-Type': 'application/json' }).json(rows)
  })
})

app.post('/author', validateArray, (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const { author, alt, tags, image, description } = req.body

  db.run(
    `INSERT INTO gallery (author, alt, tags, image, description) VALUES (?, ?, ?, ?, ?)`,
    [author, alt, tags, image, description],
    function (err) {
      if (err) {
        // handle error
        return res.status(500).json({ error: err.message })
      }
      res.status(201).json({ id: this.lastID })
    },
  )
})

app.delete(
  '/author/:id',
  [
    check('id')
      .exists()
      .isNumeric()
      .withMessage('id must be a number or  string representation of a number'),
  ],
  (req, res) => {
    console.log(typeof req.params.id)
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const id = req.params.id

    db.run(`DELETE FROM gallery WHERE id = ?`, [id], function (err) {
      if (err) {
        return res.status(500).json({ error: err.message })
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: 'Not Found' })
      }
      res.status(204).send()
    })
  },
)

app.put('/author/:id', validateArray, (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const id = req.params.id
  const { author, alt, tags, image, description } = req.body

  db.run(
    'UPDATE gallery SET author = ?, alt = ?, tags = ?, image = ?, description = ? WHERE id = ?',
    [author, alt, tags, image, description, id],
    function (err) {
      if (err) {
        return res
          .status(500)
          .set({ 'Content-Type': 'application/json' })
          .json({ error: err.message })
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: 'Not Found' })
      }
      res
        .set({ 'Content-Type': 'application/json' })
        .status(204)
        .json({ message: 'The record was updated successfully' })
    },
  )
})

// ###############################################################################
// This should start the server, after the routes have been defined, at port 3000:

app.listen(3000)
console.log(
  'Your Web server should be up and running, waiting for requests to come in. Try http://localhost:3000/hello',
)

// ###############################################################################
// Some helper functions called above
function my_database(filename) {
  // Conncect to db by opening filename, create filename if it does not exist:
  var db = new sqlite.Database(filename, (err) => {
    if (err) {
      console.error(err.message)
    }
    console.log('Connected to the phones database.')
  })
  // Create our phones table if it does not exist already:
  db.serialize(() => {
    db.run(`
        	CREATE TABLE IF NOT EXISTS gallery
        	 (
                    id INTEGER PRIMARY KEY,
                    author CHAR(100) NOT NULL,
                    alt CHAR(100) NOT NULL,
                    tags CHAR(256) NOT NULL,
                    image char(2048) NOT NULL,
                    description CHAR(1024) NOT NULL
		 )
		`)
    db.all(`select count(*) as count from gallery`, function (err, result) {
      if (result[0].count == 0) {
        db.run(
          `INSERT INTO gallery (author, alt, tags, image, description) VALUES (?, ?, ?, ?, ?)`,
          [
            'Tim Berners-Lee',
            'Image of Berners-Lee',
            'html,http,url,cern,mit',
            'https://upload.wikimedia.org/wikipedia/commons/9/9d/Sir_Tim_Berners-Lee.jpg',
            "The internet and the Web aren't the same thing.",
          ],
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
        )
        console.log('Inserted dummy photo entry into empty database')
      } else {
        console.log(
          'Database already contains',
          result[0].count,
          ' item(s) at startup.',
        )
      }
    })
  })
  return db
}
