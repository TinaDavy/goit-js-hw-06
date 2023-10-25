function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");


createBtn.addEventListener("click", onCreateBtnClick);

function onCreateBtnClick(event){
  const amount = Number(input.value);
  console.log(amount);
  createBoxes(amount)
};

function createBoxes(amount){
  const boxes = [];
  for (let i = 1; i <= amount; i += 1){
    const color = getRandomHexColor();
    const box = document.createElement("div");
    box.style.backgroundColor = color;
    box.style.width = `${30*i}px`;
    box.style.height = `${30*i}px`;
    boxes.push(box);
  };
  divBoxes.append(...boxes);
};

destroyBtn.addEventListener("click", onDestroyBtnClick);

function onDestroyBtnClick(){
  divBoxes.innerHTML = "";
};
