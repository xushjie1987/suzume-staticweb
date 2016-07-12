/**
 *
 */
google.charts.load('current', {
    'packages': ['corechart']
});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    $(function () {
        $.get("http://localhost:8080/cluster/os/now-30m/now",
            function (d, textStatus) {
                alert(Array.isArray(d));
                alert(textStatus);
                paint(d[0], 'Elasticsearch OS load', 'os_load_chart');
                paint(d[1], 'Elasticsearch OS Mem total', 'os_mem_total_chart');
                paint(d[2], 'Elasticsearch OS Mem used', 'os_mem_used_chart');
                paint(d[3], 'Elasticsearch OS Mem free', 'os_mem_free_chart');
                paint(d[4], 'Elasticsearch OS Mem free percent', 'os_mem_fp_chart');
                paint(d[5], 'Elasticsearch OS Mem used percent', 'os_mem_up_chart');
                paint(d[6], 'Elasticsearch OS Swap total', 'os_swap_total_chart');
                paint(d[7], 'Elasticsearch OS Swap used', 'os_swap_used_chart');
                paint(d[8], 'Elasticsearch OS Swap free', 'os_swap_free_chart');
            },
            "json");
    });
}

function paint(d, t, id) {
    var data = google.visualization.arrayToDataTable(d);

    var options = {
        title: t,
        curveType: 'function',
        legend: {
            position: 'bottom'
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById(id));

    chart.draw(data, options);
}
