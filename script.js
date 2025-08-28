function toggleMenu() {
  const nav = document.querySelector('.nav-links');  // ✅ correct class
  nav.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function () {
  let ratingForm = document.querySelector('.rating-form');

  if (ratingForm) {
    ratingForm.addEventListener('submit', function (event) {
      event.preventDefault(); 
      
      let selectedRating = document.querySelector('input[name="rating"]:checked');

      if (selectedRating) {
        alert("Thank you! You rated us " + selectedRating.value + " star(s).");
      } else {
        alert("Please choose a star rating before submitting.");
      }
    });
  }
});

