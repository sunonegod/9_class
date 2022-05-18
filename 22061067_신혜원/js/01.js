/*document.write("안녕");
console.log("Hi");
var box = 100;
console.log(box);
box = 30;
console.log(box);
var a = 100;
var b = "100";
console.log(a);
console.log(b);
var tag = "<h1>Title</h1>"
console.log(tag);
console.log(typeof(tag));
document.write(tag);
var s = 100;
var t = 30;
console.log(s);
console.log(t);
console.log(typeof(s));
console.log(typeof(t));
console.log(s + t); //연결 연산자*/
//Boolean
/*
var s1 = true;
var s2 = "true";
var s3 = false;
console.log(s1);
console.log(s2);
console.log(s3);
console.log(typeof(s1));
console.log(typeof(s2));

var s1 = "0";
var s2 = 1;
console.log(Number(s1));
console.log(s2);
*?
//함수선언
/*function test(){
    var myNum = 10;
    console.log("hi");
    console.log("함수 안: " + myNum);
}
console.log("밖1: " + myNum);
//함수호출
test();
console.log("밖2: " + myNum);

var num1 = 10;
console.log(num1);

function test(){
    var num1 = 20;
    console.log(num1);
}
test();
console.log(num1);
*/


document.getElementById("btn_prev").onclick = function(){
    console.log("이전버튼");
    if(myNum == 1){
        myNum = totalNum;
    } else{
        myNum--;
    }
    numberSetting();//굳이 다 쓸 필요없이 앞에서 선언한 함수를 호출만 하면 됨
    document.getElementById("pic").style.border = "3px solid blue";
    document.getElementById("pic").style.left = "150px";
}
document.getElementById("btn_next").onclick = function(){
    console.log("다음버튼");
    if(myNum == totalNum){ //만약에 마이 넘이 3이라면
        myNum = 1; //1로 하라
    } else{
        myNum++;
    }
    numberSetting();
    document.getElementById("pic").style.border = "3px solid blue";
    document.getElementById("pic").style.left = "500px";
};
let myNum = 1; //myNum이 1이라고 선언
const totalNum = 3;

function numberSetting(){ //넘버세팅이라는 함수를 선언 압축해서 쓴거
    document.getElementById("num").innerText = myNum; //innerText에 1이 뜬다.
}
numberSetting();