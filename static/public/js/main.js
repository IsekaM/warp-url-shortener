const form = document.querySelector('.url-form')
const formInput = document.querySelector('.url-form__input')
const rootUrl = location.origin
const { log } = console

async function fetchUrl(url) {
	try {
		const response = await fetch(`${rootUrl}/api/v1/url`, {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ url })
		})

		if (!response.ok) {
			return log('Error fetching url')
		}

		const json = await response.json()

		return json.data
	} catch (error) {
		log(error)
	}
}

async function showShortUrl(e) {
	e.preventDefault()

	const target = e.target
	const url = formInput.value

	try {
		const shorturlId = await fetchUrl(url)
		formInput.value = `${rootUrl}/${shorturlId['_id']}`
		log(shorturlId)
	} catch (error) {
		log(error)
	}
}

form.addEventListener('submit', showShortUrl)
