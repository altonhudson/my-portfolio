
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



