 

let me=document.getElementById('res1');
let bot=document.getElementById('res2');
let R=document.getElementById("rock");
let P=document.getElementById("paper");
let S=document.getElementById("scissors");
R.addEventListener('click',()=>{
     me.innerText='rock';
    const arr=["rock","paper","scissors"];
    let Comp=Math.floor(Math.random()*arr.length);
    bot.innerText=arr[Comp];
   if(arr[Comp]=="rock"){
    alert('draw');
   }
   else if(arr[Comp]=="paper"){
    alert('you lose!');
   }
   else{alert('you won')};
})
//for paper button
P.addEventListener('click',()=>{
    //speed will update
         me.innerText='paper';
    const arr=["rock","paper","scissors"];
    let Comp=Math.floor(Math.random()*arr.length);
    //bot text updated
    bot.innerText=arr[Comp];
   if(arr[Comp]=="paper"){
    alert('draw');
   }
   else if(arr[Comp]=="scissors"){
    alert('you lose!');
   }
   else{alert('you won')};
})
//for scissors button
S.addEventListener('click',()=>{
    //speed will update
         me.innerText='Scissors';
    const arr=["rock","paper","scissors"];
    let Comp=Math.floor(Math.random()*arr.length);
    //bot text updated
    bot.innerText=arr[Comp];
   if(arr[Comp]=="scissors"){
    alert('draw');
   }
   else if(arr[Comp]=="rock"){
    alert('you lose!');
   }
   else{alert('you won')};
})

