//menu
document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.nav-list');
  const toggleButton = document.getElementById('menu-icon');

  toggleButton.addEventListener('click', function () {
    menu.classList.toggle('active');
  });
});

//fim - menu

//slider cardapio

const slider = [ 'Calabresa.jpg', 'cebola.jpg', 'tomate.jpg','misturada.jpg', 'banana nevada.jpg']
const tam = slider.length   
let satual = 0 
let tmpslider  

function trocaAutomatica(){
	satual++
	if(satual >= tam){
		satual = 0
	}
	document.querySelector('#slider-cardapio').style.backgroundImage=`url('${slider[satual]}')`
}

function iniciaSlider(){
	document.querySelector('#slider-cardapio').style.backgroundImage=`url('${slider[satual]}')`
	tmpslider = setInterval(trocaAutomatica,3000)
}

function parar(){
	clearInterval(tmpslider)
}

function troca(dir){
	satual +=dir
	if(satual<0){
		satual=4
	}
	else if(satual >=tam){
			satual =0
		}
	document.querySelector('#slider-cardapio').style.backgroundImage=`url('${slider[satual]}')`
	clearInterval(tmpslider)
}

window.onload = iniciaSlider

//fim - slider

//contador 
const status = document.getElementById("status");

if (status) {
  const now = new Date();
  const hour = now.getHours();

  if ((hour >= 18 && hour < 23) || (hour === 23 && now.getMinutes() <= 40)) {
    status.textContent = "Estamos abertos!";
  } else {
    status.textContent = "Estamos fechados no momento";
  }
}

//fim - contador se estamos aberto ou fechado

//btn

const btn = document.querySelector('.btn-text');

if (btn) {
  btn.addEventListener('mouseenter', () => {
    btn.textContent = 'TO MUITO(A) CURIOSO(A) PARA CONHECER';
  });

  btn.addEventListener('mouseleave', () => {
    btn.textContent = 'CONHECER AS UNIDADES';
  });
}

//fim - btn

//unidades
const h1 = document.querySelector("h1")
const h2 = document.querySelectorAll("h2")
if (document.body.id === "unidades-page"){
h1.addEventListener("mouseover", function() {
  this.style.color = "red";
})

h1.addEventListener("mouseout", function() {
  this.style.color = "white";
})

for (let i = 0; i < h2.length; i++) {
  h2[i].addEventListener("mouseover", function() {
    this.style.color = "red";
  })

  h2[i].addEventListener("mouseout", function() {
    this.style.color = "white";
  });
}

const imagens = document.querySelectorAll('.unidades img');

imagens.forEach(function(img)  {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.05)';
    img.style.transition = 'transform 0.3s ease';
  });

  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)';
  });
});
} 
 

//fim - unidades


//sobre
document.addEventListener("DOMContentLoaded", function () {
const h1 = document.querySelector("h1")
const h2 = document.querySelectorAll("h2")

if (document.body.id === "sobre-page"){
h1.addEventListener("mouseover", function() {
  this.style.color = "red";
})

h1.addEventListener("mouseout", function() {
  this.style.color = "white";
})

for (let i = 0; i < h2.length; i++) {
  h2[i].addEventListener("mouseover", function() {
    this.style.color = "red";
  })

  h2[i].addEventListener("mouseout", function() {
    this.style.color = "white";
  });
}
const imagens = document.querySelectorAll('.sobre img');

imagens.forEach(function(img)  {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.05)';
    img.style.transition = 'transform 0.3s ease';
  });

  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)';
  });
});
} 
})

//fim - sobre

//home 
if (document.body.id === "mainpag"){
setTimeout(() => {
  alert("🍕 Bem-vindo à Maribella’s Pizza! Aproveite 20% OFF nas nossas delícias!");
}, 1000);

const imagens = document.querySelectorAll('.imgp, .imgp2');

imagens.forEach(function(img)  {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.05)';
    img.style.transition = 'transform 0.3s ease';
  });

  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)';
  });
});

}


//fim - home