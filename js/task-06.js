const input = document.querySelector("#validation-input");

input.addEventListener("blur", handleBlur);

function handleBlur(event){
    input.classList.remove("valid", "invalid");

    if (event.currentTarget.value.trim().length === Number(input.dataset.length)){
        input.classList.add("valid")
    } else {
        input.classList.add("invalid")
    }
};