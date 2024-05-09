import { getKeres } from "./async.js";

/*IMPORTAL NEM LEHET ELERNI FETCH HIVASSAL KELL ELERNi*/
console.log("1. üzenet");
/*w3school fetch javascript*/

getKeres("adatok.json",megjelenit1)

console.log("2. üzenet");

getKeres("https://www.boredapi.com/api/activity",megjelenitBored)
getKeres("https://pokeapi.co/api/v2/pokemon/ditto",megjelenitPokemon)

function megjelenit1(adat){
    console.log(adat);
}

function megjelenitBored(adat){
    $("body").append(`<h1>Idő töltés unatkozáshoz</h1>`)
    $("body").append(`<h2>${adat.activity}</h2>`)
    $("body").append(`<h2>${adat.participans}</h2>`)
    $("body").append(`<h2>${adat.type}</h2>`)

}
function megjelenitPokemon(adat){
    $("body").append(`<h1>Pokemon</h1>`)
    $("body").append(`<h2>${adat.name}</h2>`)
    $("body").append(`<img src="${adat.sprites.front_default}" alt="">`)
    

}
