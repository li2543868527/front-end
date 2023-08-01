let label = document.getElementById("label");
let button1 = document.getElementById("change-text1");
let button2 = document.getElementById("change-text2");
let button3 = document.getElementById("change-text3");

//label.innerHTML = "りんご";

button1.addEventListener("click",()=>{
    label.innerHTML = "りんご";
    console.log("りんごに変更");
});

button2.addEventListener("click",()=>{
    label.innerHTML = "バナナ";
    console.log("バナナに変更");
});

button3.addEventListener("click",()=>{
    label.innerHTML = "みかん";
    console.log("みかんに変更");
});

