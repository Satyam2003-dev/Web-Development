prompt("What is your name?");
prompt("What is your girlfriend's name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; //1-100

if (loveScore >= 75) {
  alert(
    "Your lovescore is " +
      loveScore +
      "%" +
      " you love each other like Laila and Majnu"
  );
}
if (loveScore > 30 && loveScore < 75) {
  alert("Your lovescore is " + loveScore + "%");
}
if (loveScore <= 30) {
  alert("Your lovescore is " + loveScore + "%" + " you are like water and oil");
}
