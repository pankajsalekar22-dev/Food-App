let searchBox = document.querySelector(".searchBox");
let searchbtn = document.querySelector(".searchbtn");
let foodContainer = document.querySelector(".foodContainer");

foodContainer .innerHTML = "Fetching Recipes....";
let URL = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const fetchRecipes = async (query) =>{
let response = await fetch(URL + query)
let data =  await response.json();
foodContainer .innerHTML = "";
data.meals.forEach(meal => {
    let foodDiv= document.createElement('Div');
    foodDiv.classList.add("recipe");

    foodDiv.innerHTML = `<img src="${meal.strMealThumb}" alt="${meal.strMeal}">
    <h3>${meal.strMeal}</h3>
    <p><span>${meal.strArea}<span> Dish</p>
    <p> Belongs to <span>${meal.strCategory}<span> Category</p>`;
let button = document.createElement('button');
button.textContent = "View Recipe";
foodDiv.appendChild(button);


//add event 

    foodContainer.appendChild(foodDiv);
});
}

searchbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let serchinput = searchBox.value.trim();
fetchRecipes(serchinput);

   // console.log('hello')
});







