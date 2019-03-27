module.exports = (req, res) => {
  res.writeHead(302, {
    Location: 'https://www.youtube.com/watch?v=WPMDCJrRpT8'
  })
  res.end()
}
