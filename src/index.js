import section from "./components/section.js"
import header from "./components/header.js"
import ContactForm from "./components/ContactForm.js"
import "./components/variables/body.scss";

let wrapper = document.querySelector(".wrapper")
wrapper.append(header())

wrapper.append(section())

wrapper.append(ContactForm())

