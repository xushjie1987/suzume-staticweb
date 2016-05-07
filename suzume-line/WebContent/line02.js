/**
 * 
 */
google.charts.load('current',
                   {
                       'packages' : ['corechart']
                   });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    $(function() {
        $.get("http://localhost:8080/demo2/line02/",
              function(d,
                       textStatus) {
                  var data = google.visualization.arrayToDataTable(d);

                  var options = {
                      title : 'Company Performance',
                      curveType : 'function',
                      legend : {
                          position : 'bottom'
                      }
                  };

                  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

                  chart.draw(data,
                             options);
              },
              "json");
    });
}
