// fetch('./readme1.txt')
//     .then( (response) => {
//      return response.text()
// }).then (data => {
//     console.log(data)
// }).catch( err => {
//     console.log('Error : ', err)
// }).finally( ()=> {
//  console.log('in finally')
// })

// fetch('./readme1.txt')
// .then( resp => resp.text())
// .then(data => console.log(data => console.log(data)))
// .catch( err => console.log('Error : ', err))
// .finally( () => console.log())


// fetch('./readme2txt')
// .then( resp => resp.text())
// .then(data => console.log(data))
// .catch( err => console.log('Error : ', err))

let allData =''

fetch('./readme1.txt')
.then( resp => resp.text())
.then(data => {
    allData += data

})

console.log('Any other function...')
setTimeout(() => {
  console.log('allData =',allData)  
},500)
