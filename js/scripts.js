
$(document).ready(function(){
  $("#formOne").submit(function(event){
    var nameInput = $("#name").val();
    var foodInput = $("#food").val();
    var musicInput = $("input:radio[name=music]:checked").val();
    var dobInput = $("#born").val();
    var favoriteColorInput = $("#color").val();

    $(".name").text(nameInput);
    $(".food").text(foodInput);
    $(".radio").text(musicInput);
    $(".born").text(dobInput);
    $(".color").text(favoriteColorInput);

    $("#results").show();
    $("#formOne").hide();
    event.preventDefault();

  });
});
