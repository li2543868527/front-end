//要素の取得
let text = document.getElementById("text-1");
console.log(text);
//要素の内容を取得
//aタグのリンクを取得
text.innerHTML = "Hello";

//aタグのリンクを取得 id  link-1
let link = document.getElementById("link-1");

console.log(link);

console.log(link.innerHTML);

console.log(link.href);

link.href = "https://www.4399.com";

link.target ="_blank";

//クラスの値を取得
let ex1 = document.getElementsByClassName("ex-1");
console.log(ex1);
console.log(ex1[0]);

let ex2 = document.getElementsByTagName("div");
console.log(ex2);
console.log(ex2[2]);