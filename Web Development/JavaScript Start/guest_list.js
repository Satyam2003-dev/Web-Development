var guestlist = ["Satyam","Shivam","Harsh","Saket","Aman","Keshav","Anurag","Rishikesh","Navnit"];
// console.log(guestlist);
// console.log(guestlist.length);
// console.log(guestlist[0]);
// console.log(guestlist[1]);

var guestName = prompt("What is your name?");
if (guestlist.includes(guestName)){
    alert("You are Welcome");
}
else{
    alert("Sorry may be next time");
}