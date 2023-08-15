//gamoitane info button
//if empty dont let them submit

let button = document.getElementById("submit");

button.addEventListener("click", function () {
  let name = document.querySelector("#customerName").value;
  let lastName = document.querySelector("#customerLastname").value;
  let number = document.querySelector("#customerNumber").value;
  console.log(name, lastName, number);
});
