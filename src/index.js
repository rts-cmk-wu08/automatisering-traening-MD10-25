import section from "./components/section.js"
import header from "./components/header.js"
import "./components/variables/body.scss";

let body = document.querySelector("body")
body.append(header())


let wrapper = document.createElement("div")
wrapper.classList.add("wrapper")
body.append(wrapper)


let element = document.querySelector(".wrapper")
element.append(section())

