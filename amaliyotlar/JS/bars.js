const box = document.querySelector('.box'),
bars = document.querySelector('.bars'),
close = document.querySelector('.close');

bars.addEventListener('click', () =>{
    box.classList.add('click');
    bars.style.display = 'none';
    close.style.display = 'block';
    
})
close.addEventListener('click', () =>{
    box.classList.remove('click');
    close.style.display = 'none';
    bars.style.display = 'block';
})