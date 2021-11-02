

// const a = prompt("qancha yangilik kordingiz")
// b = +prompt("nechta yangilik kordingiz")

// for(let i = 4; i < 15; i ++ ){
//    if(a == "" && a == null && b =="" && b== null){

 
// answer.news[a] = b;
// console.log(answer);
//        console.log("tayor");
//    }
//    else{
//        i --; console.log("error") 
//    }
// }
// const answer ={
//    news:{}
// }




// function qoshish(a,b){
//     console.log("qoshishni organamiz");
//     console.log(a*b);
// }
// qoshish(555,555);

// window.addEventListener('scroll',()=>{
//     console.log('skrol bolayapti')      
// })


//for(let i=0; i<1;i++){
//    const question
//}




// let box = document.querySelector('.box'),
// btn = document.querySelector("button"),
// qabul = document.querySelector('.qabul');

// btn.addEventListener('click', () => {
//     box.classList.add("tugma");
//     box.style.background="pink";
// })
// qabul.addEventListener('click', () => {
//     box.classList.remove("tugma");
// })

// "use strict";

// const btn = document.querySelectorAll('button'),
// text = document.querySelector('.text h1'),
// box = document.querySelector('.box');

// btn[0].addEventListener('click', () => {
//     text.style.color = 'yellow';
// });
// btn[1].addEventListener('click', () => {
//     text.style.color = 'blue';
// });
// btn[2].addEventListener('click', () => {
//     box.style.width = '600px';
//     box.style.background = 'black';
// });
// btn[3].addEventListener('click', () => {
//     btn[0].style.background = 'yellow';
//     btn[0].innerHTML='0';
// });



// const btns = document.querySelectorAll('button'),
//  text = document.querySelector('.text h1'),
//  box = document.querySelector('.box');

// btns[1].addEventListener('click', () =>{
    // btns[0].classList.add('auhsc');
    // btns[0].classList.remove('crimson');


    // if(!btns[1].classList.contains('blue')){
    //     btns[1].classList.add('blue');
    // }else{
    //     btns[1].classList.remove('blue');
    // }
/// 2 USULII..................

    //  btns[1].classList.toggle('blue');
//}) 

// text.innerHTML = '<mark>Salom dunyo</mark>';

// text.textContent = 'salom dunyo 2';

// const raqam = [1,2,3,4,5,6];

// let i = 0;

// raqam.forEach((item,index) =>{
//     console.log([index] = 'item');
// });

// news.classList.remove();
// news.forEach((item, index) =>{
//     news.innerHtml = `
//     ${item}  &{index}
//     <div class="box"></div>
//     `
// })
"use strict";

const btn = document.querySelectorAll('button'),
text = document.querySelector('.text h1'),
box = document.querySelector('.box'),
boxRadius = document.querySelector('.box_radius');

btn[0].addEventListener('click', () => {
    boxRadius.style.borderRadius = '50%';
    boxRadius.style.transition = '1s';
    boxRadius.style.background = 'blue';
})
btn[1].addEventListener('click', () => {
    box.style.width = '600px';
    box.style.transition = '1s';
   box.style.background = 'red';
    });
btn[2].addEventListener('click', () => {
    btn[0].style.background = 'blue';
    btn[1].style.background = 'blue';
});
btn[3].addEventListener('click', () => {
    box.style.display = 'none';
    boxRadius.style.display = 'none';
    text.style.fontFamily = 'monospace';
})