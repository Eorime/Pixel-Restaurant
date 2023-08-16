let button = document.getElementById("submit");

button.addEventListener("click", function () {
  let name = document.querySelector("#customerName").value;
  if (typeof name === "string" && name.length === 0) {
    console.log("ad");
  }
  let lastName = document.querySelector("#customerLastname").value;
  if (typeof name === "string" && name.length === 0) {
    console.log("ba");
  }
  let number = document.querySelector("#customerNumber").value;
  if (typeof number === "string" && number.length === 0) {
    console.log("ad");
  }
  let date = document.querySelector("#customerDate").value;
  if (typeof date === "string" && date.length === 0) {
    console.log("ad");
  }
  let time = document.querySelector("#customerTime").value;
  if (typeof time === "string" && time.length === 0) {
    console.log("ad");
  }
  alert(`Dearest ${name} ${lastName}, you just successfully booked a table for ${date} at 
  ${time}! If anything changes on our side, we will contact you via your number: ${number}.
  `);
});
