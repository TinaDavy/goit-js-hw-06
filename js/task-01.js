const list = document.querySelector("#categories");
const listItems = [...list.children];
const categoriesNum = listItems.length;

const message = console.log(`Number of categories: ${categoriesNum}`);
listItems.forEach(function(element){
    const elementTitle = element.firstElementChild.textContent;
    const elementsNum = element.lastElementChild.children.length

    console.log(`Category: ${elementTitle}`);
    console.dir(`Elements: ${elementsNum}`);
});


