function lunch(name)
{
    var noofPerson = name.length;
    var randomperson = Math.floor(Math.random()*noofPerson);
    var anyperson = name[randomperson];
    return anyperson + " is going to buy lunch today";
}