// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => {
//     if(!response.ok){
//         throw new Error("could not fetch error")
//     }
//     return response.json()
// })
// .then(data => console.log(data.weight))// to see specific data
// .catch(error =>console.error(error))


async function fetchData() {
    try{
        const pokemonName = document.getElementById("poke").value.toLowerCAse();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)

        if(!response.ok){
            throw new Error("no resources")
        }
        const data = await response.json();
        const pokemonSprite = data.sprite.front_default;
        const imgElement = document.getElementById("pokemonSprite")
        
        imgElement.src = pokemonSprite
        imgElement.style.display = "block"
    }
    catch(error){
        console.error(error);
    }
}