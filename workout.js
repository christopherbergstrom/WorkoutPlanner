var goals;
var arms;
var shoulders;
var chest;
var back;
var abs;
var legsButt;
var mon;
var tues;
var wed;
var thurs;
var fri;
var sat;
var sun;
var btn;
var body;

window.onload = function()
{
  // console.log("loaded");
  // window.print();
  body = document.querySelector("body");
  goals = document.getElementById("goals");
  arms = document.getElementById("arms");
  shoulders = document.getElementById("shoulders");
  chest = document.getElementById("chest");
  back = document.getElementById("back");
  abs = document.getElementById("abs");
  legsButt = document.getElementById("legsButt");
  mon = document.getElementById("mon");
  tues = document.getElementById("tues");
  wed = document.getElementById("wed");
  thurs = document.getElementById("thurs");
  fri = document.getElementById("fri");
  sat = document.getElementById("sat");
  sun = document.getElementById("sun");
  btn = document.getElementById("btn");
  btn.addEventListener("click", function()
  {
    while (body.firstChild)
    {
      body.removeChild(body.firstChild);
    }
  });
}
function buildTable()
{
  var table = document.createElement("table");
  var tr = document.createElement("tr");
  var th = document.createElement("th");
  th.innerHTML="Monday";
  tr.appendChild(th);
  var th = document.createElement("th");
  th.innerHTML="Tuesday";
  tr.appendChild(th);
  var th = document.createElement("th");
  th.innerHTML="Wednesday";
  tr.appendChild(th);
  var th = document.createElement("th");
  th.innerHTML="Thursday";
  tr.appendChild(th);
  var th = document.createElement("th");
  th.innerHTML="Friday";
  tr.appendChild(th);
  var th = document.createElement("th");
  th.innerHTML="Saturday";
  tr.appendChild(th);
  var th = document.createElement("th");
  th.innerHTML="Sunday";
  tr.appendChild(th);
  body.appendChild(table);
}
