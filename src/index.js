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
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1); // スプレッド構文で配列が展開される

// // 引数の全ての要素の和を返す関数
// const sumFunc = (...nums) => console.log(nums.reduce((num1,num2) => num1 + num2));
// sumFunc(10,20,...arr1);

// // まとめる
// const arr2 = [1,2,3,4,5];
// // 1,2はnum1,num2,　残りはnumsに代入
// const [num1,num2, ...nums] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(nums);

// // 配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// // arr4のコピー(値渡し コピー元の値は変わらない)
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// // arr4とarr5を結合したarr7(値渡し)
// const arr7 = [...arr4,...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中","山田","じゃけぇ"];

// 従来の配列要素の表示方法
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// mapを使用した方法 第二引数にインデックス(要素番号)を入れることができる
// nameArr.map((name) => {
//     console.log(name);
// });
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const nameArr2 = nameArr.map((name) => {
//     return `${name}さん`;
// })
// console.log(nameArr2);

// const newNameArr = nameArr.map((name) => {
//     if(name !== "じゃけぇ"){
//         return `${name}さん`
//     }else{
//         return name;
//     }
// })
// console.log(newNameArr);



// filter
// const numArr = [1,2,3,4,5];
// // 奇数の値を抜き出すfilterの使い方
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 1;
// });
// console.log(newNumArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 2 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// // 型が数値の時は三桁区切りでカンマ表示とし、それ以外の場合は「数値を入力してください」を返す
// const formatteNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください";
// console.log(formatteNum);

// const checkSum = (num1,num2) => {
//     return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// }
// console.log(checkSum(40,50));
// console.log(checkSum(60,50));

/**
 * 論理演算氏の本当の意味を知ろう && ||
 */
// truthy,falsyについて
// truthy:暗黙的にtrueに変換されるもの "ABC","0",10,{}
// falsy:暗黙的にfalseに変換されるもの 0,NaN,false,"",null,undefined
// const val = undefined;
// if(val){
//     console.log("valはtruthyです");
// }else{
//     console.log("valはfalsyです");
// }

const flag1 = true;
const flag2 = true;

if(flag1 || flag2){
    console.log("1か2はtrueになります");
}
if(flag1&&flag2){
    console.log("1も2もtrueになります");
}

// ||(パイプライン)　は左側がtrurhyの時その時点で値が返却する
// numがtrueの値の場合はその時の値を返す。
// numがfalseの場合は||の右側の値が返される。
// 短絡評価・短絡演算と言われている。
const num = undefined;
const fee = num || "金額未設定です";
console.log(fee);

// &&(アンパサンド) は左側がfalsyの時、その時点で値が返却する
// num2がtrueの場合は&&の右側の値が返される。
// num2がfalseの場合はその時の値を返す。
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);

