
// Hamburger Menu
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// Contact Form
const scriptURL = "https://script.google.com/macros/s/AKfycbwk9BPDKx-2iMOkL4Igd4l6BZw5pDxApIjGBi0cjF7b83HoiiDCZgdBCwOnUFLchiVX/exec";
const form = document.forms["ryyzaids-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".alert");
const closeAlert = document.querySelector(".alert-btn-close");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   ketika tombol submit di click
  // tombol sending tampil, tombol send hilang
  btnLoading.classList.toggle("display-none");
  btnKirim.classList.toggle("display-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tombol send tampil, tombol sending hilang
      btnLoading.classList.toggle("display-none");
      btnKirim.classList.toggle("display-none");
      //   allert tampil
      myAlert.classList.toggle("display-none");
    //   reset form
    form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

closeAlert.addEventListener("click", () => {
  myAlert.classList.add("display-none");
});