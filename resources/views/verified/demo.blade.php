@extends('verified.layout')
 
@section('title', 'Demo Page')
 
@section('content')
    <h1 class="text-center my-2">Trading Market Summary</h1>
    <div class='row'>
        <div class="col-sm-12 col-md-6 my-4" id="curve_chart"></div>
        <div class="col-sm-12 col-md-6 my-4" id="piechart"></div>
    </div>
    <h1 class="text-center my-2">System Summary</h1>
    <div class='row'>
        <div class="col-sm-12 col-md-6 my-4" id="curve_chart2"></div>
        <div class="col-sm-12 col-md-6 my-4" id="columnchart_values"></div>
    </div>
@stop

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawLineChart);
      google.charts.setOnLoadCallback(drawPieChart);
      google.charts.setOnLoadCallback(drawLineChart2);
      google.charts.setOnLoadCallback(drawColumnChart);

      function drawLineChart() {
        var data = google.visualization.arrayToDataTable([
          ['Day', 'Solar', 'Wind'],
          ['2023-02-08', 1.8, 1.6],
          ['2023-02-09', 2.0, 1.4],
          ['2023-02-10', 1.4, 1.5],
          ['2023-02-11', 2.0, 1.9],
          ['2023-02-14', 1.5, 2.0]
        ]);

        var options = {
          title: 'Market Price',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        chart.draw(data, options);
      }

      function drawPieChart() {
        var data = google.visualization.arrayToDataTable([
          ['Product', 'Market Share'],
          ['Solar Sell', 28],
          ['Solar Buy', 24],
          ['Wind Sell', 15],
          ['Wind Buy', 8]
        ]);

        var options = {
          title: 'Trading Amount'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }

      function drawLineChart2() {
        var data = google.visualization.arrayToDataTable([
          ['Day', 'Tax', 'Administration Fee'],
          ['2023-02-09', 10, 20],
          ['2023-02-10', 10, 10],
          ['2023-02-11', 5.2, 10],
          ['2023-02-12', 5, 10],
          ['2023-02-13', 5, 15],
          ['2023-02-14', 5, 18]
        ]);

        var options = {
          title: 'Service and Tax',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart2'));

        chart.draw(data, options);
      }

      function drawColumnChart() {
        var data = google.visualization.arrayToDataTable([
            ["User Type", "User Count", { role: "style" } ],
            ["Both", 5, "silver"],
            ["Buyer", 5, "silver"],
            ["Seller", 10, "silver"],
            ["SM", 2, "silver"]
        ]);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                        { calc: "stringify",
                            sourceColumn: 1,
                            type: "string",
                            role: "annotation" },
                        2]);

        var options = {
            title: "User",
            bar: {groupWidth: "95%"},
            legend: { position: "none" },
        };
        var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
        chart.draw(view, options);
    }      
</script>

