// Hamburger menu
const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("show");
});

// Klik diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.remove("show");
  }
});

const formAlert = document.querySelector(".formAlert");
const alertClose = document.querySelector(".alertClose");

alertClose.addEventListener("click", function () {
  formAlert.style.opacity = "0";
  setTimeout(() => {
    formAlert.style.display = "none";
  }, 100);
  setTimeout(() => {
    formAlert.style.opacity = "1";
  }, 50);
});

function validate() {
  const formAlert = document.querySelector(".formAlert");
  const form = document.querySelector("form");
  const btnLoading = document.querySelector(".btn-loading");
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let pesan = document.querySelector("#pesan");
  let btnKirim = document.querySelector(".btn-kirim");

  btnLoading.style.display = "none";
  formAlert.style.display = "none";

  btnKirim.addEventListener("click", function (e) {
    e.preventDefault();
    if (name.value == "" || email.value == "" || pesan.value == "") {
      inputempty();
    } else {
      sendmail(name.value, email.value, pesan.value);
      console.log("Pesan berhasil terkirim");
      btnKirim.style.display = "none";
      btnLoading.style.display = "flex";
      setTimeout(() => {
        btnLoading.style.display = "none";
        btnKirim.style.display = "flex";
        formAlert.style.display = "flex";
        form.reset();
      }, 3000);
    }
  });
}
validate();

function sendmail(name, email, pesan) {
  emailjs.send("service_9o4p2pa", "template_dd8ebfh", {
    from_name: name,
    to_name: email,
    message: pesan,
  });
}
