import "./advArticle.scss"

let advArticle = function(advantage) {

    let element = document.createElement('article')
    element.classList.add('adv-article')
    
    element.innerHTML = `
        <img class="adv-article__icon" src="${advantage.icon}" alt="icon" />
        <h1 class="adv-article__headline">${advantage.headline}</h1>
        <p class="adv-article__text">${advantage.text}</p>
    `
    
    return element
    }
    
    export default advArticle