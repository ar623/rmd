(function($){

//첫번째 계기판
$('#rmd1').kumaGauge({
    value: Math.floor((Math.random() * 99) + 1)
});

//두번째 계기판
$('#rmd2').kumaGauge({
    value: Math.floor((Math.random() * 99) + 1)
});

//계기판 값 업데이트트
function rmdUpdating() {
    $('#rmd1').kumaGauge('update', {
        value: Math.floor((Math.random() * 99) + 1)
    });

    $('#rmd2').kumaGauge('update', {
        value: Math.floor((Math.random() * 99) + 1)
    });
        alert("H!")
}

$('.js-gauge--2').kumaGauge({
    value: Math.floor((Math.random() * 99) + 1),
    fill: '#F34A53',
    gaugeBackground: '#1E4147',
    gaugeWidth: 10,
    showNeedle: false,
    label: {
        display: true,
        left: 'Min',
        right: 'Max',
        fontFamily: 'Helvetica',
        fontColor: '#1E4147',
        fontSize: '11',
        fontWeight: 'bold'
    }
});
/*var update = setInterval(function () {
    $.getScript("/Dist/js/kuma-gauge.jquery.js", function () {

        $('#rmd1').kumaGauge('update', {
            value: Math.floor((Math.random() * 99) + 1)
        });
        console.log("동작중");
    });
}, 3000);*/

})(jQuery);