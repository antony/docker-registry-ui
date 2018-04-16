import fetch from 'node-fetch'

export function get(req, res) {
  const registryUrl = process.env.DOCKER_REGISTRY_URL
  const apiUrl = `${registryUrl}/v2/_catalog`

  return fetch(apiUrl, {
    headers: {
      'content-type': 'application/json',
      Authorization: 'Basic YWI6TTNjNG0xQm1uSCVJ'
    }
  })
  .then(response => {
    return response.text()
  })
  .then(content => {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })

    res.end(content)
  })
}