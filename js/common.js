﻿/**
 * Created by Gayoon on 2020.11.12
 * @author : Publishing Team.
 * @dependency : jquery ver 1.12.4+
 * @env : PC
 */

$(document).ready(function(){
    // file Upload
    $('.input_file').change(function(){
        var i = $(this).val();
        $('.upload_text').val(i);
    });

    // select box
    $(".sel select").each(function () {
        if($(this).is(':disabled')){
            $(this).wrapAll(" <div class='select--disabled'></div>");
        }
    });
    $('.sel select').heapbox();

    //스크롤바
    $('.scrollbar-inner').scrollbar();

    // modal
    var $panel = $(".box_popup-panel");
    $(".btn_popup_open").on("click", function(e) {
        $panel.fadeIn(350);
    });
    $(".btn_popup_close").on("click", popupClose);

    $panel.find(".bg_popup").on("click", popupClose);
    function popupClose(e) {
        $panel.fadeOut(250);
        e.preventDefault();
    }

    // 햄버거버튼 클릭 시
    $('.btn_gnb-open').click(function(){
        var tar = $('.layout_wrap');
        var tarClass = tar.attr('class');
        if(tarClass != 'layout_wrap size-b') {
            tar.attr('class','layout_wrap size-b');
        }else {
            tar.attr('class','layout_wrap size-s');
        }
        //$('.size-s .btn_gnb-menu').removeClass('on').next().css('display','none');
    });

    // GNB menu 클릭 시
    $('.btn_gnb-menu').click(function(){
        if ($(this).hasClass('on')) {
            slideUp();
            $('.btn_gnb-menu').removeClass('on')
        } else {
            slideUp();
            $(this).addClass('on').next().slideDown();
        }
        function slideUp() {
            $('.btn_gnb-menu').removeClass('on').next().slideUp();
        };

        // 접힌 메뉴 클릭 시
        var btnTar = $('.layout_wrap');
        var btnTarClass = btnTar.attr('class');
        if(btnTarClass != 'layout_wrap size-b') {
            btnTar.attr('class','layout_wrap size-b');
            if ($(this).hasClass('on')) {
                $('.btn_gnb-menu').removeClass('on').next().css('display','none');
                $(this).addClass('on').next().slideDown();
            }
        }
    })

    // toggle 공통
    $('.btn_toggle').click(function() {
        $('.box_toggle-cont').toggleClass('is-active');
    });

    // tab
    $('.tab_type li button, .btn_focus-tab').click(function () {
        $('.tab_type .active').removeClass('active');
        $(this).addClass('active');
        $('.tab_view-box').removeClass('block');
        var contentid = $(this).attr('title');
        $('#' + contentid).addClass('block');
        $('.' + contentid).addClass('active');
    });

    // datepicker
    $("input.datepicker").datepicker({
        showOn: "button",
        dateFormat: "yy-mm-dd",
        buttonText: "Select date",
        changeYear: true,
        changeMonth: true,
        showOtherMonths: true,
        monthNamesShort: [ "1","2","3","4","5","6","7","8","9","10","11","12" ],
        dayNamesMin: [ "일","월","화","수","목","금","토" ],
        /*beforeShow: function() {
            const $datepickerDiv = $("#ui-datepicker-div");
            $datepickerDiv.after('<div class="ui-widget-overlay ui-front" />');
        },*/
        beforeShow: function(input, inst)
        {
            var calendar = inst.dpDiv;
            setTimeout(function() {
                calendar.position({
                    my: 'right top',
                    at: 'right bottom',
                    collision: 'none',
                    of: input
                });
            }, 1);
        },
        onSelect: function() {
            $('.ui-widget-overlay.ui-front').remove();
        },
        onClose: function() {
            $('.ui-widget-overlay.ui-front').remove();
        }
    });
});