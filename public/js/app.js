const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.getElementById('messageOne')
const messageTwo = document.getElementById('messageTwo')

weatherForm.addEventListener('submit', (event) => {
	event.preventDefault()

	messageOne.textContent = 'Loading...'
	messageTwo.textContent = ''
	const location = search.value

	fetch('http://127.0.0.1:3000/weather?address=' + location).then(
		(response) => {
			response.json().then((data) => {
				if (data.error) {
					messageOne.textContent = data.error
				} else {
					messageOne.textContent = data.location
					messageTwo.textContent = data.forecast
				}
			})
		}
	)
})
