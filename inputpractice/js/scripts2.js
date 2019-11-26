var add = function(beverage, flavor) {
  return beverage + " and " + flavor;
};


$(document).ready(function() {
  $("button").click(function(event) {
    event.preventDefault();
    var beverage = $("#beverage").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    // var result = add(beverage, flavor);
    var favoriteColor = $("#color").val();
    var dob = $("#born").val();
    $(".color").text(favoriteColor);
    console.log(favoriteColor);
    $(".beverage").text(beverage);
    $(".flavor").text(flavor);
    $(".calender").text(dob)
  });
});
