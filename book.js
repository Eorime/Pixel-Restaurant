let button = document.getElementById("submit");

button.addEventListener("click", function () {
  let name = document.querySelector("#customerName").value;
  let lastName = document.querySelector("#customerLastname").value;
  let number = document.querySelector("#customerNumber").value;
  let date = document.querySelector("#customerDate").value;
  let time = document.querySelector("#customerTime").value;
  if (typeof name === "string" && name.length === 0) {
    alert("Please put in your name!");
  } else if (typeof lastName === "string" && lastName.length === 0) {
    alert("Please put in your last name!");
  } else if (typeof number === "string" && number.length === 0) {
    alert("Don't forget your number!");
  } else if (typeof date === "string" && date.length === 0) {
    alert("What about the date?");
  } else if (typeof time === "string" && time.length === 0) {
    alert("What time?");
  } else
    alert(`Dearest ${name} ${lastName}, you just successfully booked a table for ${date} at 
  ${time}! If anything changes on our side, we will contact you via your number: ${number}.
  `);
});
