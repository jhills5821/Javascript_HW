let tableData = data;
let tbody = d3.select("tbody");

tableData.forEach(function(ufoSigtings) {
    var row = tbody.append("tr");
    Object.entries(ufoSigtings).forEach(function([key, value]) {
      var cell = tbody.append("td");
      cell.text(value);
    });
});


let filter = d3.select("#filter-btn");

filter.on("click", function() {


    d3.event.preventDefault();
    
    let inputElementdate = d3.select("#datetime");
    let inputElementcity = d3.select("#city");
    let inputElementstate = d3.select("#state");
    let inputElementcountry = d3.select("#country");
    let inputElementshape = d3.select("#shape");

    let inputDate = inputElementdate.property("value");
    let inputCity = inputElementcity.property("value");
    let inputState = inputElementstate.property("value");
    let inputCountry = inputElementcountry.property("value");
    let inputShape = inputElementshape.property("value");

    let filteredData = tableData.filter(tableData => tableData.datetime === inputDate|| 
        tableData.city === inputCity ||
        tableData.state === inputState || 
        tableData.country === inputCountry || 
        tableData.shape === inputShape);

        tableData.forEach(function(ufoSigtings){
        let removeRows = tbody.remove("tr");
    });
    
    filteredData.forEach(function(ufoSightings) {
        let row = d3.select("table").append("tr");
        Object.entries(ufoSightings).forEach(function([key, value]) {
            let cell = d3.select("table").append("td");
            cell.text(value);
        });
   });
   console.log(filteredData);
    
});