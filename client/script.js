const body = document.querySelector('body')
const postModal = document.getElementById('post-modal')
const updateModal = document.getElementById('update-modal')
const notifiModal = document.getElementById('success-notification')
const closeUpdateBtn = document.getElementById('update-close-btn')
const modalButtonPost = document.querySelector('.modal-button')
const closePostButton = document.querySelector('.close-button')
let container = document.getElementById('container')
let postForm = document.getElementById('post-form')
let restButton = document.getElementById('rest-button')
let updateForm = document.getElementById('update-form')

const getURL = 'http://localhost:3000/authors'

let isOpened = false

// Function to open the post modal
function openPostModal() {
  postModal.classList.add('is-open')
  body.style.overflow = 'hidden'

  populateFormInputs('', 'post-form')
}

// Function to open the update modal
function openUpdateModal(itemID) {
  updateModal.classList.add('is-open')
  body.style.overflow = 'hidden'

  updateModal.firstElementChild.setAttribute('id', itemID)

  let data = JSON.stringify(localStorage.getItem('data'))
  let item

  try {
    let object = JSON.parse(data)
    item = JSON.parse(object).find((element) => element.id === parseInt(itemID))
  } catch (error) {
    console.error(error)
  }

  populateFormInputs(item, 'update-form')

  postModal.classList.add('hideModal')
  notifiModal.classList.add('hideModal')
}

// Function to close the update modal
const closeUpdateModal = () => {
  updateModal.classList.remove('is-open')
  body.style.overflow = 'initial'

  postModal.classList.remove('hideModal')
  notifiModal.classList.remove('hideModal')
}

// Function to close the post modal
const closePostModal = () => {
  postModal.classList.remove('is-open')
  body.style.overflow = 'initial'
}

// Function to open the notification modal
const openNotifiModal = () => {
  notifiModal.classList.add('is-open')
  body.style.overflow = 'hidden'

  setTimeout(function () {
    notifiModal.classList.remove('is-open')
    body.style.overflow = 'initial'
  }, 1000)
}

// Helper Function to populate the form input values
function populateFormInputs(value, formName) {
  let updateFormElements =
    document.forms[formName === 'post-form' ? 'post-form' : 'update-form']

  updateFormElements.elements['author'].value =
    value === '' ? value : value.author
  updateFormElements.elements['tags'].value = value === '' ? value : value.tags
  updateFormElements.elements['alt'].value = value === '' ? value : value.alt
  updateFormElements.elements['description'].value =
    value === '' ? value : value.description
  updateFormElements.elements['image'].value =
    value === '' ? value : value.image
}

// Function to fetch data from the API
async function getData(getURL) {
  const response = await fetch('http://localhost:3000/authors')

  let data = await response.json()
  init(data)
}

getData(getURL)

// Function to initialize the application
function init(data) {
  let dynamicData = data

  container.innerHTML = ''

  // renderImgCards(dynamicData);
  renderFilterOptions(dynamicData)
}

function renderFilterOptions(dynamicData) {
  // Create an array of unique authors from the dynamic data
  const authorArray = Array.from(
    new Set(dynamicData.map((item) => item.author)),
  )

  // Get the select element and add the "All" option
  const select = document.getElementById('select-options')
  select.innerHTML = `<option value="All">All</option>`

  // Add options for each unique author
  authorArray.forEach((author) => {
    select.innerHTML += `
    <option value=${author.replace(/\s/g, '__')}>
      ${author}
    </option>
    `
  })

  // Initialize filtered array to dynamic data and render image cards
  let filteredArray = dynamicData
  renderImgCards(filteredArray)

  // Add event listener to select element
  select.addEventListener('change', function () {
    // Get selected author and replace underscores with spaces
    let selectedAuthor = this.value.replace(/__/g, ' ')

    // Filter dynamic data based on selected author
    if (selectedAuthor === 'All') {
      filteredArray = dynamicData
    } else {
      filteredArray = dynamicData.filter(
        (item) => item.author === selectedAuthor,
      )
    }

    // Clear container and render new image cards
    container.innerHTML = ''
    renderImgCards(filteredArray)
  })
}

