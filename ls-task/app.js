const darkMode = document.getElementById("night");
const dayMode = document.getElementById("day");
const nameYour = document.getElementById("nameYour");
const sendName = document.getElementById("sendName");

function getValue() {
  let temp = document.getElementById("username").value;
  localStorage.setItem("name", `${temp}`);
  setName();
}

function setName(nameLs = "Guest") {
  let temp = localStorage.getItem("name");
  if (temp === null) {
    nameYour.innerHTML = ` Hello, ${nameLs}`;
  } else {
    nameYour.innerHTML = ` Hello, ${temp}`;
  }
}

function setColor(e) {
  if (e.currentTarget === darkMode) {
    localStorage.setItem("mode", "black");
    colorise();
  }
  if (e.target === dayMode) {
    localStorage.setItem("mode", "white");
    colorise();
  }
}

function colorise() {
  let temp = localStorage.getItem("mode");
  document.body.style.backgroundColor = `${temp}`;
}

darkMode.addEventListener("click", setColor);
dayMode.addEventListener("click", setColor);
sendName.addEventListener("click", getValue);

colorise();
setName();
