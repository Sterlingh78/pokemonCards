const fetchPokemon = () => {
    const pokemonList = [];
    for (let i = 1; i <= 25; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`
        fetch(url).then(result => result.json())
        .then(data => {
        let card = document.createElement("div")
        card.className = "card"
        let front = document.createElement("div")
        front.className = "front"
        let back = document.createElement("div")
        back.className = "back"
        let frontContent = document.createTextNode(`${data.name}`)
        let backContent = document.createTextNode(`${data.types.map((type) => type.type.name).join(', ')}`)
        let img = document.createElement("img")
        img.setAttribute("src",`${data.sprites['front_default']}`)
        front.appendChild(frontContent)
        front.appendChild(img)
        back.appendChild(backContent)
        card.appendChild(front)
        card.appendChild(back)
        document.getElementById("wrapper").appendChild(card)
    });
    }
};

const addCard = (ev) => {
    ev.preventDefault()
    let newCard = {
        name: document.getElementById('pname').value,
        image: document.getElementById('imgLink').value,
        type: document.getElementById('type').value
    }
    let card = document.createElement("div")
    card.className = "card"
    let front = document.createElement("div")
    front.className = "front"
    let back = document.createElement("div")
    back.className = "back"
    let frontContent = document.createTextNode(newCard.name)
    let backContent = document.createTextNode(newCard.type)
    let img = document.createElement("img")
    img.setAttribute("src",newCard.image)
    front.appendChild(frontContent)
    front.appendChild(img)
    back.appendChild(backContent)
    card.appendChild(front)
    card.appendChild(back)
    document.getElementById("wrapper").appendChild(card)
};

fetchPokemon();
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btn").addEventListener('click',addCard)
})