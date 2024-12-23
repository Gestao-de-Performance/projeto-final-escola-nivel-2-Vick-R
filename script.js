const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsiva');
    menuHamburguer.classList.toggle('change');

    if(menuHamburguer.classList.contains('change')){
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

document.getElementById('downloadButton').addEventListener('click', function() {
    const pdfUrl = 'pdf/curriculo.pdf'; 
    const link = document.createElement('a'); 
    link.href = pdfUrl; 
    link.download = 'curriculo.pdf'; 
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
});

let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let header = document.querySelector('header')
let home = document.querySelector("#home")
let servicosbox = document.querySelectorAll(".servicosbox")
let items = document.querySelectorAll('.slider .item');
let next = document.querySelector('#next');
let prev = document.querySelector('#prev');


trilho.addEventListener('click', ()=>{ //aerofunction parece nome de stand de jojo
    trilho.classList.toggle('light');
    body.classList.toggle('light');
    header.classList.toggle('light');
    home?.classList.toggle('light');
    servicosbox.forEach(card => {
        card.classList.toggle('light');
    });
    next.classList.toggle('light');
    prev.classList.toggle('light');
});

let active = 3;
function loadShow(){
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for(var i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;

    }
    stt = 0;
    for(var i = active - 1; i >= 0; i--){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

loadShow();
next.onclick = function(){
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}

prev.onclick = function(){
    active = active - 1 >=  0 ? active - 1 : active;
    loadShow();
}