// testing out html and js
// identify html elements to modify
let body = document.querySelector("body")
let btn = document.querySelector("#btn")
// console.log(btn)

// listen for a button click and change identified html elements
btn.addEventListener("click", ()=>{
    body.classList.toggle("bg-primary")
    btn.classList.toggle("btn-secondary")

})