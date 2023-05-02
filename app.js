https://www.kirilv.com/canvas-confetti/

function firstTest(){
    confetti({
        particleCount: 400,
        spread: 100,
        origin: { y: 0.6 }
      });

    
}

const pippo = document.getElementById('pippo')
const p = document.createElement('p')
const text = document.createTextNode('ciao')

p.appendChild(text);
pippo.appendChild(p);

$('#pippo').append($('<p>').text('ciao jquery'));
const pluto = document.querySelector('.pluto')

//versione JavaScript come faceva prima di copiare da jquery
const plutoCollection = document.getElementsByClassName('pluto')
const firstPluto = plutoCollection[0]
console.log(firstPluto)

//versione jquery
const pluto2 = $('.pluto')[0]
console.log(pluto2)