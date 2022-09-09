var DarkMode = document.getElementById("darkmode");
DarkMode.onclick = () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    DarkMode.src = "img/icon/moon-6679 (1).png";
  } else {
    DarkMode.src = "img/icon/moon-6679.png";
  }
};
// for contact us
var modal = document.getElementById("modal");
var btn = document.getElementById("contact");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
