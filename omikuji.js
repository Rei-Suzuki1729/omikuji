let username;
let userresult;
username = prompt("お名前を教えてください。");
//入力されなかったときの処理
if (username == "") {
  username = "名無し";
}
document.getElementById("name").innerHTML = username;
//0~4の値をランダムでしゅうとくする
let rand = Math.floor(Math.random() * 5);
//しゅうとくした値によって処理分岐
if (rand == 0) {
  userresult = "大吉";
}
if (rand == 1) {
  userresult = "中吉";
}
if (rand == 2) {
  userresult = "小吉";
}
if (rand == 3) {
  userresult = "吉";
}
if (rand == 4) {
  userresult = "凶";
}
document.getElementById("result").innerHTML = userresult;