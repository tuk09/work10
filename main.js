const userList = document.querySelector('.user-list')
const postInfo = document.querySelector('.post-info')

function makeElement(tag, attr_n, attr_v, content) {
  let output = document.createElement(tag);
  if (attr_n !== '' && attr_v !== '') {
    output.setAttribute(attr_n, attr_v);
  }
  output.textContent = content;
  return output;
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then(resp => resp.json())
  .then(data => {
    for (let el of data) {
      const li = makeElement('li', 'onclick', `linkPost(${el.id}); ping.play();`, `${el.name} / ${el.email}`)
      userList.append(li)
    }
  })

const linkPost = (userId) => {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(res => res.json())
    .then(data => {
      for (let el of data) {
        const container = makeElement('div', 'class', 'container', '')
        const title = makeElement('div', 'class', 'title', `${el.title}`)
        const hr = makeElement('hr')
        const body = makeElement('div', 'class', 'body-post', `${el.body}`)
        postInfo.append(container)
        container.append(title)
        container.append(hr)
        container.append(body)
      }
    })
}