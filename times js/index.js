let times = new Date();

let kun = times.getDate();
let yil = times.getFullYear();
let mons = times.getMonth();
let hafta = times.getDay();


let oylar = ["yanvar","fevral","mart","ap","may","iy","iyl","avg","sent"," Oktyabr","noy","dec"];
let day = ["yakshanba","dushanba","seshanba","chorshanba","payshanba","juma","shanba"];
document.write( yil ,"-yil ", oylar[ mons ] ," oyi  ","sana ", kun ," ", day[hafta]," kuni");
 
// document.write(times);
function showTime(){
    let times = new Date();

    document.querySelector('.hour').textContent = times.getHours();
    document.querySelector('.minut').textContent = times.getMinutes();
    document.querySelector('.secont').textContent = times.getSeconds();
   
}
 showTime();

 setInterval(function (){
     showTime();
 }, 1000);