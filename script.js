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
