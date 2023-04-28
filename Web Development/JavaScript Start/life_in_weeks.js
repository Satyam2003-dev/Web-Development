function life_in_weeks(age) {
  var yearsremaining = 100 - age; // if you live long upto 100 years.
  var days = yearsremaining * 365; // days in year
  var weeks = yearsremaining * 52; // weeks in a year
  var months = yearsremaining * 12; // months in a year

  console.log("You have "+ days +" days , "+ weeks +" weeks or "+ months +" months left")
//   alert("You have "+ days +" days , "+ weeks +" weeks or "+ months +" months left")
// alert give you output in popup.
}
 life_in_weeks(24)