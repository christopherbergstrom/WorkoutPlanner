var pop = new Pop();
var gen = new Generate();
var goalsSelect;
var upper;
var core;
var lower;
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
// var message;
var futureMessage="Do all of the excerises for as long as you can.";

window.onload = function()
{
  // console.log("loaded");
  // window.print();
  body = document.querySelector("body");
  goalsSelect = document.getElementById("goalsSelect");
  upper = document.getElementById("upper");
  core = document.getElementById("core");
  lower = document.getElementById("lower");
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
  var message = document.createElement("div");
  message.setAttribute("id", "message");
  container.appendChild(message);
  btn.addEventListener("click", function()
  {
    if (upper.checked || core.checked || lower.checked || arms.checked || shoulders.checked || chest.checked || back.checked || abs.checked || legsButt.checked)
    {
      if (mon.checked || tues.checked || wed.checked || thurs.checked || fri.checked || sat.checked || sun.checked)
      {
        while (body.firstChild)
        {
          body.removeChild(body.firstChild);
        }
        buildTable();
      }
      else
      {
        message.innerHTML="You need to select at least one day that you are available to workout."
      }
    }
    else
    {
      message.innerHTML="You need to select at least one muscle group that you want to workout."
    }
  });
  pop.muscle();
  removeOptions();
  pop.fat();
}
function change()
{
  if (goalsSelect.value === "Fat Loss")
  {
    futureMessage="Do all of the excerises for as long as you can.";
    removeOptions();
    pop.fat();
  }
  else if (goalsSelect.value === "Lean Muscle")
  {
    futureMessage="Do 3 sets of 15 reps for all of the exercises with a weight that you are comfortable with.";
    removeOptions();
    pop.muscle();
  }
  else if (goalsSelect.value === "Big Muscle")
  {
    futureMessage="Do 5 sets of 5 reps for all of the exercises with a weight that you are comfortable with.";
    removeOptions();
    pop.muscle();
  }
  else if (goalsSelect.value === "Just Staying in Shape")
  {
    futureMessage="Do 2 sets of 10 reps for all of the exercises with a weight that you are comfortable with.";
    removeOptions();
  }
  else if (goalsSelect.value === "Cardio")
  {
    futureMessage="Do one of the excerises for at least 30 minutes.";
    removeOptions();
  }
}
function removeOptions()
{
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
  var message = document.createElement("div");
  message.setAttribute("id", "message");
  message.innerHTML=futureMessage;
  var print = document.createElement("button");
  print.innerHTML="Print";
  print.setAttribute("id", "btn");
  print.addEventListener("click", function()
  {
    print.parentNode.removeChild(print);
    window.print();
  });
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
  fill(td, mon.checked);
  tr.appendChild(td);
  var td = document.createElement("td");
  fill(td, tues.checked);
  tr.appendChild(td);
  var td = document.createElement("td");
  fill(td, wed.checked);
  tr.appendChild(td);
  var td = document.createElement("td");
  fill(td, thurs.checked);
  tr.appendChild(td);
  var td = document.createElement("td");
  fill(td, fri.checked);
  tr.appendChild(td);
  var td = document.createElement("td");
  fill(td, sat.checked);
  tr.appendChild(td);
  var td = document.createElement("td");
  fill(td, sun.checked);
  tr.appendChild(td);
  table.appendChild(tr);
  container.appendChild(table)
  container.appendChild(message);
  container.appendChild(print);
  body.appendChild(container);
}
function fill(td, day)
{
  if (day)
  {
    if (goalsSelect.value === "Fat Loss")
    {
      td.innerHTML=gen.fat(upper.checked, core.checked, lower.checked);
    }
    if (goalsSelect.value === "Lean Muscle")
    {
      td.innerHTML=gen.lean(arms.checked, shoulders.checked, chest.checked, back.checked, abs.checked, legsButt.checked);
    }
    if (goalsSelect.value === "Big Muscle")
    {
      td.innerHTML=gen.big(arms.checked, shoulders.checked, chest.checked, back.checked, abs.checked, legsButt.checked);
    }
    if (goalsSelect.value === "Just Staying in Shape")
    {
      td.innerHTML=gen.shape();
    }
    if (goalsSelect.value === "Cardio")
    {
      td.innerHTML=gen.cardio();
    }
  }
}
