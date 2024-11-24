// var val1 = "var変数";
// console.log(val1);

// // var変数は上書きが可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言が可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // constは上書き不可能
// val3 = "const変数を上書き";
// console.log(val3);

// constは再宣言不可能
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//     name: "雄太",
//     age: 35
// };
// console.log(val4);

// val4.name = "yuta";
// val4.address = "Tottori";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog","cat"];

// console.log(val5);

// val5[0] = "bird";
// console.log(val5);

// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const myname = "雄太";
// const myage = 35;

//　「私の名前は雄太です.年齢は35歳です」

// 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${myname}です。年齢は${myage}歳です。`;
// console.log(message2);
