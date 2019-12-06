const form = document.querySelector('.url-form')
const formInput = document.querySelector('.url-form__input')
const rootUrl = location.origin
const { log } = console

function makeUrlString(id) {
	return `${rootUrl}/${id}`
}

async function fetchUrl(url) {
	try {
		const response = await fetch(`${rootUrl}/api/v1/url`, {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ url })
		})

		if (!response.ok) {
			const message = response.status === 400 ? 'Invalid url sent' : 'Something went wrong'
			return message
		}

		const json = await response.json()
		const id = json['data']['_id']

		return makeUrlString(id)
	} catch (error) {
		log(error)
	}
}

async function showShortUrl(e) {
	const url = formInput.value
	e.preventDefault()

	try {
		const shorturlId = await fetchUrl(url)
		formInput.value = shorturlId
	} catch (error) {
		log(error)
	}
}

form.addEventListener('submit', showShortUrl)
