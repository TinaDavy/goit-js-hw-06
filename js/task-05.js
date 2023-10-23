const spanName = document.querySelector("#name-output");
const input = document.querySelector("#name-input");

input.addEventListener("input", handleInput);

function handleInput(event){
    if (event.currentTarget.value === "") {
    spanName.textContent = "Anonymys"} else {
        spanName.textContent = event.currentTarget.value.trim();
    }
};