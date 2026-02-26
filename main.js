$(document).ready(function() {

  $.getJSON("data.json", function(data) {

    // loop through the array using a basic for loop
    for (var i = 0; i < data.length; i++) {

     var spot = data[i];
     var latitude = spot.location[0];
     var longitude = spot.location[1];
     var googleMapsLink = "https://www.google.com/maps?q=" + latitude + "," + longitude; //concat link w/ LAT & LONG

      //create table row for each spot     
      var row = "<tr>";
      row += "<td>" + spot.name + "</td>";
      row += "<td>";
      row += "<a href='" + googleMapsLink + "' target='_blank' class='map-badge'>";
      row += (i + 1);
      row += "</a>";
      row += "</td>";
      row += "</tr>";

      $("#topSpotsTable").append(row);
    }

  });

});