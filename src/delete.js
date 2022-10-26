let element = document.querySelector(".wrapper")

let main = document.createElement("main")

//main.append(UpdateForm(id))

main.innerHTML = `
   <form class="deleteForm">
        <label for="resource">ID som skal slettes: </label>
        <input type="text" name="resource" id="resource" />
        <button type="submit">DELETE!</button>
   </form>
`
let deleteForm = main.querySelector(".deleteForm")

deleteForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let id = e.target.resource.value
    if( isNaN(id) )
    {
        main.innerHTML = `
            <h1>ERROR!</h1>
            <p>Du skal skrive et ID på en resurse du vil have slettet</p>
            <p>Klik <a href="/delete.html">her</a> for at returnere til formularen.</p>

        `
    }else {
        main.innerHTML = `
            <h1>Pas på!!!</h1>
            <p>Du er ved at slette resursen med id ${id}.</p>
            <p>Er du sikker på, at du vil gøre dette?</p>
            <button class="delete">SLET</button> <a href="/delete.html">Annullér</a>

        `
        main.querySelector(".delete").addEventListener("click", () => {
            
            fetch(`http://localhost:4000/comments/${id}`, {
                method: 'DELETE',
            })
            .then(response => {
                if(response.status !== 200)
                {
                    console.log("ID er ikke exsisternde")
    
                    main.innerHTML = `
                        <h1>Du prøver måske at slette en resurse der ikke findes</h1>
                        <a href="/delete.html">Tilbage til formularen.</a>
                        <a href="/index.html">Tilbage til forside</a>
                    `
                }
                else
                {
                    console.log("I DID IT")

                    main.innerHTML = `
                    <h2>Resurse med id ${id} er nu blevet slettet</h2>
                    <p>Du vil nu blive viderstillet til forsiden</p>
                `
                setTimeout(() => {
                        window.location.replace("/index.html")
                    }, 2200)
                }
             
            })
           
            // .then(response => console.log(response))
            
        })
        
    }
    

})

element.append(main)