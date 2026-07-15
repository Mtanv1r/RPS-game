 


let me=document.getElementById('res1');
let bot=document.getElementById('res2');

let R=document.getElementById("rock");
R.addEventListener('click',()=>{
    const arr=["rock","paper","scissors"];
    const Comp=Math.floor(Math.random()*arr.length);
   if(arr[Comp]=="rock"){
    alert('draw');
   }
   else if(arr[Comp]=="paper"){
    alert('you lose!');
   }
   else{alert('you won')};
   me.innerHTML=""
//    can i use ${} thing
})
