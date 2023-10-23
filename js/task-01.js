const list = document.querySelector("#categories");
const listItems = [...list.children];
const categoriesNum = listItems.length;

const message = console.log(`Number of categories: ${categoriesNum}`);
listItems.forEach(function(element){
    const elementTitle = element.querySelector("h2").textContent;
    const elementsNum = element.querySelectorAll("li").length;

    console.log(`Category: ${elementTitle}`);
    console.log(`Elements: ${elementsNum}`);

});


