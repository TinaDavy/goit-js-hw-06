const input = document.querySelector("#validation-input");

input.addEventListener("blur", handleBlur);

function handleBlur(event){
    if (event.currentTarget.value.length === Number(input.dataset.length)){
        input.classList.add("valid")
    } else {
        input.classList.add("invalid")
    }
};