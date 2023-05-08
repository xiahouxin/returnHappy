var fetch = require('node-fetch')

function gen() {
  var url = 'https://api.github.com/users/github';
  var result = fetch(url) // 异步
  console.log(result.bio);
}

gen()