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

function validate() {
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let pesan = document.querySelector("#pesan");
  let btnKirim = document.querySelector(".btn-kirim");

  btnKirim.addEventListener("click", function (e) {
    e.preventDefault();

    if (name.value == "" || email.value == "" || pesan.value == "") {
      inputempty();
    } else {
      sendmail(name.value, email.value, pesan.value);

      console.log("Pesan berhasil terkirim");
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

var i = 0,
  text;
text = "Selamat Datang di MuhdannyBlog!! Enjoy......";

function ketik() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(ketik, 80);
  }
}
ketik();
