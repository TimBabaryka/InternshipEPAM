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

function edit_row(no) {
  document.getElementById("edit_button" + no).style.display = "none";
  document.getElementById("save_button" + no).style.display = "block";
  let name = document.getElementById("name_row" + no);
  let name_data = name.innerHTML;

  name.innerHTML =
    "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
}

function save_row(no) {
  let name_val = document.getElementById("name_text" + no).value;

  document.getElementById("name_row" + no).innerHTML = name_val;

  document.getElementById("edit_button" + no).style.display = "block";
  document.getElementById("save_button" + no).style.display = "none";
  nameArr.splice(no, 1, name_val);
}

function delete_row(no) {
  document.getElementById("row" + no + "").outerHTML = "";
  nameArr.splice(no, 1);
}

function add_row() {
  let new_name = document.getElementById("new_name").value;

  let table = document.getElementById("data_table");
  let table_len = table.rows.length - 1;
  let row = (table.insertRow(table_len).outerHTML =
    "<tr id='row" +
    table_len +
    "'><td id='name_row" +
    table_len +
    "'>" +
    new_name +
    "</td><td><input type='button' id='edit_button" +
    table_len +
    "' value='Edit' class='edit' onclick='edit_row(" +
    table_len +
    ")'> <input type='button' id='save_button" +
    table_len +
    "' value='Save' class='save' onclick='save_row(" +
    table_len +
    ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" +
    table_len +
    ")'></td></tr>");

  document.getElementById("new_name").value = "";
  nameArr.push(new_name);
}

document.body.innerHTML = `
<div id="wrapper">
<table
align="center"
cellspacing="2"
cellpadding="5"

border="1"><tr>
<th>Name</th>
<td> <button id="sortButton">Sort</button></td>
</tr>

<tr>
<td><input type="text" id="new_name" /></td>

<td>
  <input
    type="button"
    class="add"
    onclick="add_row();"
    value="Add Row"
  />
</td>
</tr>
</table>

<table
  align="center"
  cellspacing="2"
  cellpadding="5"
  id="data_table"
  border="1"
>
  
</table>
</div>
`;
function render() {
  const table = document.getElementById("data_table");
  nameArr.forEach((el, index) => {
    table.innerHTML += `<tr id="row${index}">
          <td id="name_row${index}">${el}</td>
  
          <td>
            <input
              type="button"
              id="edit_button${index}"
              value="Edit"
              class="edit"
              onclick="edit_row('${index}')"
            />
            <input
              type="button"
              id="save_button${index}"
              value="Save"
              class="save"
              onclick="save_row('${index}')"
            />
            <input
              type="button"
              value="Delete"
              class="delete"
              onclick="delete_row('${index}')"
            />
          </td>
        </tr>`;
  });
}
render();

document.body.addEventListener("click", (e) => {
  const table = document.getElementById("data_table");
  if (e.target.id === "sortButton") {
    table.innerHTML = " ";
    let sorted = nameArr.sort(function (a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    sorted.forEach((el, index) => {
      table.innerHTML += `<tr id="row${index}">
      <td id="name_row${index}">${el}</td>

      <td>
        <input
          type="button"
          id="edit_button${index}"
          value="Edit"
          class="edit"
          onclick="edit_row('${index}')"
        />
        <input
          type="button"
          id="save_button${index}"
          value="Save"
          class="save"
          onclick="save_row('${index}')"
        />
        <input
          type="button"
          value="Delete"
          class="delete"
          onclick="delete_row('${index}')"
        />
      </td>
    </tr>`;
    });
  }
});
