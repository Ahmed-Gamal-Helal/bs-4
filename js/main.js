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

    var ctxL = document.getElementById("lineChart").getContext('2d');
    var myLineChart = new Chart(ctxL, {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "Septemper", "November", "December"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,0,0,0.2)",
                    strokeColor: "rgba(220,0,0,1)",
                    pointColor: "rgba(220,0,0,1)",
                    pointStrokeColor: "#F00",
                    pointHighlightFill: "#F00",
                    pointHighlightStroke: "rgba(220,0,0,1)",
                    data: [65, 59, 80, 81, 56, 55, 40, 30, 70, 35, 59, 46]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86, 27, 90, 81, 56, 55, 40, 30]
                },
                {
                    label: "My third dataset",
                    fillColor: "rgba(0,0,0,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 20, 70, 40, 86, 27, 90, 40, 19, 86, 27, 90]
                }
            ]
        },
        options: {
            responsive: true
        }    
    });



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

