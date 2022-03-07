// this function is called on the onclick button
function myDate() {
  // calls the display panel in the html
  let display = document.querySelector("#display");

  // gets the date value entered by the user
  let thedate = document.getElementById("date").value;

  // these two gets the gender values checked by the user
  let one = document.getElementById("male");
  let two = document.getElementById("female");

  // adding an array for days of the week
  let dayofWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // these are arrays for the are the akan names given by gender
  let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  // used this method to calculate the local time selected by the user
  let dat = new Date(thedate);

  // this picks the day of the week from the day date selected
  let day = dat.getDay();

  // checks wether the gender boxes have been selected
  if (one.checked === true) {
    display.innerHTML =
      "You were born on a " +
      dayofWeek[day] +
      " and Your Akan name is:   " +
      male[day];
  } else if (two.checked === true) {
    display.innerHTML =
      "You were born on a " +
      dayofWeek[day] +
      "and Your Akan name is:   " +
      female[day];
  } else {
    alert("Please select given data on the form provided!!");
  }
}
