// $(document).ready(function() {   -- when loading the script tags in the <head>; waits for the jQuery library to load first before running the following;
// don't need to write the above if you put the script tags in the body
    $("h1").css("color", "red");
// });

// one property ("color"), gets the value; two propeties, changes the value
    console.log($("h1").css("color"));

    // for (var i = 0; i < 5; i++) {
    //     // querySelectorAll returns a NodeList
    //     document.querySelectorAll("button")[i].addEventListener("click", function() {
    //         document.querySelector("h1").style.color = "purple";
    //     });
    // }

    // same as above; don't need for loop
    $("button").click(function() {
        $("h1").css("color", "purple");
    });

    $("input").keypress(function(event) {
        console.log(event.key);
    });

    // $(document).keypress(function(event) {
    //     $("h1").text(event.key);
    // });

    // same as above
    $(document).on("keypress", function(event) {
        $("h1").text(event.key);
    });
    
    $("h1").on("mouseover", function() {
        $("h1").css("color", "purple");
    });

    $("button").on("click", function() {
        // other animations include: fadeIn/Out, slideToggle/In/Out
        $("h1").fadeToggle();
    });

    // When you want to write your own animation
    // $("button").on("click", function() {
    //     // when using "animate", you can only add a CSS rule that have a numeric value
    //     $("h1").animate({opacity: 0.5});
    // });

    // you can chain the animations
    // $("button").on("click", function() {
    //     $("h1").slideUp().slideDown().animate({opacity: 0.5});
    // });