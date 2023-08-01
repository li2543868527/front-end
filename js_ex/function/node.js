//メソッドその１
function printHello() {
    console.log("Hello");
}
//メソッドの呼び出し
printHello();

//メソッド2returnあり
function sum(a, b) {
    return a + b;
}

console.log(sum(1, 3));

//デフォルトパラメータ
function print(str1, str2 = "こんにちは", str3 = "!!!!!") {
    console.log(str1 + "  " + str2 + str3);
}

//呼び出し
print("ヤッホー");
print("ヤッホー", "お昼寝したい");
print("ヤッホー", "お昼寝したい", "おやつも食べたい");

//ラムダ式
let add = (x, y) => x + y;
console.log(add(2, 3));

let a = 100;

function isPrime(number) {
    for (i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

let arr3 = new Array(a);
let k = 0;
for (i = 2; k < a; i++) {
    if (isPrime(i)) {
        arr3[k++] = i;
    }
}
console.log(arr3);
