let count = 0;
function toggleMenu() {
  document.querySelector(".menu").classList.toggle("active");
  let menu = (document.querySelector(".menu").style.backgroundColor =
    "#EFECEC");
  if (count === 0) {
    document.querySelector(".navbar").style.height = "290px";
    count++;
  } else {
    document.querySelector(".navbar").style.height = "5%";
    count--;
  }
}

let a = document.querySelector("#dark");
let bo = document.querySelector("#bo");
a.addEventListener("click", () => {
  bo.style.backgroundColor = "black";
  bo.style.color = "white";
});
a = document.querySelector("#light");
bo = document.querySelector("#bo");
a.addEventListener("click", () => {
  bo.style.backgroundColor = "white";
  bo.style.color = "black";
});

// slider
let index = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  index = (index + step + totalSlides) % totalSlides;
  document.querySelector(".slider").style.transform = `translateX(-${
    index * 100
  }%)`;
}

let my_status = document.querySelector(".my_status");
my_status.addEventListener("click", () => {
  window.location.href =
    "https://scholarship.up.gov.in/Status2223_Print.aspx?Type=MQ==&App_Id=MjAxMDIwNDAyMjAwNDY0";
});

let renu = document.querySelector(".renu");
renu.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/random/html2.html";
});
