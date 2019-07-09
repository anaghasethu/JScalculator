
function display(num) {
    let iptext = document.getElementById("iptext");
    let ipvalue = iptext.value;
    ipvalue = ipvalue+num;
    iptext.value=ipvalue;
}

function displayDot() {
    var iptext = document.getElementById("iptext");
    var ipvalue = iptext.value;
    if ( ipvalue.indexOf('.') <= -1){
      ipvalue = ipvalue + ".";
      iptext.value= ipvalue;
    }
}

function isInt(num){
  return num % 1 == 0;
}

var num1;
var op;

function plus(){
  var iptext = document.getElementById('iptext');
  num1 = iptext.value;
  iptext.value = "";
  op = "+";
}

function minus(){
  var iptext = document.getElementById('iptext');
  num1 = iptext.value;
  iptext.value = "";
  op = "-";
}

function multiply(){
  var iptext = document.getElementById('iptext');
  num1 = iptext.value;
  iptext.value = "";
  op = "*";
}

function divide() {
  var iptext = document.getElementById('iptext');
  num1 = iptext.value;
  iptext.value = "";
  op = "/";
}

function equal() {
  var iptext = document.getElementById("iptext");
  var num2 = iptext.value;
  var answer;
  if ( op == "+" ){
    answer = Number(num1) + Number(num2);
    }
  else if ( op == "-" ) {
    answer = Number(num1) - Number(num2);
  }
  else if ( op == "*" ) {
    answer = Number(num1) * Number(num2);
  }
  else {
    answer = Number(num1) / Number(num2);
  }

  if ( isNaN(answer) ) {
    iptext.value = "";
  }
  else {
    iptext.value = answer;
  }

}


function ac(){
  var iptext = document.getElementById("iptext");
  iptext.value="";
}

function del() {
  var iptext = document.getElementById("iptext");
  var ipvalue = iptext.value;
  ipvalue = ipvalue.substring(0,ipvalue.length - 1);
  iptext.value = ipvalue;
}
