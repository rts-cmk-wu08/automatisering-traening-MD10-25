

let advArticle = function(advantage) {

    let element = document.createElement('article')
    element.classList.add('adv-article')
    
    element.innerHTML = `
        <img src="${advantage.icon}" alt="icon" />
        <h1>${advantage.headline}</h1>
        <p>${advantage.text}</p>
    `
    
    return element
    }
    
    export default advArticle