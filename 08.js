const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
const heading2 = document.querySelector('.h2-class')



console.log(heading2)
// console.log(heading)
// console.dir(heading)
// console.log(heading.outerText)
// console.dir(heading.id)
// console.dir(heading.textContent)

function addStylesTo(node){
    node.textContent = 'Changed from JS'
    node.style.color = 'red'
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
}

setTimeout(()=> {
    addStylesTo(heading)
}, 1500)

