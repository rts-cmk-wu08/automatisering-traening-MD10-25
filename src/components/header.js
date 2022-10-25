import { hero } from "../data.js"
import "./header.scss"

let heroFigure = function() {
   

    let element = document.createElement('header')
    element.classList.add('container')
    element.innerHTML = `
    <figure class="container__heroWrapper">
        <img class="container__hero" src="${hero.image}" alt="hero" />
    </figure>

    <section class="box">
        <h1 class="box__headline">${hero.headline}</h1>
        <p class="box__text">${hero.copy}</p>
        <a href="#" class="box__link">
        <img class="box__icon" src="${hero.icon}" 
        alt="globe icon"/>Explore</a>
    </section>
    `

    


    return element
    }
    
    export default heroFigure