// Function to render image cards for dynamic data
function renderImgCards(dynamicData) {
  localStorage.setItem('data', JSON.stringify(dynamicData))

  if (Array.isArray(dynamicData)) {
    dynamicData.forEach((element) => {
      const imgCard = renderImgCard(element)
      container.appendChild(imgCard)
    })
  } else {
    const imgCard = renderImgCard(dynamicData)
    container.appendChild(imgCard)
  }
}

// Helper function to render a single image card
function renderImgCard(cardData) {
  // Create the container div for the image card
  const imgCard = createHTMLElement('div', { class: 'card', id: cardData.id })

  // Create the figure element for the image and caption
  const figure = createHTMLElement('figure', { class: 'card__thumb' })

  // Create the image element and set its properties
  const img = createHTMLElement('img', {
    class: 'card__image',
    src: cardData.image,
    alt: cardData.alt,
  })

  // Create the caption element and its child elements
  const figcaption = createHTMLElement('figcaption', { class: 'card__caption' })
  const title = createHTMLElement(
    'h2',
    { class: 'card__title' },
    cardData.author,
  )
  const desc = createHTMLElement(
    'p',
    { class: 'card__snippet' },
    cardData.description,
  )
  const button = createHTMLElement(
    'button',
    { class: 'card__button', id: cardData.id },
    'update',
  )

  // Append the image to the figure element
  figure.appendChild(img)

  // Append the title, description, and button to the figcaption element
  figcaption.appendChild(title)
  figcaption.appendChild(desc)
  figcaption.appendChild(button)

  // Append the figcaption to the figure element
  figure.appendChild(figcaption)

  // Append the figure to the image card container
  imgCard.appendChild(figure)

  return imgCard
}

// Helper function to create html element and insert it to DOM
function createHTMLElement(tag, attributes = {}, text = '') {
  const element = document.createElement(tag)

  // Set the attributes of the element
  Object.keys(attributes).forEach((key) => {
    element.setAttribute(key, attributes[key])
  })

  // Set the text content of the element
  element.textContent = text

  // Add event listener to update button
  if (tag === 'button' && attributes.class === 'card__button') {
    element.addEventListener('click', () => openUpdateModal(attributes.id))
  }

  return element
}

postForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  // Get the form data as an object
  const formData = new FormData(event.target)
  const formDataObj = Object.fromEntries(formData)

  try {
    // Send a POST request to the API endpoint
    const response = await fetch('http://localhost:3000/author', {
      method: 'POST',
      body: JSON.stringify(formDataObj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.warn(error)
  }

  // Render the image cards and close the post modal
  getData(getURL)
  closePostModal()
  openNotifiModal()
})

restButton.addEventListener('click', async (event) => {
  event.preventDefault()

  try {
    // Send a GET request to reset the data
    await fetch('http://localhost:3000/authors/reset')

    // Send a GET request to retrieve the data
    const response = await fetch('http://localhost:3000/authors')

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const data = await response.json()
    openNotifiModal()
    init(data)
  } catch (error) {
    console.warn(error)
  }
})

updateForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  try {
    // Get the item ID
    let id = updateModal.firstElementChild.id

    // Get the form data
    let formDataObj = Object.fromEntries(new FormData(event.target))

    // Create the update URL
    let updateURL = `http://localhost:3000/author/${id}`

    // Send a PUT request to update the data
    const response = await fetch(`http://localhost:3000/author/${id}`, {
      method: 'PUT',
      body: JSON.stringify(formDataObj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    // getData(getURL)

    closeUpdateModal()

    // openNotifiModal()
  } catch (error) {
    console.warn(error)
  }
})

// Event listeners for modal buttons
closeUpdateBtn.addEventListener('click', closeUpdateModal)
modalButtonPost.addEventListener('click', openPostModal)
closePostButton.addEventListener('click', closePostModal)
