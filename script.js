document.getElementById("calc-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseFloat(document.getElementById("age").value);
  const activity = parseFloat(document.getElementById("activity").value);
  const goal = document.getElementById("goal").value;

  // معادلة Mifflin-St Jeor
  let bmr = 10 * weight + 6.25 * height - 5 * age + 5;

  let calories = bmr * activity;

  if (goal === "bulk") calories += 300;
  else if (goal === "cut") calories -= 300;

  const protein = weight * 2.2;
  const fat = weight * 0.9;
  const carbs = (calories - (protein * 4 + fat * 9)) / 4;

  document.getElementById("calories").innerText = Math.round(calories);
  document.getElementById("protein").innerText = Math.round(protein);
  document.getElementById("fat").innerText = Math.round(fat);
  document.getElementById("carbs").innerText = Math.round(carbs);

  document.getElementById("results").style.display = "block";
});
