$(".yes-reply").hide();
$(".yes-button").click(function() {
    $(".yes-reply").show();
    $(".no-button").hide();
    $(".yes-button").css("background-color", "yellow");
});
$(".no-reply").hide();
$(".no-button").click(function() {
    $(".no-reply").show();
    $(".yes-button").hide();
    $(".no-button").css("background-color", "yellow");
    $(".Nexxt").text("You just arrived to the store");
});
$(".Next1").click(function() {
    $(".Nexxt").text("You just arrived to the store");
    $(".Nexxt").css("background-color", "red");
});
$(".hands").hide();
$(".dbl").dblclick(function() {
    $(".hands").fadeIn();
});
$(".Run").click(function() {
    $(".Story-Ending-Run").text("Harry gets Tackled and Shot");
    $(".Story-Ending-Run").css("background-color", "red");
    $(".Run").hide();
    $(".Stop").hide();
});
$(".Stop").click(function() {
    $(".Story-Ending-Stop").text("Harry drops the tomatoes and everyone in the store hugs him and cry");
    $(".Story-Ending-Stop").css("background-color", "yellow");
    $(".Story-Ending-Stop").css("color", "black");
    $(".Run").hide();
    $(".Stop").hide();
});