// from data.js
var tableData = data;
var tbody = d3.select("tbody");

tableData.forEach(function(ufoSigtings) {
    //console.log(ufoSigtings);
    var row = tbody.append("tr");
    Object.entries(ufoSigtings).forEach(function([key, value]) {
      //console.log(key, value);
      var cell = tbody.append("td");
      cell.text(value);
    });
});


var filter = d3.select("#filter-btn");

filter.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElementdate = d3.select("#datetime");
    var inputElementcity = d3.select("#city");
    var inputElementstate = d3.select("#state");
    var inputElementcountry = d3.select("#country");
    var inputElementshape = d3.select("#shape");

    // Get the value property of the input element
    var inputDate = inputElementdate.property("value");
    var inputCity = inputElementcity.property("value");
    var inputState = inputElementstate.property("value");
    var inputCountry = inputElementcountry.property("value");
    var inputShape = inputElementshape.property("value");

    //console.log(inputValue);

    var filteredData = tableData.filter(tableData => inputDate === tableData.datetime || 
        inputCity === tableData.city ||
        inputState === tableData.state || 
        inputCountry === tableData.country || 
        inputShape === tableData.shape);

    console.log(filteredData);

    //tableData.forEach(function(items) {
        //console.log(ufoSigtings);
      //  var removeRows = tbody.remove("tr");
    //});
    //document.getElementById("ufo-table").innerHTML=filteredData;
    
    filteredData.forEach(function(ufoSigtings) {
       //console.log(ufoSigtings);
        var row = tbody.append("tr");
        Object.entries(ufoSigtings).forEach(function([key, value]) {
            //console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
   });

    
});

