import fetch from 'node-fetch'

export default function proxy(endpoint) {
  const apiUrl = `/v2/${endpoint}`

  return fetch(apiUrl, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.DOCKER_REGISTRY_AUTH_HEADER
    }
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