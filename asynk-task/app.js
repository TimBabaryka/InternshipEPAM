const content = document.querySelector(".content");
document.getElementById("Selector").onchange = changeListener;
const cat = document.getElementById("cat");

function act(e) {
  if (e.target === cat) {
    console.log(e);
    getCategories();
  }
}

function changeListener() {
  var value = this.value;
  console.log(value);

  if (value === "1") {
    content.innerHTML = ``;
    getEntries();
  }
  if (value === "2") {
    content.innerHTML = ``;
    getCategories();
  }
  if (value === "3") {
    content.innerHTML = ``;
    getCheck();
  }
  if (value === "4") {
    content.innerHTML = ``;
    getRandom();
  }
}

async function getEntries() {
  try {
    const res = await fetch("https://api.publicapis.org/entries");
    const data = await res.json();
    const arr = data.entries;
    console.log("data", arr);
    arr.forEach((el) => {
      console.log(el);
      content.innerHTML += `
      <div class="card">
      <p>${el.Category}</p>
      <p>${el.Description}</p>
      <p>${el.Link}</p>
      </div>
      `;
    });
  } catch (e) {
    console.log(e);
  }
}
async function getCategories() {
  try {
    const res = await fetch("https://api.publicapis.org/categories");
    const data = await res.json();
    console.log("data", data);
    const arr = data.categories;
    arr.forEach((el) => {
      console.log(el);
      content.innerHTML += `

      <div class="card">
      <p>${el}</p>
     
      </div>
      `;
    });
  } catch (e) {
    console.log(e);
  }
}
async function getCheck() {
  try {
    const res = await fetch("https://api.publicapis.org/health");
    const data = await res.json();
    console.log("data", data);
  } catch (e) {
    console.log(e);
  }
}
async function getRandom() {
  try {
    const res = await fetch("https://api.publicapis.org/random");
    const data = await res.json();
    console.log("data", data);
    const arr = data.entries;
    arr.forEach((el) => {
      console.log(el);
      content.innerHTML += `

      <div class="card">
      <p>${el.Category}</p>
      <p>${el.Description}</p>
      <p>${el.Link}</p>
      </div>
      `;
    });
  } catch (e) {
    console.log(e);
  }
}
