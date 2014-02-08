$(document).ready(function() {
	$('.slider > div > div').slides({
		generatePagination: false,
		generateNextPrev: true,
		container: 'once',
		effect: 'slide',
		slideSpeed: 250,
		play: 0
	});
	$('select').selectbox();
	$('input').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
	$('.search > ul > li > div > ul > li span').click(
		function () {
			$('.search > ul > li > div').css({'z-index': '0'});
			$('.search > ul > li > div > ul').removeClass('active');
			$('.search > ul > li > div > ul > li > ul').slideUp(0);
			$(this).parent().parent().parent().css({'z-index': '1'});
			$(this).parent().parent().addClass('active');
			$(this).parent().children('ul').slideDown(0);
		}
	);
	$('.search > ul > li > div > ul > li > ul > li > span').click(
		function () {
			var current = $(this).text();
			$(this).parent().parent().parent().children('span').empty().text(current);
			$(this).parent().parent().slideUp(0);
		}
	);
	$('.search > ul > li > div > ul > li > ul').each(function() {
		var size = $(this).children('li').size() * 140;
		$(this).css({'width': size + 'px'})
	});
	$('.search.click > ul > li h3 span').click(function() {
		$(this).parents('.search').toggleClass('compact');
	});
	$('.form .delhead > div h3 span').click(function() {
		$(this).parent().toggleClass('active');
	});
	$('#card').hide();
	$('.payment').bind('change', function() {
		id = $(this).val();
		$('#cash, #card').hide();
		$('#' + id).show();
	});
	$('.popup, .ask').append('<button></button>');
	$('.form #cash button').click(function() {
		$('.fade, .popup').fadeIn(250);
	});
	$('.information h5 span').click(function() {
		$('.fade, .ask').fadeIn(250);
	});
	$('.popup > button, .ask > button').click(function() {
		$('.fade, .popup, .ask').fadeOut(250);
	});
	$(this).keydown(function(eventObject){
        if (eventObject.which == 27)
        $('.popup, .fade, .ask').fadeOut(250);
    });
	$('.main .title ul li').append('<button></button>');
	$('.search > ul > li > div > ul > li > ul').append('<em></em>');
	$('.top .menu li:last-child, .footer > div > div > div > .nav ul li:last-child').css({'padding-right': '0', 'margin-right': '0', 'border-right-width': '0'});
	$('.top .user li:last-child, .search > ul > li:last-child, .footer .copy .payment li:last-child').css({'padding-right': '0', 'margin-right': '0', 'background': 'none'});
	$('.about ul li:nth-child(2n), .slider ul li:last-child, .footer .news ul li:nth-child(3n), .partners li:nth-child(3n)').css({'margin-right': '0'});
	$('.search > ul > li > div > ul:nth-child(2n)').css({'float': 'right'});
	$('.search > ul > li > div > ul > li > ul > li span:last-child').css({'background': 'none'});
	$('.lb .nav .original li:last-child a, .catalog ul li a:last-child').css({'border-bottom-width': '0'});
	
	$('.contacts .list li:last-child').css({'background': 'none'});
	$('.login').append('<button class="close"></button>');
	$('.login > button.close').click(function() {
		$('.login, .fade').fadeOut(250);
	});
	$(this).keydown(function(eventObject){
        if (eventObject.which == 27)
        $('.login, .fade').fadeOut(250);
    });
	
	var tabs = $('.login .tab');
	$('.login > ul li a').click(function () {
		tabs.hide();
		$('.login div.forget').hide();
		tabs.filter(this.hash).stop(true, true).fadeIn(0);
		$('.login > ul li').removeClass('active');
		$(this).parent().addClass('active');
		return false;
	}).filter(':first').click();
	$('.login .tab span.forget a').click(function() {
		tabs.hide();
		$('.login div.forget').fadeIn(0);
	});
	$('.login div#tab2 .submit').click(function() {
		$(this).parent('div').children('div.success').fadeIn(0);
	});
	$('.top .user a.enter').click(function() {
		$('div.login, .fade').fadeIn(250);
		tabs.hide();
		$('.login > ul li').removeClass('active');
		$('.login > ul li:nth-child(1)').addClass('active');
		$('.login .tab#tab1').fadeIn(0);
	});
	$('.top .user a.register').click(function() {
		$('div.login, .fade').fadeIn(250);
		tabs.hide();
		$('.login > ul li').removeClass('active');
		$('.login > ul li:nth-child(2)').addClass('active');
		$('.login .tab#tab2').fadeIn(0);
	});
	$('.newsearch .drop').click(function() {
		$(this).parents('.default').toggleClass('active');
		$(this).parents('.default').find('.dropped').slideToggle(150);
		return false;
	});
});
