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


/**
 * アロー関数
 */

// 従来の関数
// function func1(str) {
//     return str;
// };

// const func1 = function(str){
//     return str;
// };
// console.log(func1("func1です"));

// アロー関数
// 引数が1つの場合は引数の括弧が不要
// const func2 = str => {
//     return str;
// };
// console.log(func2("func2です"));

// // さらに省略した書き方({}とreturnを省略)
// const func2A = str => str;
// console.log(func2A("func2Aです"));

// const add = (num1,num2) => num1 + num2;
// console.log(add(1,2));

// const add_obj = (num1, num2) => ({
//     hoge: num1,
//     huga: num2,
// });
// console.log(add_obj(10,20));

/**
 * 分割代入
 */
// const myProfile = {
//     name: "雄太",
//     age: 35,
// }

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// // オブジェクトの分割代入
// const { name,age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile_arr = ["雄太",35];
// const message3 = `私の名前は${myProfile_arr[0]}です。年齢は${myProfile_arr[1]}歳です。`;
// console.log(message3);

// // 配列の分割代入
// const [name_arr,age_arr] = myProfile_arr;
// const message4 = `私の名前は${name_arr}です。年齢は${age_arr}歳です。`;
// console.log(message4);

/**
 * デフォルト値(引数、分割代入)
 */
// 関数の引数のデフォルト値
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello();
// sayHello("雄太");

// // オブジェクトの分割代入のデフォルト値
// const myProfile = {
//     age:35
// }
// //分割代入を行う際にローカル変数にデフォルト値を設定する
// const { age, name = "ゲスト" } = myProfile;
// console.log(age);
// console.log(name);

/**
 * オブジェクトの省略記法
 */
// const name = "雄太";
// const age = 35;

// const myProfile = {
//     name: name,
//     age: age,
// }
// console.log(myProfile);

// // オブジェクトのプロパティ名とローカル変数が同じような
// // 上記のmyProfileのような状態の場合、以下のように省略できる
// const myProfile2 = {
//     name,
//     age,
// }
// console.log(myProfile2);

/**
 * スプレッド構文 ...
 */

// 配列の展開
const arr1 = [1,2];
console.log(arr1);
console.log(...arr1); // スプレッド構文で配列が展開される

// 引数の全ての要素の和を返す関数
const sumFunc = (...nums) => console.log(nums.reduce((num1,num2) => num1 + num2));
sumFunc(10,20,...arr1);

// まとめる
const arr2 = [1,2,3,4,5];
// 1,2はnum1,num2,　残りはnumsに代入
const [num1,num2, ...nums] = arr2;
console.log(num1);
console.log(num2);
console.log(nums);

// 配列のコピー、結合
const arr4 = [10,20];
const arr5 = [30,40];

// arr4のコピー(値渡し コピー元の値は変わらない)
const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
console.log(arr4);

// arr4とarr5を結合したarr7(値渡し)
const arr7 = [...arr4,...arr5];
console.log(arr7);
