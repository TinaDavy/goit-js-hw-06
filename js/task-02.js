const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

function createMarkup(arr){
  const nodesArr = arr.map(element => {
    const liEl = document.createElement("li");
    liEl.textContent = element;
    liEl.classList.add("item");
    return list.append(liEl);
  });
};

createMarkup(ingredients);