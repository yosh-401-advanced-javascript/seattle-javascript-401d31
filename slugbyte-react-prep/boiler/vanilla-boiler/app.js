'use strict';

const root = document.getElementById('root');
const {Observable} = Rx;

const rand = (min, max) => Math.floor((Math.random() * (max-min)) + min)
const randColor = () => `rgba(${rand(200, 255)}, ${rand(200, 255)}, ${rand(200, 255)}, 1)`
const E = (template) => {
  let tmp =  document.createElement('div')
  tmp.innerHTML = template
  return tmp.firstElementChild
}

const state = window.state = {
  users: new Array(3).fill({}),
};

let refresh = E('<button> refresh </button>')
root.appendChild(refresh);
let userList = E(`<ul> ${state.users.map(_ => '<li> </li>').join('')} </ul>`)
root.appendChild(userList);

const request$ = Observable.fromPromise(axios.get('https://api.github.com/users')).map(res => res.data)
const load$ = Observable.fromEvent(window, 'load')
const refresh$ = Observable.fromEvent(refresh, 'click')
.merge(load$)
.flatMap(() => request$)

let renderList = (users) => {
  userList.textContent = ''
  users.forEach((u, i) => {
    let li = E(`<li> ${u.login} </li>`)
    let button = E('<button> X </button>')
    Observable.fromEvent(button, 'click')
    .flatMap(() => request$)
    .subscribe(users => {
      state.users[i] = users[rand(0, users.length)];
      renderList(state.users);
    })
    li.prepend(button)
    userList.appendChild(li)
  })
}

refresh$.map(users => {
  state.users = state.users.map(() => users.splice(rand(0, users.length), 1)[0])
  return state.users;
})
.subscribe(user => {
  renderList(user)
})

Observable.fromEvent(window, 'resize')
.debounce(() => Observable.interval(200))
.subscribe(e => {
  document.body.style.background = randColor()
})
