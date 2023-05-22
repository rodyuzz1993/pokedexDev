let water = "#6495ED";
let bug= "#A8B820";
let dragon= "#7038F8";
let electric= "#F8D030";
let ghost= "#705898";
let fire= "#F08030";
let fairy= "#EE99AC";
let ice= "#98D8D8";
let fighting= "#C03028";
let normal= "#A8A878";
let grass= "#78C850";
let psychic= "#F85888";
let rock= "#B8A038";
let dark= "#705848";
let ground= "#E0C068";
let poison= "#A040A0";
let flying= "#A890F0";

let search_input = document.getElementById("escribirPokemon")
let character_img =document.getElementById("imagenPokemon")
let character_tipo =document.getElementById("TipoPokemon")
let character_CirculoGrande =document.getElementById("CirculoGrande")
let character_name =document.getElementById("nombrePokemon")

let character_peso =document.getElementById("descripcionPeso")
let character_altura =document.getElementById("descripcionAltura")
let character_abilities =document.getElementById("descripcionHabilidades")

function search() {
  console.log(search_input.value)
  let pokemon;
  search_pokemon(search_input.value)
    .then(function(result) {
      let pokemon = JSON.parse(result)      
      let image = pokemon.sprites.other["official-artwork"].front_default
      let type = pokemon.types[0].type
      console.log(type.url)
      
      console.log(pokemon)
      
      character_tipo.innerHTML=`${type.name}`

      character_name.innerHTML=`${pokemon.name}`

      character_peso.innerHTML=`Peso: ${pokemon.weight} Kg`

      character_altura.innerHTML=`Altura: ${pokemon.height} m`

      character_abilities.innerHTML=`Habilidades: ${pokemon.abilities[0]}`

      character_img.innerHTML=`<img src="${image}">`

/*código para elegir fondo de color*/
if(`${type.name}`=="water"){character_img.style.backgroundColor=water;
                  character_CirculoGrande.style.backgroundColor=water;}
if(`${type.name}`=="electric"){character_img.style.backgroundColor=electric;
                  character_CirculoGrande.style.backgroundColor=electric;}
if(`${type.name}`=="bug"){character_img.style.backgroundColor=bug;
                  character_CirculoGrande.style.backgroundColor=bug;}
if(`${type.name}`=="dragon"){character_img.style.backgroundColor=dragon;
                  character_CirculoGrande.style.backgroundColor=dragon;}
if(`${type.name}`=="ghost"){character_img.style.backgroundColor=ghost;
                  character_CirculoGrande.style.backgroundColor=ghost;}
if(`${type.name}`=="fire"){character_img.style.backgroundColor=fire;
                  character_CirculoGrande.style.backgroundColor=fire;}
if(`${type.name}`=="fairy"){character_img.style.backgroundColor=fairy;
                  character_CirculoGrande.style.backgroundColor=fairy;}
if(`${type.name}`=="ice"){character_img.style.backgroundColor=ice;
                  character_CirculoGrande.style.backgroundColor=ice;}
if(`${type.name}`=="fighting"){character_img.style.backgroundColor=fighting;
                  character_CirculoGrande.style.backgroundColor=fighting;}
if(`${type.name}`=="normal"){character_img.style.backgroundColor=normal;
                  character_CirculoGrande.style.backgroundColor=normal;}
if(`${type.name}`=="grass"){character_img.style.backgroundColor=grass;
                  character_CirculoGrande.style.backgroundColor=grass;}
if(`${type.name}`=="psychic"){character_img.style.backgroundColor=psychic;
                  character_CirculoGrande.style.backgroundColor=psychic;}
if(`${type.name}`=="rock"){character_img.style.backgroundColor=rock;
                  character_CirculoGrande.style.backgroundColor=rock;}
if(`${type.name}`=="dark"){character_img.style.backgroundColor=dark;
                  character_CirculoGrande.style.backgroundColor=dark;}
if(`${type.name}`=="ground"){character_img.style.backgroundColor=ground;
                  character_CirculoGrande.style.backgroundColor=ground;}
if(`${type.name}`=="poison"){character_img.style.backgroundColor=poison;
                  character_CirculoGrande.style.backgroundColor=poison;}
if(`${type.name}`=="flying"){character_img.style.backgroundColor=flying;
                  character_CirculoGrande.style.backgroundColor=flying;}
    }
    )
    .catch(error => console.error('error', error));
}

function search_pokemon(pokemon_name) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`, requestOptions)
         .then(response => response.text())

}

//*******BOTONES
const miInput = document.getElementById('escribirPokemon');

const btnAct = document.getElementById('botonBuscar1');
btnAct.addEventListener('click',function(){
  miInput.value += 1 + "";
});

const btnAct2 = document.getElementById('botonBuscar2');
btnAct2.addEventListener('click',function(){
  miInput.value += 2 + "";
});

const btnAct3 = document.getElementById('botonBuscar3');
btnAct3.addEventListener('click',function(){
  miInput.value += 3 + "";
});

const btnAct4 = document.getElementById('botonBuscar4');
btnAct4.addEventListener('click',function(){
  miInput.value += 4 + "";
});

const btnAct5 = document.getElementById('botonBuscar5');
btnAct5.addEventListener('click',function(){
  miInput.value += 5 + "";
});

const btnAct6 = document.getElementById('botonBuscar6');
btnAct6.addEventListener('click',function(){
  miInput.value += 6 + "";
});

const btnAct7 = document.getElementById('botonBuscar7');
btnAct7.addEventListener('click',function(){
  miInput.value += 7 + "";
});

const btnAct8 = document.getElementById('botonBuscar8');
btnAct8.addEventListener('click',function(){
  miInput.value += 8 + "";
});

const btnAct9 = document.getElementById('botonBuscar9');
btnAct9.addEventListener('click',function(){
  miInput.value += 9 + "";
});

const btnAct0 = document.getElementById('botonBuscar0');
btnAct0.addEventListener('click',function(){
  miInput.value += 0 + "";
});

const btnBorrar = document.getElementById('borrar_button');
btnBorrar.addEventListener('click',function(){
  miInput.value = "";
});