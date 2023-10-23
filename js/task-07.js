const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", handleInput);

function handleInput(event){
    return text.style.fontSize = `${event.currentTarget.value}px`
};