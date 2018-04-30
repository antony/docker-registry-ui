import fetch from 'node-fetch'

export default function proxy(endpoint) {
  const apiUrl = `${process.env.DOCKER_REGISTRY_URL}/v2/${endpoint}`
  const auth = `${process.env.DOCKER_REGISTRY_USERNAME}:${process.env.DOCKER_REGISTRY_PASSWORD}`
  const encodedAuth = Buffer.from(auth).toString('base64')

  return fetch(apiUrl, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${encodedAuth}`
    },
    mode: 'no-cors'
  })
  .then(response => {
    return response.text()
  })
  .then(content => {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      content
    }
  })
}