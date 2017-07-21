'use strict'

var request = (opts) => {
  return new Promise((resolve, reject) => {
    var req = new XMLHttpRequest()
    req.open(opts.method || 'GET', opts.url, true)
    for(var key in opts.headers){
      req.setRequestHeader(key, opts.headers[key])
    }
    req.onload = () => {
      req.status < 300 ? resolve(req) : reject(req)
    }
    req.onerror = (err) => reject(err)
    req.send()
  })
}

var parseJSON = (text) => {
  try {
    return Promise.resolve(JSON.parse(text))
  } catch(e) {
    return Promse.reject(e)
  }
}

var createElement = (template) => {
  var div = document.createElement('div')
  div.innerHTML = template
  return div.firstElementChild
}

var Nav = (apps) => {
  let navLinkCreate = app => `<li> <a href="/${app}"> ${app}</a> </li>`
  return createElement(`
    <nav> 
      <ul>
        ${apps.map(navLinkCreate).join('')}
      </ul>
    </nav>`)
}

var render = (config) => {
  var app = document.getElementById('app')
  app.appendChild(Nav(config.apps))
}

window.onload = () => {
  request({url: '/config.json' })
  .then(res => parseJSON(res.responseText))
  .then(data => render(data)) 
  .catch(console.error)
}
