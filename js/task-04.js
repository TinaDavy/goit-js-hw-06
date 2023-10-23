let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

const counterValueElement = document.querySelector("#value")

decrementBtn.addEventListener("click", handleDecrementBtn);

function handleDecrementBtn(){
    counterValue -= 1;
    return counterValueElement.textContent = counterValue;
};

incrementBtn.addEventListener("click", handleIncrementBtn);

function handleIncrementBtn(){
    counterValue += 1;
    return counterValueElement.textContent = counterValue;
}
