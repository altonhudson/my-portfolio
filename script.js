
let detailsBtn = document.querySelectorAll('.project-details');
let details = document.querySelectorAll('.hide-project-details')

for (let i = 0; i < detailsBtn.length; i++) {
    detailsBtn[i].addEventListener("click", function () {
        console.log(detailsBtn[i]);

        for (let p = 0; p < details.length; p++) {
            if (detailsBtn[i].id == details[p].id) {
                details[p].classList.toggle('show-project-details')
            }
        }
    })
}

const validate = () => {
    let name = document.getElementById("userName").value;
    if (name == "") {
        alert("Please enter your name");
        return false
    }

    let email = document.getElementById("email").value;
    if (email == "" || email.includes("@") == false) {
        alert("Please entere a valid email");
        return false;
    }

    let message = document.getElementById("message").value;
    if (message == "") {
        alert("Please enter a valid message. ")
        return false

    } else if (message.length < 36) {
        alert("Message must be over 36 characters.")
        return false
    }
    alert("Message has been sent.");
    return true
}

let submit = document.getElementById("submit-button");

submit.addEventListener("click", (e) => {
    e.preventDefault()
    if(validate()){
        document.querySelector("form").reset();
    }
})