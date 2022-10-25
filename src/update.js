import UpdateForm from "./components/UpdateForm.js"

let params = new URLSearchParams(window.location.search)
let id = params.get("id");

console.log(id)

let element = document.querySelector(".wrapper")

let main = document.createElement("main")

main.append(UpdateForm(id))

element.append(main)