var pop = new Pop();
var goalsSelect;
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
var focus;

window.onload = function()
{
  // console.log("loaded");
  // window.print();
  body = document.querySelector("body");
  goalsSelect = document.getElementById("goalsSelect");
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
  focus = document.getElementById("focus");
  btn.addEventListener("click", function()
  {
    while (body.firstChild)
    {
      body.removeChild(body.firstChild);
    }
    buildTable();
  });
  pop.fat();
}
function change()
{
  if (goalsSelect.value === "Fat Loss")
  {
    console.log("here");
    removeOptions();
    pop.fat();
  }
  else if (goalsSelect.value === "Lean Muscle")
  {
    removeOptions();
    pop.muscle();
  }
  else if (goalsSelect.value === "Big Muscle")
  {
    removeOptions();
    pop.muscle();
  }
  else if (goalsSelect.value === "Just Staying in Shape")
  {
    removeOptions();
  }
  else if (goalsSelect.value === "Cardio")
  {
    removeOptions();
  }
}
function removeOptions()
{
  console.log("removing");
  while (focus.firstChild)
  {
    focus.removeChild(focus.firstChild);
  }
}
function buildTable()
{
  var top = document.createElement("div");
  top.innerHTML="My Workout";
  top.setAttribute("id", "top");
  body.appendChild(top);
  var container = document.createElement("div");
  container.setAttribute("id", "container");
  var print = document.createElement("button");
  print.innerHTML="Print";
  print.setAttribute("id", "btn");
  print.addEventListener("click", function()
  {
    print.parentNode.removeChild(print);
    window.print();
  });
  container.appendChild(print);
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
  table.appendChild(tr);
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  if (mon.checked === true)
  {
    if (goalsSelect.value === "Fat Loss")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Lean Muscle")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Big Muscle")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Just Staying in Shape")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Cardio")
    {
      td.innerHTML=;
    }
  }
  tr.appendChild(td);
  var td = document.createElement("td");
  if (tues.checked === true)
  {
    if (goalsSelect.value === "Fat Loss")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Lean Muscle")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Big Muscle")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Just Staying in Shape")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Cardio")
    {
      td.innerHTML=;
    }
  }
  tr.appendChild(td);
  var td = document.createElement("td");
  if (wed.checked === true)
  {
    if (goalsSelect.value === "Fat Loss")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Lean Muscle")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Big Muscle")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Just Staying in Shape")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Cardio")
    {
      td.innerHTML=;
    }
  }
  tr.appendChild(td);
  var td = document.createElement("td");
  if (thurs.checked === true)
  {
    if (goalsSelect.value === "Fat Loss")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Lean Muscle")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Big Muscle")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Just Staying in Shape")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Cardio")
    {
      td.innerHTML=;
    }
  }
  tr.appendChild(td);
  var td = document.createElement("td");
  if (fri.checked === true)
  {
    if (goalsSelect.value === "Fat Loss")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Lean Muscle")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Big Muscle")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Just Staying in Shape")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Cardio")
    {
      td.innerHTML=;
    }
  }
  tr.appendChild(td);
  var td = document.createElement("td");
  if (sat.checked === true)
  {
    if (goalsSelect.value === "Fat Loss")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Lean Muscle")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Big Muscle")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Just Staying in Shape")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Cardio")
    {
      td.innerHTML=;
    }
  }
  tr.appendChild(td);
  var td = document.createElement("td");
  if (sun.checked === true)
  {
    if (goalsSelect.value === "Fat Loss")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Lean Muscle")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Big Muscle")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Just Staying in Shape")
    {
      td.innerHTML=;
    }
    if (goalsSelect.value === "Cardio")
    {
      td.innerHTML=;
    }
  }
  tr.appendChild(td);
  table.appendChild(tr);
  container.appendChild(table)
  body.appendChild(container);
}

var fat = "";
