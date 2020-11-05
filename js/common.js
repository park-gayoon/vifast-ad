﻿/**
 * Created by CREWMATE on 2020.11.05
 * @author : Publishing Team.
 * @dependency : jquery ver 1.12.4+
 * @env : PC
 */

$(document).ready(function(){
    /* modal */
    $(".btn_modal").on("click", function(e) {
        $("#modals-container").toggle();
    });
    $(".btn_modal-close").on("click", function(e) {
        $("#modals-container").css('display','none');
    });

    /* 햄버거버튼 클릭 시 */
    $('.btn_gnb-open').click(function(){
        var tar = $('.layout_wrap');
        var tarClass = tar.attr('class');
        if(tarClass != 'layout_wrap size-b') {
            tar.attr('class','layout_wrap size-b');
        }else {
            tar.attr('class','layout_wrap size-s');
        }

        $('.size-s .btn_gnb-menu').removeClass('on').next().css('display','none');
    });

    /* 해상도 체크 */
    function dipCheck() {
        var windowWidth = $(window).width();
        var tar = $('.layout_wrap');
        var tarClass = tar.attr('class');
        if (windowWidth <= 1024) {
            $('.wrapper').addClass('dpi');
            $('.btn_gnb-open').click(function () {
                $('.gnb_contents').addClass('dpi_gnb');
            });
            if (tarClass != 'layout_wrap size-b') {
                tar.attr('class', 'layout_wrap size-s');
            } else {
                tar.attr('class', 'layout_wrap size-s');
            }
        } else {
            $('.wrapper').removeClass('dpi');
            $('.gnb_contents').removeClass('dpi_gnb');
            $('.layout_wrap').removeClass('dpi_size');
            if (tarClass == 'layout_wrap size-b') {
                tar.attr('class', 'layout_wrap size-b');
            } else {
                tar.attr('class', 'layout_wrap size-b');
            }
            $('.btn_gnb-open').click(function () {
                $('.gnb_contents').removeClass('dpi_gnb');
            });
        }
    }

    /* 리사이즈 체크 */
    $(window).resize(function(){
        dipCheck();
    }).resize();

    /* menu 클릭 시 */
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

        /* 접힌 메뉴 클릭 시 */
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
        $(this).toggleClass('is-active');
    });

    //tab
    $('.tab_type li button, .btn_focus-tab').click(function () {
        $('.tab_type .active').removeClass('active');
        $(this).addClass('active');
        $('.tab_view-box').removeClass('block');
        var contentid = $(this).attr('title');
        $('#' + contentid).addClass('block');
        $('.' + contentid).addClass('active');
    });

    //datepicker
    $(".datepicker").datepicker({
        showOn: "button",
        dateFormat: "yy-mm-dd",
        buttonText: "Select date",
        changeYear: true,
        changeMonth: true,
        showOtherMonths: true,
        monthNamesShort: [ "1","2","3","4","5","6","7","8","9","10","11","12" ],
        dayNamesMin: [ "일","월","화","수","목","금","토" ],
        beforeShow: function() {
            const $datepickerDiv = $("#ui-datepicker-div");
            $datepickerDiv.after('<div class="ui-widget-overlay ui-front" />');
        },
        onSelect: function() {
            $('.ui-widget-overlay.ui-front').remove();
        },
        onClose: function() {
            $('.ui-widget-overlay.ui-front').remove();
        }
    });
});