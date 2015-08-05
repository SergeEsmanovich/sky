(function($) {
    $(document).ready(function() {
        //Слайдер
      
        $('#head_slider').on('slide.bs.carousel', function() {
            var all = $('#head_slider .item .carousel-caption');
            all.fadeTo("fast", 0, function() {
                // Animation complete.
            });
        });
        $('#head_slider').on('slid.bs.carousel', function() {          
            var current_slude = $('#head_slider .item.active .carousel-caption');
            current_slude.fadeTo("slow", 1, function() {
                // Animation complete.
            });
        });
        //Соты улей все такое
        var beehive = function() {
            var width = $(window).width();
            var sota = $('.beehive .sota').width();
            var count = ~~((width - 140) / (sota + 10));
            $(".beehive > span.clear").remove();
            var counter = count;
            var row = 1;
            $.each($('.beehive .sota'), function(key, value) {
                if (key == count - 1) {
                    console.log(count);
                    $(value).after("<span class='clear'></span>");
                    //count += counter;
                    if (row % 2) {
                        if ((counter + 1) < ((width - 30) / (sota + 10))) {
                            count += counter + 1;
                        } else {
                            count += counter;
                        }
                    } else {
                        count += counter;
                    }
                    row += 1; //Следующая строка
                }
            });
        }
        beehive();
        $(window).resize(function() {
            beehive();
        });
        $('.miniblock .fa-eye').click(function() {
            //alert('worck');
            //Возвращаем все мини блоки в исходную позицию
            $('.miniblock .activate').removeClass('hide');
            $('.miniblock .text').addClass('hide');
            //Переключаем шторку
            var miniblock = $(this).closest('.miniblock');
            miniblock.find('.text').removeClass('hide');
            miniblock.find('.activate').addClass('hide');
        });
    });
})(jQuery);