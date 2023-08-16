let button = document.getElementById("submit");

button.addEventListener("click", function () {
  let name = document.querySelector("#customerName").value;
  let lastName = document.querySelector("#customerLastname").value;
  let number = document.querySelector("#customerNumber").value;
  let date = document.querySelector("#customerDate").value;
  let time = document.querySelector("#customerTime").value;
  if (typeof name === "string" && name.length === 0) {
    console.log("ad");
  } else if (typeof name === "string" && name.length === 0) {
    console.log("ba");
  } else if (typeof number === "string" && number.length === 0) {
    console.log("ad");
  } else if (typeof date === "string" && date.length === 0) {
    console.log("ad");
  } else if (typeof time === "string" && time.length === 0) {
    console.log("ad");
  } else
    alert(`Dearest ${name} ${lastName}, you just successfully booked a table for ${date} at 
  ${time}! If anything changes on our side, we will contact you via your number: ${number}.
  `);
});
