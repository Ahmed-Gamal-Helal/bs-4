$(function(){
    'use strict';
    $('.users').click(function(event) {
        event.preventDefault();
        var ahmed = document.querySelectorAll('.main-col .col-lg-3');
        
        for(var i = 3, ii = ahmed.length ; i < ii; i++) {
            $(ahmed[i]).css('display', 'none');
        }
        var arr = ['المستخدمين', 'المجموعات', 'الصلاحيات'] ; 
        for(var i = 0, ii = 3 ; i < ii; i++) {
            ahmed[i].getElementsByTagName('h5')[0].innerHTML = arr[i];
            ahmed[i].setAttribute('href','index-2.html');
        }
    });

    $('#dataTable').DataTable();
    $('tr:even').css('background-color', '#EEE');
    $('tr:odd').css('background-color', '#FFF');

    // var ctxL = document.getElementById("lineChart").getContext('2d');
    // var myLineChart = new Chart(ctxL, {
    //     type: 'line',
    //     data: {
    //         labels: ["January", "February", "March", "April", "May", "June", "July", "August", "Septemper", "November", "December"],
    //         datasets: [
    //             {
    //                 label: "My First dataset",
    //                 fillColor: "rgba(220,0,0,0.2)",
    //                 strokeColor: "rgba(220,0,0,1)",
    //                 pointColor: "rgba(220,0,0,1)",
    //                 pointStrokeColor: "#F00",
    //                 pointHighlightFill: "#F00",
    //                 pointHighlightStroke: "rgba(220,0,0,1)",
    //                 data: [65, 59, 80, 81, 56, 55, 40, 30, 70, 35, 59, 46]
    //             },
    //             {
    //                 label: "My Second dataset",
    //                 fillColor: "rgba(151,187,205,0.2)",
    //                 strokeColor: "rgba(151,187,205,1)",
    //                 pointColor: "rgba(151,187,205,1)",
    //                 pointStrokeColor: "#fff",
    //                 pointHighlightFill: "#fff",
    //                 pointHighlightStroke: "rgba(151,187,205,1)",
    //                 data: [28, 48, 40, 19, 86, 27, 90, 81, 56, 55, 40, 30]
    //             },
    //             {
    //                 label: "My third dataset",
    //                 fillColor: "rgba(0,0,0,0.2)",
    //                 strokeColor: "rgba(151,187,205,1)",
    //                 pointColor: "rgba(151,187,205,1)",
    //                 pointStrokeColor: "#fff",
    //                 pointHighlightFill: "#fff",
    //                 pointHighlightStroke: "rgba(151,187,205,1)",
    //                 data: [28, 20, 70, 40, 86, 27, 90, 40, 19, 86, 27, 90]
    //             }
    //         ]
    //     },
    //     options: {
    //         responsive: true
    //     }    
    // });

    /****** Google Chart *********/
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawVisualization);

        function drawVisualization() {
            // Some raw data (not necessarily accurate)
            var data = google.visualization.arrayToDataTable([
            ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
            ['2004/05',  165,      938,         522,             998,           450,      614.6],
            ['2005/06',  135,      1120,        599,             1268,          288,      682],
            ['2006/07',  157,      1167,        587,             807,           397,      623],
            ['2007/08',  139,      1110,        615,             968,           215,      609.4],
            ['2008/09',  136,      691,         629,             1026,          366,      569.6]
        ]);

        var options = {
        title : 'Monthly Coffee Production by Country',
        vAxis: {title: 'Cups'},
        hAxis: {title: 'Month'},
        seriesType: 'bars',
        series: {5: {type: 'line'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    };



    /***** Slider ****/
    $('.fa-arrow-right').on('click',function() {
        $('.content-chart').toggleClass('nav-view');
        $(this).css({display : "none"});
        $('.fa-arrow-left').css({display : "block"});
    });
    $('.fa-arrow-left').on('click',function() {
        $('.content-chart').toggleClass('nav-view');
        $(this).css({display : "none"})
        $('.fa-arrow-right').css({display : "block"});
    });
});

