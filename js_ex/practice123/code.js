let tr = document.getElementById("text-result");
let button1 = document.getElementById("change-text1");
let button2 = document.getElementById("change-text2");
let button3 = document.getElementById("change-text3");

let a = 0;
button1.addEventListener("click",()=>{
    tr.innerHTML = "値:0";
    
});

button2.addEventListener("click",()=>{
    a++;
    var str="値:"+a;
    tr.innerHTML = str;
    
});

button3.addEventListener("click",()=>{
    a--;
    tr.innerHTML = "値:"+a;
    
});