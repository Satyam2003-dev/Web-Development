// $("h1").css("color", "green");
$("h1").addClass("big-title margin-50");

// $("button").css("color","red");

// $("h1").text("Bye");


// $("button").text("Don't Click Me");
// $("button").text("<em>Hey</em>");

// Adding Eventlistner

// $("h1").click(function(){
// $("h1").css("color", "yellow");
// });

// $("button").click(function(){
// $("h1").css("color", "indigo");
// });

// for key press detection

// $(document).keypress(function(event){
//     $("h1").text(event.key);
// });

// for mouseover 

// $("h1").on("mouseover", function(){
//     $("h1").css("color", "orange");
// });

// remove button

// $("button").remove();

// $("h1").click(function(){
//     $("h1").hide();
//     });

// $("button").click(function(){
//     $("h1").show();
//     });

// $("button").click(function(){
//     $("h1").fadeIn();
//     });

// $("button").click(function(){
//     $("h1").fadeOut();
//     });

// $("button").click(function(){
//     $("h1").fadeToggle();
//     });

// $("button").click(function(){
//     $("h1").slideToggle();
//     });

// $("button").click(function(){
//     $("h1").animate({opacity:0.5});
//     });

$("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
    });