function addData() {
  // Formdan ma'lumotlarni olish
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("number").value;

  // Jadvalni olish
  const table = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];

  // Yangi qator yaratish
  const newRow = table.insertRow();

  // Yangi hujayralarni yaratish
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);

  // Hujayralarga ma'lumot qo'shish
  cell1.innerHTML = name;
  cell2.innerHTML = email;
  cell3.innerHTML = password;
  cell4.innerHTML = phone;
  // Formani tozalash
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("phone").value = "";
}
