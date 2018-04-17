import proxy from '../_proxy'

export function get(req, res) {
	const { image } = req.params
  proxy(`${image}/tags/list`)
  .then(({ statusCode, headers, content }) => {
    res.writeHead(statusCode, headers)
    res.end(content)
  })
}
