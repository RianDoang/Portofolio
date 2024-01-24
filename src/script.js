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
  const btn2 = document.querySelector("#btn2");
  const btn3 = document.querySelector("#btn3");
  const btn4 = document.querySelector("#btn4");
  //const btnLoading = document.querySelector(".btn-loading");
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let pesan = document.querySelector("#pesan");
  let btnKirim = document.querySelector(".btn-kirim");

  // Btn Kirim
  btn2.style.opacity = "1";
  btn2.style.transition = ".3s";

  // Btn Sending data
  btn3.style.opacity = "0";
  btn3.style.transition = ".3s";
  btn3.style.display = "none";

  // Btn Data mengudara
  btn4.style.display = "none";
  btn4.style.transition = ".3s";
  btn4.style.display = "none";

  formAlert.style.display = "none";

  btnKirim.addEventListener("click", function (e) {
    e.preventDefault();
    if (name.value == "" || email.value == "" || pesan.value == "") {
      inputempty();
    } else {
      sendmail(name.value, email.value, pesan.value);
      console.log("Pesan berhasil terkirim");

      btn2.style.transform = "translateY(-10px)";
      btn2.style.opacity = "0";
      btn3.style.opacity = "0";
      btn3.style.transform = "translateY(10px)";

      setTimeout(() => {
        btn2.style.display = "none";
        btn3.style.display = "flex";
      }, 100);

      setTimeout(() => {
        btn3.style.opacity = "1";
        btn3.style.transform = "translateY(0px)";
      }, 300);

      setTimeout(() => {
        btn3.style.transform = "translateY(-10px)";
        btn3.style.opacity = "0";
        btn4.style.opacity = "0";
        btn4.transform = "translateY(10px)";
      }, 4000);

      setTimeout(() => {
        btn3.style.transform = "translateY(10px)";
        btn3.style.display = "none";
        btn4.style.display = "flex";
        btn4.style.transform = "translateY(10px)";
      }, 4100);

      setTimeout(() => {
        btn4.style.opacity = "1";
        btn4.style.transform = "translateY(0)";
        formAlert.style.display = "flex";
        form.reset();
      }, 4200);

      setTimeout(() => {
        btn4.style.opacity = "0";
        btn4.style.transform = "translateY(-10px)";
      }, 5200);

      setTimeout(() => {
        btn4.style.display = "none";
        btn2.style.display = "flex";
        btn2.style.opacity = "0";
        btn2.style.transform = "translateY(10px)";
      }, 5300);

      setTimeout(() => {
        btn2.style.opacity = "1";
        btn2.style.transform = "translateY(0)";
      }, 5500);
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

// HTML Skills
function startAnimation1() {
  const progressBar1 = document.getElementById("barProgress1");
  const percentageElement1 = document.getElementById("persenBar1");

  // Reset animation
  progressBar1.style.animation = "none";
  void progressBar1.offsetWidth; // Trigger reflow
  progressBar1.style.animation = "fill1 2s ease-in-out forwards";

  // Update percentage
  let percentage1 = 0;
  const interval1 = setInterval(() => {
    percentage1 += 1;
    percentageElement1.textContent = `${percentage1}%`;
    if (percentage1 === 92) {
      clearInterval(interval1);
    }
  }, 21);
}

// CSS Skills
function startAnimation2() {
  const progressBar2 = document.getElementById("barProgress2");
  const percentageElement2 = document.getElementById("persenBar2");

  // Reset animation
  progressBar2.style.animation = "none";
  void progressBar2.offsetWidth; // Trigger reflow
  progressBar2.style.animation = "fill2 2s ease-in-out forwards";

  // Update percentage
  let percentage2 = 0;
  const interval2 = setInterval(() => {
    percentage2 += 1;
    percentageElement2.textContent = `${percentage2}%`;
    if (percentage2 === 89) {
      clearInterval(interval2);
    }
  }, 21);
}

// JS Skills
function startAnimation3() {
  const progressBar3 = document.getElementById("barProgress3");
  const percentageElement3 = document.getElementById("persenBar3");

  // Reset animation
  progressBar3.style.animation = "none";
  void progressBar3.offsetWidth; // Trigger reflow
  progressBar3.style.animation = "fill3 2s ease-in-out forwards";

  // Update percentage
  let percentage3 = 0;
  const interval3 = setInterval(() => {
    percentage3 += 1;
    percentageElement3.textContent = `${percentage3}%`;
    if (percentage3 === 46) {
      clearInterval(interval3);
    }
  }, 43);
}

function checkScroll() {
  const element = document.querySelector("#blog");
  const elementTop = element.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (elementTop < windowHeight / 4) {
    startAnimation1();
    setTimeout(() => {
      startAnimation2();
    }, 200);
    setTimeout(() => {
      startAnimation3();
    }, 350);
    window.removeEventListener("scroll", checkScroll); // Hapus event listener setelah diaktifkan
  }
}

// Tambahkan event listener untuk mendeteksi scroll
window.addEventListener("scroll", checkScroll);
