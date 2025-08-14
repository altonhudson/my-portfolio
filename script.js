
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

//DARK MODE
// let body = document.querySelector("body")
// body.classList.toggle("dark-mode")

let captureErrors = []

const validate = () => {
    let isValid = true

    let name = document.getElementById("userName").value;
    if (name == "") {
        captureErrors.push("Name")
        isValid = false
    } 
    let email = document.getElementById("email").value;
    if (email == "" || email.includes("@") == false) {
        captureErrors.push("Email")
        isValid = false
    } 
    
    let message = document.getElementById("message").value;
    if (message == "") {
        captureErrors.push("Message")
        isValid = false
    }else if (message.length < 36) {
        captureErrors.push("Message must be over 36 characters")
        isValid = false  
    }
    
    return isValid
}

let submit = document.getElementById("submit-button");

submit.addEventListener("click", (e) => {
    e.preventDefault()

    captureErrors.length = 0;

    if(validate()){
        document.querySelector("form").reset();
        alert("Form has been submitted.")
    
    } else {
        alert(`Please validate the following fields: ${captureErrors.join(", ")}.`)
        console.log(captureErrors);
    }
});


const darkModeBtn = document.getElementById('darkModeToggle');
const body = document.body;

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
