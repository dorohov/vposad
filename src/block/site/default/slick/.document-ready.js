'use strict';
$(function() { 
	var header = $('[data-slider-slick="slick-header"]');	
	var header_page = $('[data-slider-slick="slick-header-page"]');	
	var gallery = $('[data-slider-slick="slick-gallery"]');	
	var slider = $('[data-slider-slick="slick-slider"]');	
	var CMS__TPL_PATH = '/local/templates/azbn7theme';  
	//var CMS__TPL_PATH = '/vposad';  
	//var CMS__TPL_PATH = '';  
	//local
	var prevArrow = '<button type="button" class="btn-nav__item  is--prev  is--slick"><span class="sr-only">Предыдущий слайд</span><svg class="icon-svg icon-icon-prev" role="img"><use xlink:href="'+ CMS__TPL_PATH +'/img/svg/sprite.svg#icon-prev"></use></svg></button>';
	var nextArrow = '<button type="button" class="btn-nav__item  is--next  is--slick"><span class="sr-only">Следующий слайд</span><svg class="icon-svg icon-icon-next" role="img"><use xlink:href="'+ CMS__TPL_PATH +'/img/svg/sprite.svg#icon-next"></use></svg></button>';
	var prevArrowGallery = $('.btn-nav__item.is--prev.is--gallery');	
	var nextArrowGallery = $('.btn-nav__item.is--next.is--gallery');
	
	header.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		//infinite: true, 
		autoplay: true,
		// изменено с 4000 до 3000
  		autoplaySpeed: 3000,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		fade: true
	});
	header_page.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		dots: false,
		infinite: true, 
		autoplay: true,
  		autoplaySpeed: 4000,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		fade: true
	});
    gallery.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
    	$(this).find('.content-block__slick-count').html('<span>'+ i + '</span> / ' + slick.slideCount);
    });
	gallery.slick({
        slide: '.content-block__slick-item',
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		infinite: true,
		prevArrow: prevArrowGallery,
		nextArrow: nextArrowGallery,
	});	
	slider.slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		dots: false,
		infinite: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 1200,
				settings: {					
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
	$('.slick-cloned .card-item__preview').removeAttr('data-fancybox');
}); 