//첫번째 계기판
rmdUpdating($('#rmd2'));

//두번째 계기판
    $('#rmd2').kumaGauge({
        value: Math.floor((Math.random() * 99) + 1)
    });

//계기판 값 업데이트트
    function rmdUpdObj() {
        rmdUpdating($('#rmd1'));
        rmdUpdating($('#rmd2'));
    };

    function rmdUpdating(obj) {
        obj.kumaGauge('update', {
            value: Math.floor((Math.random() * 99) + 1)
        });
    };

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
    setInterval(rmdUpdObj, 3000);
