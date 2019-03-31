var tableData = data;
var tbody = d3.select("tbody");

tableData.forEach(function(ufoSigtings) {
    var row = tbody.append("tr");
    Object.entries(ufoSigtings).forEach(function([key, value]) {
      var cell = tbody.append("td");
      cell.text(value);
    });
});


var filter = d3.select("#filter-btn");

filter.on("click", function() {


    d3.event.preventDefault();
    
    var inputElementdate = d3.select("#datetime");
    var inputElementcity = d3.select("#city");
    var inputElementstate = d3.select("#state");
    var inputElementcountry = d3.select("#country");
    var inputElementshape = d3.select("#shape");

    var inputDate = inputElementdate.property("value");
    var inputCity = inputElementcity.property("value");
    var inputState = inputElementstate.property("value");
    var inputCountry = inputElementcountry.property("value");
    var inputShape = inputElementshape.property("value");

    var filteredData = tableData.filter(tableData => tableData.datetime === inputDate|| 
        tableData.city === inputCity ||
        tableData.state === inputState || 
        tableData.country === inputCountry || 
        tableData.shape === inputShape);

        tableData.forEach(function(ufoSigtings){
        var removeRows = tbody.remove("tr");
    });
    
    filteredData.forEach(function(ufoSightings) {
        var row = d3.select("table").append("tr");
        Object.entries(ufoSightings).forEach(function([key, value]) {
            var cell = d3.select("table").append("td");
            cell.text(value);
        });
   });
   console.log(filteredData);
    
});