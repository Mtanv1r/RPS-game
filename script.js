 

let me=document.getElementById('res1');
let bot=document.getElementById('res2');
let R=document.getElementById("rock");
let P=document.getElementById("paper");
let S=document.getElementById("scissors");
let result=document.getElementById('gmr');
R.addEventListener('click',()=>{
     me.innerText='rock';
    const arr=["rock","paper","scissors"];
    let Comp=Math.floor(Math.random()*arr.length);
    bot.innerText=arr[Comp];
   if(arr[Comp]=="rock"){
//     alert('draw');
    result.innerText="draw";
   }
   else if(arr[Comp]=="paper"){
    result.innerText="you lost!!!!";
   }
   else{result.innerText="you win!!!!"};
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
    result.innerText="draw";
   }
   else if(arr[Comp]=="scissors"){
    result.innerText="you lost!!!!";
   }
   else{result.innerText="you win!!!!"}; 
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
    result.innerText="draw";
   }
   else if(arr[Comp]=="rock"){
    result.innerText="you lost!!";
   }
   else{result.innerText="you win!!"}
})

