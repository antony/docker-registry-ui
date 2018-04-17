import proxy from './_proxy'

export function get(req, res) {
  proxy('_catalog')
  .then(({ statusCode, headers, content }) => {
    res.writeHead(statusCode, headers)
    res.end(content)
  })
}
