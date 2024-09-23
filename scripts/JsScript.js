let x=()=>{
    alert('You have clicked me.');
    alert("new line added.");
    alert("third line added.");
}

let btn=document.querySelector("Button");
btn.addEventListener("click",x);