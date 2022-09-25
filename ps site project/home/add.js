let form = document.getElementById("addGameForm")

form.addEventListener("submit" , addGame)

function addGame(ev){
    ev.preventDefault()


    //////////הגדרת המשתנים 
    let nameInput = document.getElementById("gName")
    let imgInput = document.getElementById("gImg")

    let div = document.createElement("div")
    div.setAttribute("class","col")

    let header = document.createElement("h2")
    header.innerText = nameInput.value 

    let img = document.createElement("img")
    img.setAttribute("src",imgInput.value)

    div.appendChild(header)
    div.appendChild(img)

    document.getElementById("container").appendChild(div)

}