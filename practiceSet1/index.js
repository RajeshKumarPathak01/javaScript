document.addEventListener('DOMContentLoaded',()=>{

let btn1=document.querySelector('#btn1');
let btn2=document.querySelector('#btn2');
let btn3=document.querySelector('#btn3');
let h1=document.querySelector('#cartSummary');


let count=0;

btn1.addEventListener('click',()=>{
    count++;
    h1.innerText=`your bag has ${count} item`;
})


btn2.addEventListener('click',()=>{
    count--;
    h1.innerText=`your bag has ${count} item`;
})




//btn3.addEventListener('click',setInterval(changeColor, 500));

function autochanger() {
    setInterval(() => {
        changeColor()
    }, 500);
}



btn3.addEventListener('click',()=>{
      autochanger()
})

function changeColor() {
    let color='#';
     let hex='0123456789ABCDEF'; 
    for(i=0;i<6;i++){
       color+= hex[Math.floor(Math.random()*hex.length)];
   }
    
    document.body.style.backgroundColor=color;
    document.body.style.transition='all,1s,ease-in'
    document.getElementById('cartSummary').innerText=`Your color code is ${color}`
   
   

   
}

   










})