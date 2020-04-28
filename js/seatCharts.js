var data1 = [['1床<input type="hidden" value="aaa"/>', '2号<input type="hidden" value="aaa">', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号'],
    [11, '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号'],
    ['21号', '22号', '23号', '24号', '25号', '26号', '27号', '28号', '29号', '30号'],
    ['31号', '32号', '33号', '34号', '35号', '36号', '37号', '38号', '39号', '40号'],
    ['41号', '42号', '43号', '44号', '45号', '46号', '47号', '48号', '49号', '50号'],
    [],

    ['+1号', '+2号', '+3号', '+4号', '+5号', '+6号', '+7号', '+8号', '+9号', '+10号']];
$(document).ready(function () {
    var $cart = $('#selected-seats'); //座位区    
    var sc = $('#seat-map').seatCharts({
        //$("#1_1").status() = 'selected';
        //$("#1_2").status() = 'selected';
        map: [  //座位图
            'aaaaaaaaaa',
            'aaaaaaaaaa',
            'aaaaaaaaaa',
            'aaaaaaaaaa',
            'aaaaaaaa__',
            '__________',
            'aaaaaaaaaa'
        ],

        naming: {
            top: false,
            getLabel: function (character, row, column) {
                return column;
            },
            getData: function (data1) {
                console.log(data1)
                return data1;
            },
            data: data1
        },
        legend: { //定义图例
            node: $('#legend'),
            items: [
                ['a', 'available', '可选的床位'],
                ['a', 'unavailable', '已使用的床位'],
                ['a', 'selected', '您选择的床位']
            ]
        },
        click: function () { //点击事件
            if (this.status() == 'available') { //可选座
                $('<li>' + this.settings.label + '床</li>')
                    .attr('id', 'cart-item-' + this.settings.id)
                    .data('seatId', this.settings.id)
                    .appendTo($cart);

                return 'selected';
            } else if (this.status() == 'selected') { //已选中

                //删除已预订座位
                $('#cart-item-' + this.settings.id).remove();
                //可选座
                return 'available';
            } else if (this.status() == 'unavailable') { //已售出
                return 'unavailable';
            } else {
                return this.style();
            }
        }
    });
    /* 修改-床位分组 */
    var $cart1 = $('#selected-seats1'); //座位区   
    var sc1 = $('#seat-map1').seatCharts({
        map: [  //座位图
            'aaaaaaaaaa',
            'aaaaaaaaaa',
            'aaaaaaaaaa',
            'aaaaaaaaaa',
            'aaaaaaaaaa',
            '__________',
            'aaaaaaaaaa'
        ],

        naming: {
            top: false,
            getLabel: function (character, row, column) {
                return column;
            },
            getData: function (data1) {
                console.log(data1)
                return data1;
            },
            data: data1
        },
        legend: { //定义图例
            node: $('#legend1'),
            items: [
                ['a', 'available', '可选的床位'],
                ['a', 'unavailable', '已使用的床位'],
                ['a', 'selected', '您选择的床位']
            ]
        },
        click: function () { //点击事件
            if (this.status() == 'available') { //可选座
                $('<li>' + this.settings.label + '床</li>')
                    .attr('id', 'cart-item-' + this.settings.id)
                    .data('seatId', this.settings.id)
                    .appendTo($cart1);

                return 'selected';
            } else if (this.status() == 'selected') { //已选中

                //删除已预订座位
                $('#cart-item-' + this.settings.id).remove();
                //可选座
                return 'available';
            } else if (this.status() == 'unavailable') { //已售出
                return 'unavailable';
            } else {
                return this.style();
            }
        }
    });

    //已售出的座位
    sc.get(['1_2', '2_2', '3_2']).status('unavailable');
    //已售出的座位
    sc1.get(['1_2', '2_2', '3_2']).status('unavailable');
    sc1.get(['1_1', '2_1', '3_2']).status('selected');
});