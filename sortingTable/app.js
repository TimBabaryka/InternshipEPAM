// - Add to html page table with header and some rows
// - Add to header event listener to implement sorting functionality across the table data (alphabetical)
// - Add to cells user interaction feature (click and edit text)
// - Table in whole should be created with JS and appended to the document body on DOMContentLoaded event*

let nameArr = [
  "Yokimo",
  "Aran",
  "Arnold",
  "Bonnie",
  "Michael",
  "Alex",
  "Brad",
  "Matushi",
  "Ezra",
];

let copyArr = [...nameArr];

let sortingDone = false;

function SomeDeleteRowFunction() {
  let td = event.target.parentNode;
  let tr = td.parentNode;
  tr.parentNode.removeChild(tr);
}

function edit_row(no) {
  document.getElementById("edit_button" + no).style.display = "none";
  document.getElementById("save_button" + no).style.display = "block";

  let name = document.getElementById("name_row" + no);

  let name_data = name.innerHTML;

  name.innerHTML =
    "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
}

document.body.innerHTML = ` 
<header class="header">
<h2>Name</h2>
<button id="sortButton">Sort</button>
</header><table id="myTable"></table>
`;
(function render() {
  const table = document.getElementById("myTable");
  nameArr.forEach((el, index) => {
    table.innerHTML += `<tr id="line-${index}">
    <td> <input type="button" value="Delete Row" onclick="SomeDeleteRowFunction()">  <h2class="${el}">${el} </h2></td> 
    <input type="button" id="edit_button${index}" value="Edit" class="edit" onclick="edit_row('${index}')">
<input type="button" id="save_button${index}" value="Save" class="save" onclick="save_row('${index}')">
        </tr>`;
  });
})();

document.body.addEventListener("click", (e) => {
  const table = document.getElementById("myTable");
  if (e.target.id === "sortButton") {
    table.innerHTML = " ";
    let sorted = copyArr.sort(function (a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    sorted.forEach((el, index) => {
      table.innerHTML += `<tr id="line-${index}">
      <td> <input type="button" value="Delete Row" onclick="SomeDeleteRowFunction()"><h2class="${el}">${el} </h2></td> 
      </tr>`;
    });
  }
  if (e.target.classList.contains("delBut")) {
    const id = +e.target.id.split("delBut-")[1];
    console.log(e.target);
    // document.location.reload();
  }

  if (e.target.classList.contains("editBut")) {
    const id = +e.target.id.split("editBut-")[1];
    console.log(id);
    console.log(e.target);
    // document.location.reload();
  }
});
