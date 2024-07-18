function updateTime() {
  //Harare
  let harareElement = document.querySelector("#harare");
  let harareDateElement = harareElement.querySelector(".date");
  let harareTimeElement = harareElement.querySelector(".time");
  let harareTime = moment().tz("Africa/Harare");
  harareDateElement.innerHTML = harareTime.format("Do MMMM YYYY");
  harareTimeElement.innerHTML = harareTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("Do MMMM YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
