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

trilho.addEventListener('click', ()=>{ //aerofunction parece nome de stand de jojo
    trilho.classList.toggle('light');
    body.classList.toggle('light');
    header.classList.toggle('light');
    home?.classList.toggle('light');
    servicosbox.forEach(card => {
        card.classList.toggle('light');
    });
    servconta.forEach(conta => {
        conta.classList.toggle('light');
    });

    
});