console.log('hello');
let detailsBtn = document.querySelector('.show-details-one');
let details = document.querySelector('.hide-project-one-details')

detailsBtn.addEventListener("click", function() {
    details.classList.toggle('show-project-one-details')

})