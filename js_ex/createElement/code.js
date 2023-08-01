let list = document.getElementById("list");

let newLink = document.createElement("a");

newLink.innerHTML = "developer.mozilla.org";
list.append(newLink);
// list.after(newLink);

//新しいリストを作成
let item = document.createElement("li");
list.append(item);
item.append(newLink);



let removeLink = document.getElementById("link-2")
removeLink.parentNode.remove();

/**document.getElementById("button").onclick = function() {
  // ここに#buttonをクリックしたら発生させる処理を記述する
}; */

// document.getElementById("button").onclick=()=>{
//   処理
// }

let btnEvent = document.getElementById("button1");

// btnEvent.onclick = function () {
//     console.log("ボタンをクリックした");
// }

/**対象の要素.addEventListener(種類, () => {
  // 処理を記述
}); */
// 対象の要素.addEventListener(種類, function() {
//    // 処理を記述
//  }, false);

btnEvent.addEventListener("click",()=>{
    console.log("ボタンをクリックその3");
});

btnEvent.addEventListener("click",()=>{
    console.log("ボタンをクリックその4");
});

function hello (){
    console.log("hello");
}
