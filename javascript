// حفظ وتسجيل الأكل
const foodForm = document.getElementById("food-form");
const foodList = document.getElementById("food-list");

let foods = JSON.parse(localStorage.getItem("foods")) || [];

function updateFoodList() {
  foodList.innerHTML = "";
  let totalCalories = 0, totalProtein = 0, totalCarbs = 0, totalFat = 0;

  foods.forEach(food => {
    const li = document.createElement("li");
    li.innerText = `${food.name ${food.calories كالوري، {food.protein} بروتين، {food.carbs} كارب، 
{food.fat} دهون`;
    foodList.appendChild(li);
    totalCalories += food.calories;
    totalProtein += food.protein;
    totalCarbs += food.carbs;
    totalFat += food.fat;
  });

  document.getElementById("total-calories").innerText = totalCalories;
  document.getElementById("total-protein").innerText = totalProtein;
  document.getElementById("total-carbs").innerText = totalCarbs;
  document.getElementById("total-fat").innerText = totalFat;
}

foodForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const food = {
    name: document.getElementById("food-name").value,
    calories: +document.getElementById("food-calories").value,
    protein: +document.getElementById("food-protein").value,
    carbs: +document.getElementById("food-carbs").value,
    fat: +document.getElementById("food-fat").value
  };
  foods.push(food);
  localStorage.setItem("foods", JSON.stringify(foods));
  updateFoodList();
  foodForm.reset();
});

updateFoodList();

// تسجيل الوزن
const weightForm = document.getElementById("weight-form");
const weightList = document.getElementById("weight-list");

let weights = JSON.parse(localStorage.getItem("weights")) || [];

function updateWeightList() {
  weightList.innerHTML = "";
  weights.forEach(entry => {
    const li = document.createElement("li");
    li.innerText = `{entry.date}{entry.weight} كجم`;
    weightList.appendChild(li);
  });
}

weightForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const weight = +document.getElementById("weight-input").value;
  const date = new Date().toLocaleDateString("ar-EG");
  weights.push({ date, weight });
  localStorage.setItem("weights", JSON.stringify(weights));
  updateWeightList();
  weightForm.reset();
});

updateWeightList();
