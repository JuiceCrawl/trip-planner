var days = [{"my-hotel": {}, "my-restaurants": {}, "my-activities": {}}];


$(document).ready(function(){
    
    // populate dropdown
  hotels.forEach(function (hotel, index) {
    var optionTag ="<option data-index='" + index+"' name='" +hotel.name +"'>" + hotel.name + "</option>";
    $(".hotel").append(optionTag);
  });

  restaurants.forEach(function (restaurant, index) {
    var optionTag ="<option data-index='" + index+"' name='" +restaurant.name +"'>" + restaurant.name + "</option>";
    $(".restaurants").append(optionTag);
  });

  activities.forEach(function (activity, index) {
    var optionTag ="<option data-index='" + index+"' name='" +activity.name +"'>" + activity.name + "</option>";
    $(".activities").append(optionTag);
  });


  //append selections
  $(".hotel-button").on("click", function() {
    var selectedHotel = $(".hotel").val();
    // half non jquery way. We pulled it out of jquery with .selectedOptions
    var index = $('.hotel')[0].selectedOptions[0].dataset.index;
    // jquery way, re-wraped it to use .data
    //var index = $($('.hotel')[0].selectedOptions[0]).data('index')
    var latLongArr = hotels[index].place.location;
    var marker = addMarker(latLongArr[0],latLongArr[1],selectedHotel);


    var liTag = "<li>" + selectedHotel + "<a class='delete' href='#'>×</a></li>";
    $("#my-hotel").append(liTag);
    days[0]['my-hotel'][selectedHotel] = marker;
  });

  $(".restaurants-button").on("click", function() {
    console.log(restaurants)
    var selectedHotel = $(".restaurants").val();
    var index = $('.restaurants')[0].selectedOptions[0].dataset.index;
    var latLongArr = hotels[index].place.location;
    var marker = addMarker(latLongArr[0],latLongArr[1],selectedHotel);

    var liTag = "<li>" + selectedHotel + "<a class='delete' href='#'>×</a></li>";
    $("#my-restaurants").append(liTag);
    days[0]['my-restaurants'][selectedHotel] = marker;
  });

  $(".activities-button").on("click", function() {
    var selectedHotel = $(".activities").val();
    var index = $('.activities')[0].selectedOptions[0].dataset.index;
    var latLongArr = activities[index].place.location;
    var marker = addMarker(latLongArr[0],latLongArr[1],selectedHotel);

    var liTag = "<li>" + selectedHotel + "<a class='delete' href='#'>×</a></li>";
    $("#my-activities").append(liTag);
    days[0]['my-activities'][selectedHotel] = marker;
  });
  
  // delete items
  $('ul').on("click",'.delete',function(event){
    event.preventDefault();
    // console.log($(this).parent('li'));

    var name = $(this).parent('li')[0].firstChild.data;
    var category = $(this).parent('li').parent('ul')[0].id;
    $(this).parent('li').remove();
    var daycopy = days;
    removeMarker(days[0][category][name]);
    delete days[0][category][name];
  });


});




