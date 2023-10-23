const form = document.querySelector(".login-form"); 

form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const {email, password} = event.currentTarget.elements;
    const message = "All fields must be completed!"

    if(email.value === "" || password.value === ""){
        alert(message);
    } else {
        const userData = {
            email: email.value,
            password: password.value,
        };
        console.log(userData);
    };

    event.currentTarget.reset();
};
