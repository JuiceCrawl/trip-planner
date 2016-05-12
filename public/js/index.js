

$(document).ready(function(){
    
    // populate selections
  hotels.forEach(function (hotel) {
    var optionTag ="<option name='" +hotel.name +"'>" + hotel.name + "</option>";
    console.log(optionTag);
    $(".hotel").append(optionTag);
  });

  restaurants.forEach(function (restaurant) {
    var optionTag ="<option name='" +restaurant.name +"'>" + restaurant.name + "</option>";
    console.log(optionTag);
    $(".restaurants").append(optionTag);
  });

  activities.forEach(function (activity) {
    var optionTag ="<option name='" +activity.name +"'>" + activity.name + "</option>";
    console.log(optionTag);
    $(".activities").append(optionTag);
  });

    //append selection
    $(".hotel-button").on("click", function() {
      var selectedHotel = $(".hotel").val();
      var liTag = "<li>" + selectedHotel + "</li></br>";
      $("#my-hotel").append(liTag);
      console.log(selectedHotel);
    });

    $(".restaurants-button").on("click", function() {
      var selectedHotel = $(".restaurants").val();
      var liTag = "<li>" + selectedHotel + "</li></br>";
      $("#my-restaurants").append(liTag);
      console.log(selectedHotel);
    });

    $(".activities-button").on("click", function() {
      var selectedHotel = $(".activities").val();
      var liTag = "<li>" + selectedHotel + "</li></br>";
      $("#my-activities").append(liTag);
      console.log(selectedHotel);
    });

});
