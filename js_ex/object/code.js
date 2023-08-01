//object作成
let obj = { name: "Alice", id: 122, isStudent: true };
console.log(obj);

//aliceを表示させる
console.log(obj.name);
console.log(obj["name"]);

//上書きの仕方
obj.id = 30;
console.log(obj.id);

obj["isStudent"] = false;
console.log(obj["isStudent"]);
console.log("------------------------");
//for文
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log("------------------------");
//for-in文
for (let key in obj) {
    console.log(key + ":" + obj[key]);
}