const TOKEN = process.argv[2] || null

const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'main',
    repo: TOKEN
      ? `https://Kyojin-Hwang:${TOKEN}@github.com/Kyojin-Hwang/bobcost.github.io.git`
      : 'https://github.com/Kyojin-Hwang/bobcost.github.io.git'
  },
  function (err) {
    console.log(err)
  }
)
