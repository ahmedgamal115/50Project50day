// https://img.pokemondb.net/artwork/large/bulbasaur.jpg
// https://pokeapi.co/api/v2/pokemon/{id or name}/

const content = document.querySelector('.content')
const backgroundCard = [
    {"grass":"rgb(59 162 45 / 82%)"},
    {"fire":"rgb(235 103 73)"},
    {"water":"rgb(57 120 190 / 82%)"},
    {"bug":"rgb(177 144 32 / 82%)"},
    {"normal":"rgb(242 231 186)"},
    {"poison":"rgb(176 168 193)"},
    {"electric":"rgb(119 189 227)"},
    {"fairy":"rgb(245 232 188)"},
    {"ground":"rgb(151 118 45)"},
    {"psychic":"rgb(220 204 50)"},
    {"fighting":"rgb(195 178 169)"},
    {"ghost":"rgb(204 133 137)"},
    {"rock":"rgb(182 191 173)"},
    {"dragon":"rgb(132 179 223)"},
    {"poison":"rgb(158 138 187)"},
    {"ice":"rgb(164 135 183)"},
    {"dark":"rgb(121 137 140)"},
]

const getData = async()=>{
    for (let index = 1; index <= 200; index++) {
        let colorbg = ''
        await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then((res)=>res.json())
        .then((data)=>{
            backgroundCard.forEach((type)=>{
                if(data.types[0].type.name === Object.keys(type)[0]){
                    colorbg = Object.values(type)[0]
                }
            })
            content.innerHTML += `
            <div class="pockmonCard" 
            style="background-color: ${colorbg};"
            >
                <div class="avter">
                    <img src="https://img.pokemondb.net/artwork/large/${data.name}.jpg" alt="">
                </div>
                <div class="info">
                    <div class="id"># ${data.id < 10 ? "00"+data.id : data.id < 100 ? "0"+data.id : data.id}</div>
                    <div class="name">${data.name}</div>
                    <div class="type"><span>Type: </span>${data.types[0].type.name}</div>
                </div>
            </div>
            `
        })
    }
}
getData()