const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$('.navbar-toggler').click(function() {
    var flag = $('.list-group').hasClass("show");
    if (flag) {
        $('.list-group').slideUp();
        $('.list-group').toggleClass("show");
    } else {
        $('.list-group').slideDown();
        $('.list-group').toggleClass("show");
    }
});
$('#login-btn').click(function() {
    $('.modal ').fadeToggle("show")
});
$('.btn-close').click(function() {
    $('.modal ').fadeToggle("show")
});
$('#close-btn').click(function() {
    $('.modal ').fadeToggle("show")
});

$('form').on('submit', function() {
    var email = $('input[type=email]').val();
    var y = $('input[type=password]').val();
    var z = $('#exampleCheck1').is(":checked");
    var flag = true;

    if (((/\S+@\S+\.\S+/.test(email)) && (/[A-Z]/.test(email))) == false) {
        alert('올바른 이메일의 형식이 아닙니다.');
        flag = false;
    }
    if (email == "" || y == "" || z == false) {
        alert("Please check the inputs again. something has been missen.");
        flag = false;
    }
    if (y.length < 6) {
        alert("password too short!")
        flag = false;
    }
    return flag;
});

var count = 0;
$('#darkmode-btn').click(function() {
    count += 1;
    if (count % 2 == 1) {
        $('#color-mode').html(' Light Mode');
        $(' body ').addClass('bg-dark text-white');
        $('#darkmode-btn').removeClass('bg-dark border-white text-white');
        $('#darkmode-btn').addClass('bg-white border-black text-black');
        $('.slide-buttons').addClass('text-white');

    } else {
        $('#color-mode').html(' Dark Mode');
        $(' body ').removeClass('bg-dark text-white');
        $('#darkmode-btn').removeClass('bg-white border-black text-black');
        $('.slide-buttons').removeClass('text-white');
        $('#darkmode-btn').addClass('bg-dark border-white text-white');

    }
});

let second = 0;
var interval = setInterval(function() {
    if (second == 5) {
        $('#timeout-box').hide();
        clearInterval(interval);
    }
    second += 1;
    $('#timeout-box').text(5 - second + '초 이내 구매 시 사은품 증정!');
}, 1000);

var slide_ptr = 1;

var slider = function(curr) {
    slide_ptr = curr;
    $('.slide-container').css('transform', 'translateX(' + (-100 * (slide_ptr - 1)) + 'vw)');
}

$('#slide-1').click(function() {
    slider(1)
});
$('#slide-2').click(function() {
    slider(2)
});
$('#slide-3').click(function() {
    slider(3)
});

$('#slide-left').on('click', function() {
    if (slide_ptr == 1) {} else {
        slider(slide_ptr - 1);
    }
});
$('#slide-right').on('click', function() {
    if (slide_ptr == 3) {} else {
        slider(slide_ptr + 1);
    }
});

var resized = false;

$(window).on('scroll', function() {
    if ($(window).scrollTop() >= 50) {
        $('#logo').addClass('h6')
        $('#logo').removeClass('h3')
        resized = true;
    } else if ($(window).scrollTop() >= 0 && $(window).scrollTop() < 50 && resized) {
        $('#logo').addClass('h3');
        $('#logo').removeClass('h6');
    }
});

$('#terms').on('scroll', function() {
    if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
        alert("Please press agree or disagree button of the term.")
    }
});


$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    var per = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;

    if (per >= 95) {
        $('#scroll_progress').width('100%');
    } else if (per >= 70) {
        $('#scroll_progress').width('75%');
    } else if (per >= 45) {
        $('#scroll_progress').width('50%');
    } else {
        $('#scroll_progress').width('25%');
    }
});

var tab_head = $('.tab-head');
var tab_content = $('.tab-content');

tab_head.on('click', function() {
    tab_head.removeClass('tab-head-selected');
    $(this).addClass('tab-head-selected');

    var idx = tab_head.index(this);
    tab_content.removeClass('show');
    tab_content.eq(idx).addClass('show');
});

