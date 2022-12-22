function random(click){ 

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var aleatorio1="./images/dice"+randomNumber1+".png";
var aleatorio2="./images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",aleatorio1);
document.querySelector(".img2").setAttribute("src",aleatorio2); 

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent="🚩¡El jugador 1 gana!";
    document.querySelector("h2").textContent="¿Otra más?";
    const audioElement1 = new Audio("./sounds/victoria.mp3");
    audioElement1.play();
    div = document.getElementById('walter');
    div.style.display = '';
    div = document.getElementById('empate');
    div.style.display = 'none';

}
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").textContent="🚩¡El jugador 2 gana!";
        document.querySelector("h2").textContent="¿Otra más?";
        const audioElement2 = new Audio("./sounds/victoria.mp3");
        audioElement2.play();
        div = document.getElementById("walter");
        div.style.display = '';
        div = document.getElementById('empate');
        div.style.display = 'none';
    }

else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent="🚩¡EMPATE!";
    document.querySelector("h2").textContent="Desempatamos ¿no?";
    const audioElement3 = new Audio("./sounds/empatado.mp3");
    audioElement3.play();
    div = document.getElementById('empate');
    div.style.display = '';
    div = document.getElementById('walter');
    div.style.display = 'none';
}
}
