var Pop = function(){};
Pop.prototype.fat = function()
{
  var check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("value", "Upper Body");
  check.setAttribute("id", "upper");
  var span = document.createElement("span");
  span.innerHTML=" Upper Body";
  focus.appendChild(check);
  focus.appendChild(span);
  var br = document.createElement("br");
  focus.appendChild(br);
  upper = check;

  var check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("value", "Core");
  check.setAttribute("id", "core");
  var span = document.createElement("span");
  span.innerHTML=" Core";
  focus.appendChild(check);
  focus.appendChild(span);
  var br = document.createElement("br");
  focus.appendChild(br);
  core = check;

  var check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("value", "Lower Body");
  check.setAttribute("id", "lower");
  var span = document.createElement("span");
  span.innerHTML=" Lower Body";
  focus.appendChild(check);
  focus.appendChild(span);
  var br = document.createElement("br");
  focus.appendChild(br);
  lower = check;
}
Pop.prototype.muscle = function()
{
  var check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("value", "Arms");
  check.setAttribute("id", "arms");
  var span = document.createElement("span");
  span.innerHTML=" Arms";
  focus.appendChild(check);
  focus.appendChild(span);
  var br = document.createElement("br");
  focus.appendChild(br);
  arms = check;

  var check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("value", "Shoulders");
  check.setAttribute("id", "shoulders");
  var span = document.createElement("span");
  span.innerHTML=" Shoulders";
  focus.appendChild(check);
  focus.appendChild(span);
  var br = document.createElement("br");
  focus.appendChild(br);
  shoulders = check;

  var check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("value", "Chest");
  check.setAttribute("id", "chest");
  var span = document.createElement("span");
  span.innerHTML=" Chest";
  focus.appendChild(check);
  focus.appendChild(span);
  var br = document.createElement("br");
  focus.appendChild(br);
  chest = check;

  var check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("value", "Back");
  check.setAttribute("id", "back");
  var span = document.createElement("span");
  span.innerHTML=" Back";
  focus.appendChild(check);
  focus.appendChild(span);
  var br = document.createElement("br");
  focus.appendChild(br);
  back = check;

  var check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("value", "Abs");
  check.setAttribute("id", "abs");
  var span = document.createElement("span");
  span.innerHTML=" Abs";
  focus.appendChild(check);
  focus.appendChild(span);
  var br = document.createElement("br");
  focus.appendChild(br);
  abs = check;

  var check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("value", "LegsButt");
  check.setAttribute("id", "legsButt");
  var span = document.createElement("span");
  span.innerHTML=" Legs/Butt";
  focus.appendChild(check);
  focus.appendChild(span);
  var br = document.createElement("br");
  focus.appendChild(br);
  legsButt = check;
}
