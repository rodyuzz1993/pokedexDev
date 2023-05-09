let characters =JSON.parse(poke_file).result
let character_input =document.getElementById("escribirPokemon")
let character_info =document.getElementById("nombrePokemon")
let character_tipo =document.getElementById("TipoPokemon")
let character_img =document.getElementById("imagenPokemon")
let character_peso =document.getElementById("descripcionPokedex")
let character_numero =document.getElementById("descripcionPokedex")
let character_altura =document.getElementById("descripcionPokedex")
let character_abilities =document.getElementById("descripcionPokedex")



function find_character()
{
    let input_value=character_input.value;
    let resultPokemon=find_result(input_value);

    character_info.innerHTML=`
    <p>Nombre: ${resultPokemon.name}</p>
    `;
    character_tipo.innerHTML=`
    <p>Tipo: ${resultPokemon.type}</p>
    `;

    character_img.innerHTML=`
    <img alt="ImagenPokemon" src="${resultPokemon.ThumbnailImage}">
    `;
     character_altura.innerHTML=`
    <p>No.: ${resultPokemon.number}</p>

    <p>abilities: ${resultPokemon.abilities}</p>
    
    <p>Peso: ${resultPokemon.weight} kg</p>

    <p>Altura: ${resultPokemon.height} cm</p>
    `;

}
function find_result(input_value)
{
    for(let i=0; i<characters.length;i++)
    {
        if(characters[i].number == input_value)
        {
            return characters[i]
        }
    }
    for(let i=0; i<characters.length;i++)
    {
        if(characters[i].name == input_value)
        {
            return characters[i]
        }
    }
}

//*******BOTONES
/*const miInput = document.getElementById('escribirPokemon');
const btnAct = document.getElementById('botonBuscar1');
btnAct.addEventListener('click',function(){
btnAct.classList.toggle('botonHover')
  miInput.value = 1;
});

const btnAct2 = document.getElementById('botonBuscar2');
btnAct2.addEventListener('click',function(){
btnAct2.classList.toggle('botonHover')
miInput.value = 2;
});

const btnAct3 = document.getElementById('botonBuscar3');
btnAct3.addEventListener('click',function(){
btnAct3.classList.toggle('botonHover')
  miInput.value = 3;
});

const btnAct4 = document.getElementById('botonBuscar4');
btnAct4.addEventListener('click',function(){
btnAct4.classList.toggle('botonHover')
  miInput.value = 4;
});

const btnAct5 = document.getElementById('botonBuscar5');
btnAct5.addEventListener('click',function(){
btnAct5.classList.toggle('botonHover')
  miInput.value = 5;
});

const btnAct6 = document.getElementById('botonBuscar6');
btnAct6.addEventListener('click',function(){
btnAct6.classList.toggle('botonHover')
  miInput.value = 6;
});

const btnAct7 = document.getElementById('botonBuscar7');
btnAct7.addEventListener('click',function(){
btnAct7.classList.toggle('botonHover')
  miInput.value = 7;
});

const btnAct8 = document.getElementById('botonBuscar8');
btnAct8.addEventListener('click',function(){
btnAct8.classList.toggle('botonHover')
  miInput.value = 8;
});

const btnAct9 = document.getElementById('botonBuscar9');
btnAct9.addEventListener('click',function(){
btnAct9.classList.toggle('botonHover')
  miInput.value = 9;
});

const btnAct0 = document.getElementById('botonBuscar0');
btnAct0.addEventListener('click',function(){
btnAct0.classList.toggle('botonHover')
  miInput.value = 0;
});
*/