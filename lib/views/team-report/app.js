var data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"],
    datasets: [
        {
            label: "Fantasy Points Scored",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [35.1, 26.5, 40.40, 7.8, 17.7, 15.3, 24.2, 32.2, 23.7, 0, 25, 10.6, 17.3, 15.8, 26.8]
        },
        {
            label: "Fantasy Points Scored Against Oppossing Defense",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [15.8, 10.3, 14.9, 30.7, 0, 12.3, 9.2, 18.1, 19.9, 8.7, 19.7, 16.4, 22.4, 15.8, 19.6]
        }
    ]
};


var ctx   = $("#fantasy_points_chart").get(0).getContext("2d");
var chart = new Chart(ctx).Line(data);
