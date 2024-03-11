document.addEventListener("DOMContentLoaded", function () {
  /* 3d animation */
  const Texts = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "SASS",
    "Bootstrap",
    "REACT.JS",
    "Typescript",
    "Node.js",
    "Express",
    "MYSQL",
    "GIT",
    "GitHub",
    "SCRUM",
    "Material-UI",
    "Tailwind",
    "Redux",
    "Next JS",
    "Axios",
    "Formik",
  ];

  if (screen.width < 768) {
    TagCloud(".Sphere", Texts, {
      radius: 175,
      maxSpeed: "fast",
      initSpeed: "normal",
      direction: 135,
      keep: false,
    });
  }

  if (screen.width > 768) {
    TagCloud(".Sphere", Texts, {
      radius: 250,
      maxSpeed: "fast",
      initSpeed: "normal",
      direction: 135,
      keep: false,
    });
  }

  var color = "white";
  document.querySelector(".Sphere").style.color = color;
});

function github() {
  window.open("https://github.com/J4viMx", "_blank");
}
function twitter() {
  window.open("https://twitter.com/J4viMx", "_blank");
}
function linkedin() {
  window.open("https://www.linkedin.com/in/javimx/", "_blank");
}

const header = document.querySelector(".header");
const opcionesMenu = document.querySelectorAll(".header .li");
function menu() {
  header.classList.toggle("header-activate");

  opcionesMenu.forEach((opcionMenu) => {
    opcionMenu.classList.toggle("activate-opciones");
  });
}
