var Generate = function(){};
Generate.prototype.fat = function(upper, core, lower)
{
  var workout = "";
  if (upper)
  {
    workout+="Push-Ups<br>";
  }
  if (core)
  {
    workout+="Sit-Ups<br>";
  }
  if (lower)
  {
    workout+="Speed Walking/Jogging";
  }
  return workout;
}
Generate.prototype.lean = function(arms, shoulders, chest, back, abs, legsButt)
{
  var workout;
  if (arms)
  {
    workout+="Chin-Ups<br>Dips<br>";
  }
  if (shoulders)
  {
    workout+="Shoulder Raises<br>Military Press<br>";
  }
  if (chest)
  {
    workout+="Push-Ups<br>";
  }
  if (back)
  {
    workout+="Wide Pull-Ups<br>";
  }
  if (abs)
  {
    workout+="Sit-Ups<br>Side Sit-Ups<br>Leg-Ups<br>Plank<br>";
  }
  if (legsButt)
  {
    workout+="Squats<br>Calf-Raisers<br>Wall-Sits<br>Lunges<br>";
  }
  return workout;
}
Generate.prototype.big = function(arms, shoulders, chest, back, abs, legsButt)
{
  var workout;
  if (arms)
  {
    workout+="Curls<br>Concentration Curls<br>Tricep Push-Downs<br>";
  }
  if (shoulders)
  {
    workout+="Military Press<br>Shoulder Shrugs<br>";
  }
  if (chest)
  {
    workout+="Bench Press<br>Incline Bench Press<br>Decline Bench Press<br>Butterflies<br>";
  }
  if (back)
  {
    workout+="Lawn Mowers<br>Lat Pull-Downs<br>";
  }
  if (abs)
  {
    workout+="Weighted Sit-Ups<br>";
  }
  if (legsButt)
  {
    workout+="Leg Press<br>Weighted Lunges<br>";
  }
  return workout;
}
Generate.prototype.shape = function()
{
  return "Curls<br>Push-Ups<br>Sit-Ups<br>Squats<br>Calf-Raisers";
}
Generate.prototype.cardio = function()
{
  return "Jocking/Elliptical/Biking<br>";
}
