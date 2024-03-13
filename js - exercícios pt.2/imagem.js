const imagem = document.getElementById('imagem'); 
const mensagem = document.getElementById('mensagem'); 

imagem.addEventListener('mouseover', () => { 
     mensagem.style.display = 'block'; }); 

imagem.addEventListener('mouseout', () => {  
    mensagem.style.display = 'none'; });