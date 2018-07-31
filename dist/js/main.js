"use strict";

$(function(){

	$(document).ready(function(e){

		$(window).on('resize',function(){location.reload();});

		var $preloader = $('.preloader');

		setTimeout(function(){
			$preloader.fadeOut(500);
		}, 2500);


		// Исправление бага отображения на мониторах 16:10 соотношения
		var $kursPerem = '70%',
			$kursPerem2 = '41%',
			$s7cran = '12%',
			$kreplWrapPerem = '86%',
			$krepl2_perem = 'scaleY(1.24)',
			$krepl2_perem2 = 'scaleY(0.35)',
			$sostavContainerPerem = '725%',
			$sostavContainerPerem2Y = '-28%',
			$mainLay_perem = '5%',
			$korablContPerem = '290%',
			$korablCont_s9perem = '-155%',
			$carCont_s9perem = '42%',
			$carCont_s9perem2 = '56%',
			$mainSostavPerem = '-55%',
			$mainSostav_s9_perem = '1%',
			$mainSostav_s9_perem2 = '-110%',
			$bigCar_s7_perem = '59%';

			// alert('outerWidth = ' + window.outerWidth + ', window.outerHeight = ' + window.outerHeight + 'innerWidth = ' + window.innerWidth + 'innerHeight = ' + window.innerHeight);


		if(
			window.outerWidth == 5120 || window.outerWidth == 3840  || window.outerWidth == 2880 || (window.outerWidth == 2560 && window.outerHeight == 1600) || window.outerWidth == 2304  || (window.outerWidth == 1920 && window.outerHeight == 1200) || window.outerWidth == 1680 || window.outerWidth == 1440 || window.outerWidth == 1280 || window.outerWidth == 1152 || window.outerWidth == 1024
			) {

			// alert('IF сработал');

			$('.sect1 .cont1').css('bottom', '26%');
			$('.sect1 .kran').css({'bottom':'27%', 'left':'16.5%'});
			$('.sect1 .ship').css('bottom', '29%');
			$('.sect1 .car1').css('bottom', '20%');
			$('.sect1 .car2').css('bottom', '22%');
			$('.sect1 .right-build').css('bottom', '21%');

			$('#idea_s2').css('width', '38%');
			$('#bl1_s3 #docum').css({'width':'28%', 'top':'30%'});
			$('#bl1_s3 #finger-left').css('transform', 'translate(-82%, 6%)');
			$('#bl1_s3 #finger-right').css('transform', 'translate(43%, -23%)');
			$('.secondStepWrap').css({'top':'40.4%', 'height':'36.5%'});
			$('#s4btn').css({'bottom':'25%'});
			$kursPerem = '72%';
			$kursPerem2 = '48%';
			$s7cran = '11%';
			$kreplWrapPerem = '82%';
			$bigCar_s7_perem = '56%';
			$krepl2_perem = 'scaleY(1.37)';
			$krepl2_perem2 = 'scaleY(0.66)';
			$sostavContainerPerem = '712%';
			$sostavContainerPerem2Y = '-75%';
			$korablContPerem = '247%';
			$mainLay_perem = '6%';
			$korablCont_s9perem = '-188%';
			$carCont_s9perem = '50%';
			$carCont_s9perem2 = '45%';
			$mainSostavPerem = '-49%';
			$('#bl1_s5 .s5cloud1, #bl1_s5 .s5cloud3').css('top', '60%');
			$('#bl1_s5 .galka').css({'left':'20%', 'top':'30%'});

			$('.overflowBox').css({'width':'25%', 'left':'36%'});
			$('#sect6 .bigCar, #sect7 .bigCar, #sect9 .bigCar').css({'width':'19%'});
			$('#s7wrap .bigCran').css({'width':'33.5%', 'bottom':'2%'});
			$('#s7wrap .cloudLayer, #s7wrap .mainLayer, #s7wrap .treeLayer').css({'backgroundSize':'auto 93%'});
			$('#s7wrap .bigCar').css({'width':'18%', 'height':'14%'});

			$('#s7wrap .mainSostav').css({'width':'120%', 'height':'15%', 'bottom':'15.7%'});
			$('#s7wrap .galka1').css({'left':'22%', 'top':'61%', 'width':'12%', 'height':'12%'});
			$('#s7wrap .galka2').css({'left':'33%', 'top':'48%', 'width':'12%', 'height':'12%'});
			$('#s8wrap .korablContainer').css({'bottom':'26.6%'});
			$('#s9wrap .korablContainer').css({'width':'25%', 'left':'46.5%', 'bottom':'42%'});
			$('#s9wrap .listTamojn').css({'top':'14%'});
			$('#s9wrap .mainSostav').css({'height':'15%'});
			$('#s9wrap .korablContainer').css({'height':'24.7%'});
			$('#s9wrap .carContainer').css({'width':'64%', 'height':'67%', 'left':'-28%', 'bottom':'60%'});
			$('#s9wrap .bigCran').css({'height':'55%'});

			$('#s10wrap .galka1, #s10wrap .galka2, #s10wrap .galka3').css({'width':'13%', 'height':'13%'});
			$('#s7wrap .sostavContainer').css({'left':'46.8%'});
		}


		if(window.outerWidth == 1920 && window.outerHeight == 1080) {
			$('#bl1_s3 #finger-left').css('transform', 'translate(-82%, 6%)');
			$('#bl1_s3 #finger-right').css('transform', 'translate(43%, -23%)');
			$('.secondStepWrap').css('top', '29%');
			$('#sect6 .bigCar, #sect7 .bigCar, #sect9 .bigCar').css('bottom', '8%');
			$s7cran = '2%';
			$bigCar_s7_perem = '68%';
			$('#s7wrap .bigCran, #s9wrap .bigCran').css('height', '62%');
			$('#s7wrap .mainSostav').css('width', '127%');
			$mainSostavPerem = '-64%';
			$sostavContainerPerem = '585%';
			$sostavContainerPerem2Y = '-45%';
			$('#s9wrap .korablContainer').css({'width': '24%', 'left': '47%'});
			$korablContPerem = '266%';
			$('#s9wrap .sostavContainer').css({'widht': '13%', 'bottom': '26%'});
			$('#s9wrap .mainSostav').css('width','111%');
			$mainSostav_s9_perem = '-13%';
			$mainSostav_s9_perem2 = '-136%';
		}



		var smScroll = new SmoothScroll({
			animationTime    : 700, // [ms]
			stepSize         : 50, // [px]
			accelerationDelta : 10,  // 50
			accelerationMax   : 2   // 3
		});

		var percX = window.innerWidth / 100;
		var percY = window.innerHeight / 100;


		// parallax на главном экране
		$('body').on('mousemove', function (e) {
			
			var treeX = -e.pageX / 100;
			var treeY = -e.pageY / 100;
			var sectX = e.pageX - $(this).offset().left - $('.sect1').width()/2;
			var sectY = e.pageY - $(this).offset().top - $('.sect1').height()/2;

			TweenMax.to(
				$('.sect1'), .5,
				{
					css: { 
						transform: "translate(" + (-sectX/100) + "px, " + (-sectY/100) + "px) scale(1.02)",
						backgroundPositionX: e.pageX / 60 - 100,
						backgroundPositionY: e.pageY / 60 - 100
					}, 
					ease: Expo.easeOut, 
					overwrite: 'all' 
			});

			TweenMax.to(
				$('.trees'), .5,
				{
					css: { 
						transform: "translate(" + treeX + "px, " + treeY + "px)" 
					}, 
					ease: Expo.easeOut, 
					overwrite: 'all' 
			});

			TweenMax.to(
				$('.bottom-grass'), .5,
				{
					css: { 
						transform: 'translateX(' + treeX + 'px)' 
					}, 
					ease: Expo.easeOut, 
					overwrite: 'all' 
			});

			TweenMax.to(
				$('.cloud1'), .5,
				{
					css: { 
						left: -e.pageX / 30 + 200,
						top: -e.pageY / 30 + 100
					}, 
					ease: Expo.easeOut, 
					overwrite: 'all' 
			});

			TweenMax.to(
				$('.cloud2'), .5,
				{
					css: { 
						left: -e.pageX / percX / 80 + 60 + '%',
						top: -e.pageY / percY / 80 + 5 + '%'
					}, 
					ease: Expo.easeOut, 
					overwrite: 'all' 
			});

			TweenMax.to(
				$('.cloud3'), .5,
				{
					css: { 
						right: e.pageX / percX / 80 + 6 + '%',
						top: -e.pageY / percY / 80 + 27 + '%'
					}, 
					ease: Expo.easeOut, 
					overwrite: 'all' 
			});
		});





			// init controller
			var controller = new ScrollMagic.Controller();

			//fixed first section
			var fixCont1Scene = new ScrollMagic.Scene({
				triggerElement: "#sect1",
				triggerHook: 0
			})
			.setPin('#sect1', {pushFollowers: false})
			.addTo(controller);
			

			//fixed bl1_s2 section
			var $bl1_s2 = $('#bl1_s2');
			var $empt_mail = $('#empt_mail');
			var $arrow_mail = $('#arrow-mail');
			var $idea_s2 = $('#idea_s2');
			var $fullmail_s2 = $("#full_mail");

			var bl1_s2Tween = new TimelineMax();
			bl1_s2Tween
				.to($bl1_s2, 30, {scale: 1.5, x: '5%', ease: Power1.easeIn})
				.to($bl1_s2, 15, {x: '15%', y: '-3.5%'}, 'onetime')
				.to("#bl2_s2", 20, {left: '-2%'}, 'onetime')
				.to($idea_s2, 20, {className: '+=scaleIn'})
				.to('#texts2', 10, {className: '+=activeText'})
				.to($arrow_mail, 3, {opacity: 1}, 'lett-one')
				.to($arrow_mail, 40, {width: 0, opacity: 0.5}, 'lett-two')
				.to($empt_mail, 3, {opacity: 1}, 'lett-one')
				.to($empt_mail, 40, {right: '-50%', opacity: 0.4}, 'lett-two')
				.to($empt_mail, 1, {opacity: 0})
				.to('#sect1-wrap', .1, {opacity: 0})
				.to($fullmail_s2, 40, {y: '-30px', opacity: 2})
				.to($fullmail_s2, 1, {opacity: 0})
				.to("#bl1_s2", 20, {x: '100%', ease: Power1.easeInOut}, 's2t1')
				.to("#bl2_s2", 20, {x: '-100%', ease: Power1.easeInOut}, 's2t1')
				.to("#sect3", 10, {opacity: 1, ease: Power1.easeInOut}, 's2t1')
				;
			var bl1_s2Scene = new ScrollMagic.Scene({
				triggerElement: "#bl1_s2",
				triggerHook: 0,
				duration: 4500
			})
			.setPin('#bl1_s2', {pushFollowers: false})
			.setTween(bl1_s2Tween)
			.addIndicators({name: "bl1_s2Scene"})
			.addTo(controller);




			//fixed bl1_s3 section
			var $docum_s3 = '#docum';

			var bl1_s3Tween = new TimelineMax();
			bl1_s3Tween
				.to('#sect1', .1, {opacity: 0, ease: Power1.easeIn})
				.to('#left-hand', 2, {right: '47%', ease: Power1.easeInOut}, 'handIn')
				.to('#finger-left', 2, {right: '47%', ease: Power1.easeInOut}, 'handIn')
				.to($docum_s3, 2, {left: '36%', ease: Power1.easeInOut}, 'handIn')
				.to('#right-hand', 2, {left: '47.5%', ease: Power1.easeInOut}, 'handIn')
				.to('#finger-right', 2, {left: '47.5%', ease: Power1.easeInOut}, 'handIn')

				.to($docum_s3, .5, {left: '36%', ease: Power1.easeInOut})

				.to('#right-hand', 2, {left: '120%', ease: Power1.easeInOut}, 'handOut')
				.to('#finger-right', 2, {left: '120%', ease: Power1.easeInOut}, 'handOut')
				.to($docum_s3, 2, {left: '109%', ease: Power1.easeInOut}, 'handOut')
				.to('#left-hand', 2, {right: '120%', ease: Power1.easeInOut}, 'handOut')
				.to('#finger-left', 2, {right: '120%', ease: Power1.easeInOut}, 'handOut')
				// .to('#sect3-wrap', 1, {opacity: 0.3, ease: Power1.easeInOut})
				;
			var bl1_s3Scene = new ScrollMagic.Scene({
				triggerElement: "#sect3-wrap",
				triggerHook: 0,
				offset: '-760',
				duration: 6000
			})
			.setPin('#sect3-wrap', {pushFollowers: false})
			.setTween(bl1_s3Tween)
			.addIndicators({name: "bl1_s3Scene"})
			.addTo(controller);


			var $rightHand_s4 = '#s4RightHand',
				$btn_s4 = '#s4btn',
				$btn2_s4 = '#s4btn2';

			var bl1_s4Tween = new TimelineMax();
			bl1_s4Tween
				.to('#bl4_wrap', 0.1, {className: '+=active', ease: Power1.easeIn}, 'cursorAnim')
				.to($rightHand_s4, 20, {transform: 'translateX(40px)', ease: Power1.easeIn}, 'cursorAnim')
				.to('#s4Cursor', 20, {top: $kursPerem, right: '32%', ease: Power1.easeIn}, 'cursorAnim')
				.to($btn_s4, 3, {transform: 'scale(.95)', ease: Power1.easeIn}, 'btnDown')
				.to($rightHand_s4, 3, {transform: 'translate(40px, 5px)', ease: Power1.easeIn}, 'btnDown')
				.to($btn_s4, 5, {transform: 'scale(.95)', ease: Power1.easeIn}, 'btnDown2')
				.to($rightHand_s4, 5, {transform: 'translate(40px, 5px)', ease: Power1.easeIn}, 'btnDown2')
				.to($btn_s4, 3, {transform: 'scale(1)', ease: Power1.easeIn}, 'btnDown3')
				.to($rightHand_s4, 3, {transform: 'translate(40px, 0)', ease: Power1.easeIn}, 'btnDown3')
				.to('.secondStepWrap', 3, {className: '+=active', ease: Power1.easeIn})
				.to('.topText1', 1, {className: '+=hidden', ease: Power1.easeIn})
				.to('.topText2', 1, {className: '+=show', ease: Power1.easeIn})
				.to($rightHand_s4, 1, {transform: 'translate(0, 0)', ease: Power1.easeIn})
				.to('#s4Cursor', 20, {top: $kursPerem2, right: '22%', ease: Power1.easeIn}, 'cursorAnim2')
				.to($rightHand_s4, 20, {transform: 'translate(40px, 0)', ease: Power1.easeIn}, 'cursorAnim2')
				.to($btn2_s4, 3, {transform: 'scale(.95)', ease: Power1.easeIn}, 'btnDown21')
				.to($rightHand_s4, 3, {transform: 'translate(40px, 5px)', ease: Power1.easeIn}, 'btnDown21')
				.to($btn2_s4, 5, {transform: 'scale(.95)', ease: Power1.easeIn}, 'btnDown22')
				.to($rightHand_s4, 5, {transform: 'translate(40px, 5px)', ease: Power1.easeIn}, 'btnDown22')
				.to($btn2_s4, 3, {transform: 'scale(1)', ease: Power1.easeIn}, 'btnDown23')
				.to($rightHand_s4, 3, {transform: 'translate(40px, 0)', ease: Power1.easeIn}, 'btnDown23')
				.to($rightHand_s4, 3, {transform: 'translate(40px, 0)', ease: Power1.easeIn})
				.to('#bl2_s3', 15, {transform: 'translate(100%, 0)', ease: Power1.easeIn}, 'goHide')
				.to('#bl1_s5', 15, {transform: 'translate(0, 0)', ease: Power1.easeIn}, 'goHide')
				;
			var bl1_s4Scene = new ScrollMagic.Scene({
				triggerElement: "#sect4",
				triggerHook: 0,
				// offset: '-760',
				duration: 4000
			})
			.setPin('#sect4', {pushFollowers: false})
			// .setClassToggle('#bl4_wrap', 'active')
			.setTween(bl1_s4Tween)
			.addIndicators({name: "bl1_s4Scene"})
			.addTo(controller);


			var bl1_s5Tween = new TimelineMax();
			bl1_s5Tween
				.to('#bl1_s5 .s5text1', 3, {transform: 'translate(0, 0)', ease: Power1.easeIn})
				.to('#bl1_s5 .firstLetter', 5, {opacity: 1, ease: Power1.easeIn})
				.to('#sect2', 1, {opacity: 0, ease: Power1.easeIn})
				.to('#sect3', 1, {opacity: 0, ease: Power1.easeIn})
				.to('#sect4', 1, {opacity: 0, ease: Power1.easeIn})
				.to('#bl1_s5 .s5cloud1', 5, {opacity: 1, ease: Power1.easeIn})
				.to('#bl1_s5 .galka', 3, {opacity: 1, ease: Power1.easeIn})
				.to('#bl1_s5 .firstLetter', 1, {opacity: 0, ease: Power1.easeIn})
				.to('#bl1_s5 .s5text1', 5, {transform: 'translate(-100%, 0)', ease: Power1.easeIn}, 's5onetime')
				.to('#bl1_s5 .s5manager', 5, {transform: 'translate(0, 0)', ease: Power1.easeIn}, 's5onetime')
				.to('#bl1_s5 .s5text2', 3, {transform: 'translate(0, 0)', ease: Power1.easeIn})
				.to('#bl1_s5 .s5cloud2', 3, {transform: 'translate(0, 0)', opacity: 1, ease: Power1.easeIn})
				.to('#bl1_s5 .s5cloud2', 5, {transform: 'translate(0, 0)', opacity: 1, ease: Power1.easeIn})

				.to('#bl1_s5 .s5text2', 3, {opacity: 0, ease: Power1.easeIn}, 's5onetime2')
				.to('#bl1_s5 .s5cloud1', 3, {opacity: 0, ease: Power1.easeIn}, 's5onetime2')
				.to('#bl1_s5 .s5cloud2', 3, {opacity: 0, ease: Power1.easeIn}, 's5onetime2')
				.to('#bl1_s5 .s5text3', 3, {transform: 'translate(0, 0)', ease: Power1.easeIn})
				.to('#bl1_s5 .s5cloud3', 3, {opacity: 1, ease: Power1.easeIn})
				.to('#bl1_s5 .s5cloud3', 3, {opacity: 1, ease: Power1.easeIn})
				.to('#bl1_s5 .s5cloud4', 3, {transform: 'scale(1)', opacity: 1, ease: Power1.easeIn})
				.to('#bl1_s5 .s5text3', 2, {opacity: 0, ease: Power1.easeIn})
				.to('#bl1_s5 .s5text4', 3, {transform: 'translate(0, 0)', ease: Power1.easeIn})
				.to('#bl1_s5', 1, {className: '+=overshow', ease: Power1.easeIn})
				.to('#s5wrap', 1, {backgroundImage: 'url(img/sect5/s5okno.png)', ease: Power1.easeIn})
				.to('#bl1_s5', 5, {transform: 'translate(-150%, 0)', ease: Power1.easeIn}, 'one_hide')
				.to('.s5manager', 5, {transform: 'translate(250%, 0)', ease: Power1.easeIn}, 'one_hide')
				.to('#s5wrap', 10, {transform: 'scale(1.3)', opacity: 0, ease: Power1.easeIn}, 'one_hide')
				.to('#bl1_s6', 13, {opacity: 1, delay: 3.5, ease: Power1.easeIn}, 'one_hide')
				;
			var bl1_s5Scene = new ScrollMagic.Scene({
				triggerElement: "#sect5",
				triggerHook: 0,
				// offset: '-760',
				duration: 9000
			})
			.setPin('#sect5', {pushFollowers: false})
			.setClassToggle('#s5wrap', 'active')
			.setTween(bl1_s5Tween)
			.addIndicators({name: "s5Scene"})
			.addTo(controller);




			var $leftCar_s6 = '#sect6 .leftCar';
			var $rightCar_s6 = '#sect6 .rightCar';
			var $centerCar_s6 = '#sect6 .centerCar';
			var $pogruz_s6 = '#sect6 .pogruz';
			var $korob_s6 = '#sect6 .korob';
			var $bigCar_s6 = '#sect6 .bigCar';

			var bl1_s6Tween = new TimelineMax();
			bl1_s6Tween
				.to('#sect6 .text1', 3, {transform: 'translateX(0)', ease: Power1.easeIn})
				.to($leftCar_s6, 6, {left: '51%', ease: Power3.easeInOut}, 's6t1')
				.to($rightCar_s6, 6, {right: '54%', ease: Power3.easeInOut}, 's6t1')
				.to($centerCar_s6, 6, {transform: 'scale(1)', bottom: '8%', ease: Power3.easeInOut}, 's6t1')
				.to($centerCar_s6, .4, {opacity: 0, ease: Power1.easeInOut})
				.to($centerCar_s6, .4, {className: '+=centralCar2', opacity: 1, ease: Power1.easeInOut})
				.to('#sect6 .car', 1, {className: '+=withoutAfter', ease: Power1.easeInOut})
				.to('#sect6 .overflowBox', 2, {opacity: 1, ease: Power1.easeInOut}, 's6t2')
				.to('#sect6 .boxes', 2, {opacity: 1, ease: Power1.easeInOut}, 's6t2')

				.to($leftCar_s6, 6, {left: '110%', ease: Linear.easeNone}, 's6t3')
				.to($rightCar_s6, 6, {right: '110%', ease: Linear.easeNone}, 's6t3')
				.to($centerCar_s6, 6, {transform: 'scale(1.7)', bottom: '-20%', ease: Linear.easeNone}, 's6t3')
				.to($bigCar_s6, 9, {left: '42%', ease: Power3.easeInOut})
				.to('#sect6 .text1', 1, {opacity: 0, ease: Power1.easeInOut})
				.to('#sect6 .text2', 1, {transform: 'translateX(0)', ease: Power1.easeInOut})
				.to($pogruz_s6, 4, {left: '38%', ease: Power1.easeInOut})
				.to($korob_s6, 2, {opacity: 1, ease: Power1.easeInOut})
				.to($pogruz_s6, 2, {left: '35.5%', ease: Power1.easeInOut})
				.to('#sect6 .podstavka', 3, {bottom: '55%', ease: Power1.easeInOut}, 's6t4')
				.to($korob_s6, 3, {bottom: '67%', ease: Power1.easeInOut}, 's6t4')
				.to($pogruz_s6, 3, {left: '38%', ease: Power1.easeInOut})
				.to($korob_s6, 2, {opacity: 0, ease: Power1.easeInOut})
				.to($pogruz_s6, 3, {left: '32%', ease: Power2.easeInOut}, 's6t5')
				.to('#sect6 .podstavka', 3, {bottom: '5%', ease: Power2.easeInOut}, 's6t5')
				.to('#sect6 .boxes', 3, {opacity: 0, ease: Power2.easeInOut}, 's6t5')
				.to($bigCar_s6, .5, {className: '+=bigCarGruz', ease: Power2.easeInOut})
				.to($bigCar_s6, 7, {left: '110%', ease: Power1.easeInOut})
				;
			var bl1_s6Scene = new ScrollMagic.Scene({
				triggerElement: "#sect6",
				triggerHook: 0,
				// offset: '-760',
				duration: 12000
			})
			.setPin('#sect6', {pushFollowers: false})
			// .setClassToggle('#s6wrap', 'active')
			.setTween(bl1_s6Tween)
			.addIndicators({name: "s6Scene"})
			.addTo(controller);


			

			var $kreplWrap_s7 = '#s7wrap .kreplenieWrap';
			var $mainSostav_s7 = '#s7wrap .mainSostav';
			var $krepl2_s7 = '#s7wrap .krepl2';
			var $carCont_s7 = '#s7wrap .carContainer';
			var $hand_s7 = '#s7wrap .hand';
			var $bigCar_s7 = '#s7wrap .bigCar';
			var $cloud_s7 = '#s7wrap .cloudLayer';
			var $mainLay_s7 = '#s7wrap .mainLayer';
			var $treeLay_s7 = '#s7wrap .treeLayer';
			var $bigKruk_s7 = '#s7wrap .bigKruk';

			var bl1_s7Tween = new TimelineMax();
			bl1_s7Tween
				.to('#s7wrap', 2, {transform: 'translate("0, 0")', ease: Power1.easeIn})
				.to('#sect6', .1, {opacity: 0, ease: Power1.easeIn}, 's7t3')
				.to($bigCar_s7, 2, {left: '10%', ease: Power1.easeIn}, 's7t3')
				.to($cloud_s7, 3, {backgroundPosition: '2.5% bottom', ease: Power0.easeIn}, 's7t3')
				.to($mainLay_s7, 3, {backgroundPosition: '5% bottom', ease: Power0.easeIn}, 's7t3')
				.to($treeLay_s7, 3, {backgroundPosition: '7% bottom', ease: Power0.easeIn}, 's7t3')
				

				.to($cloud_s7, 10, {backgroundPosition: '14% bottom', ease: Power0.easeIn}, 's7t2')
				.to($mainLay_s7, 10, {backgroundPosition: '27% bottom', ease: Power0.easeIn}, 's7t2')
				.to($treeLay_s7, 10, {backgroundPosition: '38% bottom', ease: Power0.easeIn}, 's7t2')
				.to('#s7wrap .nadpis9', 5, {opacity: '0', ease: Power1.easeOut}, 's7t2')

				.to($cloud_s7, 6, {backgroundPosition: '21% bottom', ease: Power1.easeOut}, 's7t4')
				.to($mainLay_s7, 6, {backgroundPosition: '39% bottom', ease: Power1.easeOut}, 's7t4')
				.to($treeLay_s7, 6, {backgroundPosition: '54% bottom', ease: Power1.easeOut}, 's7t4')
				.to('#s7wrap .bigCran', 6, {right: $s7cran, ease: Power1.easeOut}, 's7t4')
				.to($mainSostav_s7, 6, {left: '5%', ease: Power1.easeOut}, 's7t4')
				.to($bigCar_s7, 7, {left: $bigCar_s7_perem, ease: Power1.easeInOut}, 's7t4')

				.to($bigKruk_s7, 2, {transform: 'scaleY(1.2)', ease: Power1.easeInOut})
				.to($bigKruk_s7, 1, {transform: 'scaleY(1.2)', ease: Power1.easeInOut})
				.to($bigKruk_s7, 2, {transform: 'scaleY(.83)', ease: Power1.easeInOut}, 's7t5')
				.to($carCont_s7, 2, {bottom: '95%', ease: Power1.easeInOut}, 's7t5')
				.to($bigKruk_s7, 2, {left: '22.3%', ease: Power1.easeInOut}, 's7t6')
				.to($carCont_s7, 2, {left: '27.5%', ease: Power1.easeInOut}, 's7t6')
				.to($bigKruk_s7, 2, {transform: 'scaleY(0.95)', ease: Power1.easeInOut}, 's7t7')
				.to($carCont_s7, 2, {bottom: '72%', ease: Power1.easeInOut}, 's7t7')
				.to($bigKruk_s7, 2, {transform: 'scaleY(0.84)', ease: Power1.easeInOut}, 's7t8')
				.to($bigKruk_s7, 2, {left: '10%', ease: Power1.easeInOut}, 's7t8')
				.to('#s7wrap .sostavContainer', .25, {opacity: '1', ease: Power1.easeInOut})
				.to($carCont_s7, .25, {opacity: '0', ease: Power1.easeInOut})

				.to('#s7wrap .koordList', 2, {left: '40%', ease: Power1.easeInOut}, 's7t9')
				.to($hand_s7, 2, {right: '5%', ease: Power1.easeInOut}, 's7t9')
				.to($hand_s7, 1, {transform: 'translate(-10px, -10px)', ease: Power1.easeInOut})
				.to($hand_s7, 1, {transform: 'translate(-5px, 0px)', ease: Power1.easeInOut})
				.to($hand_s7, 1, {transform: 'translate(5px, -10px)', ease: Power1.easeInOut}, 's7t10')
				.to('#s7wrap .galka1', 1, {opacity: '1', ease: Power1.easeInOut}, 's7t10')
				.to('#s7wrap .nadpis10', 2, {transform: 'translate(0, 0)', ease: Power1.easeInOut}, 's7t10')
				.to('#s7wrap .nadpis10', 1, {transform: 'translate(0, 0)', ease: Power1.easeInOut})

				.to('#s7wrap .koordList', 2, {left: '-100%', ease: Power1.easeInOut}, 's7t11')
				.to($hand_s7, 2, {right: '-100%', ease: Power1.easeInOut}, 's7t11')
				.to('#s7wrap .nadpis10', 1, {left: '-140%', ease: Power1.easeInOut})

				.to($cloud_s7, 22, {backgroundPosition: '25% bottom', ease: Power1.easeInOut, delay: -22})

				.to($cloud_s7, 5, {backgroundPosition: '29% bottom', ease: Power1.easeIn}, 's7t12')
				.to($mainLay_s7, 5, {backgroundPosition: '50% bottom', ease: Power1.easeIn}, 's7t12')
				.to($treeLay_s7, 5, {backgroundPosition: '70% bottom', ease: Power1.easeIn}, 's7t12')
				.to($mainSostav_s7, 5, {left: '-13%', ease: Power1.easeIn}, 's7t12')
				.to('#s7wrap .bigCran', 5, {right: '100%', ease: Power1.easeIn}, 's7t12')
				.to($bigCar_s7, 5, {left: '-28%', ease: Power1.easeIn}, 's7t12')

				.to($cloud_s7, 8, {backgroundPosition: '36% bottom', ease: Power0.easeIn}, 's7t13')
				.to($mainLay_s7, 8, {backgroundPosition: '86% bottom', ease: Power0.easeIn}, 's7t13')
				.to($treeLay_s7, 8, {backgroundPosition: '124% bottom', ease: Power0.easeIn}, 's7t13')
				.to($mainSostav_s7, 8, {left: '-34%', ease: Power1.easeInOut}, 's7t13')

				.to($cloud_s7, 4, {backgroundPosition: '39% bottom', ease: Power1.easeOut}, 's7t14')
				.to($mainLay_s7, 4, {backgroundPosition: '91% bottom', ease: Power1.easeOut}, 's7t14')
				.to($mainSostav_s7, 4, {left: $mainSostavPerem, ease: Power1.easeInOut}, 's7t14')
				.to('#s7wrap .korabl', 4, {left: '66%', ease: Power1.easeOut}, 's7t14')
				.to($kreplWrap_s7, 4, {right: '70%', ease: Power0.easeOut}, 's7t14')
				.to($cloud_s7, .1, {className: '+=animateCloud', ease: Power1.easeOut})

				.to($kreplWrap_s7, 2, {right: $kreplWrapPerem, ease: Power1.easeOut})
				.to($krepl2_s7, 2, {transform: $krepl2_perem, ease: Power1.easeOut})

				.to($krepl2_s7, 2, {transform: $krepl2_perem2, ease: Power1.easeOut}, 's7t15')
				.to('#s7wrap .sostavContainer', 2, {y: '-200%', ease: Power1.easeOut}, 's7t15')

				.to($mainLay_s7, 4, {backgroundPosition: '95% bottom', ease: Power1.easeInOut}, 's7t16')
				.to($mainSostav_s7, 4, {left: '-87%', ease: Power1.easeInOut}, 's7t16')
				.to('#s7wrap .korabl', 4, {left: '35%', ease: Power1.easeInOut}, 's7t16')
				.to($kreplWrap_s7, 4, {right: '32%', ease: Power1.easeInOut}, 's7t16')
				.to('#s7wrap .sostavContainer', 4, {x: $sostavContainerPerem, ease: Power1.easeInOut}, 's7t16')

				.to($krepl2_s7, 3, {transform: 'scaleY(1.12)', ease: Power1.easeOut}, 's7t17')
				.to('#s7wrap .sostavContainer', 3, {y: $sostavContainerPerem2Y, ease: Power1.easeOut}, 's7t17')
				.to($krepl2_s7, 2, {transform: 'scaleY(.66)', ease: Power1.easeOut}, 's7t18')
				.to('#s7wrap .nadpis11', 2, {transform: 'translate(0, 0)', ease: Power1.easeOut}, 's7t18')
				.to('#s7wrap .nadpis11', 1, {transform: 'translate(0, 0)', ease: Power1.easeOut})

				.to('#s7wrap .koordList', 2, {left: '40.5%', top: '27%', ease: Power1.easeInOut}, 's7t19')
				.to($hand_s7, 2, {right: '3%', ease: Power1.easeInOut}, 's7t19')
				.to($hand_s7, 1, {x: '3%', y: '1%', ease: Power1.easeInOut})
				.to($hand_s7, 1, {x: '4%', y: '-1%', ease: Power1.easeInOut}, 's7t20')
				.to('#s7wrap .galka2', 1, {opacity: '1', ease: Power1.easeInOut, delay: -1}, 's7t20')
				.to($hand_s7, 2, {x: '20%', y: '1%', ease: Power1.easeInOut})

				.to($cloud_s7, 22, {backgroundPosition: '43% bottom', delay: -22, ease: Power0.easeOut})
				
				;
			var bl1_s7Scene = new ScrollMagic.Scene({
				triggerElement: "#sect7",
				triggerHook: 0,
				duration: 30000
			})
			.setPin('#sect7', {pushFollowers: false})
			// .setClassToggle('#s7wrap', 'active')
			.setTween(bl1_s7Tween)
			.addIndicators({name: "s7Scene"})
			.addTo(controller);




			var s8Tween = new TimelineMax();
			s8Tween
				.to('#s7wrap', 2, {x: '-100%', ease: Power1.easeIn}, 's8t1')
				.to('#s8wrap', 2, {transform: 'translate("0, 0")', ease: Power1.easeIn}, 's8t1')
				.to('#s8wrap .cloudLayer', 7, {backgroundPosition: '17%', ease: Power0.easeIn}, 's8cloud')
				.to('#s8wrap .korablWrap', 3, {left: '26%', ease: Power1.easeOut, delay: 2}, 's8cloud')

				.to('#s8wrap .cloudLayer', 14, {backgroundPosition: '31%', ease: Power0.easeIn})
				
				.to('#s8wrap .delfinWrap1 .shadow', 1, {opacity: 1, left: '30%', width: '40%', delay: '-15', ease: Power0.easeInOut})
				.to('#s8wrap .delfinWrap1 .shadow', 1, {opacity: 0, left: '110%', width: '0%', delay: '-14', ease: Power0.easeInOut})
				.to('#s8wrap .delfinWrap1 .delfin', 2, {transform: 'rotate(120deg)', delay: '-15', ease: Power1.easeInOut})
				
				.to('#s8wrap .delfinWrap2 .shadow', 1, {opacity: 1, left: '30%', width: '40%', delay: '-14.5', ease: Power0.easeInOut})
				.to('#s8wrap .delfinWrap2 .shadow', 1, {opacity: 0, left: '110%', width: '0%', delay: '-13.5', ease: Power0.easeInOut})
				.to('#s8wrap .delfinWrap2 .delfin', 2, {transform: 'rotate(120deg)', delay: '-14.5', ease: Power1.easeInOut})

				.to('#s8wrap .delfinWrap3 .shadow', 1, {opacity: 1, left: '30%', width: '40%', delay: '-13', ease: Power0.easeInOut})
				.to('#s8wrap .delfinWrap3 .shadow', 1, {opacity: 0, left: '110%', width: '0%', delay: '-12', ease: Power0.easeInOut})
				.to('#s8wrap .delfinWrap3 .delfin', 2, {transform: 'rotate(120deg)', delay: '-13', ease: Power1.easeInOut})
				
				.to('#s8wrap .delfinWrap4 .shadow', 1, {opacity: 1, left: '30%', width: '40%', delay: '-8', ease: Power0.easeInOut})
				.to('#s8wrap .delfinWrap4 .shadow', 1, {opacity: 0, left: '110%', width: '0%', delay: '-7', ease: Power0.easeInOut})
				.to('#s8wrap .delfinWrap4 .delfin', 2, {transform: 'rotate(120deg)', delay: '-8', ease: Power1.easeInOut})
				
				.to('#s8wrap .delfinWrap5 .shadow', 1, {opacity: 1, left: '30%', width: '40%', delay: '-7', ease: Power0.easeInOut})
				.to('#s8wrap .delfinWrap5 .shadow', 1, {opacity: 0, left: '110%', width: '0%', delay: '-6', ease: Power0.easeInOut})
				.to('#s8wrap .delfinWrap5 .delfin', 2, {transform: 'rotate(120deg)', delay: '-7', ease: Power1.easeInOut})

				.to('#s8wrap .delfinWrap6 .shadow', 1, {opacity: 1, left: '30%', width: '40%', delay: '-6.5', ease: Power0.easeInOut})
				.to('#s8wrap .delfinWrap6 .shadow', 1, {opacity: 0, left: '110%', width: '0%', delay: '-5.5', ease: Power0.easeInOut})
				.to('#s8wrap .delfinWrap6 .delfin', 2, {transform: 'rotate(120deg)', delay: '-6.5', ease: Power1.easeInOut})

				.to('#s8wrap .korablWrap', 4, {left: '-50%', transform: 'scale(.85)', ease: Power1.easeIn, delay: -2.5}, 's8t2')
				.to('#s8wrap .cloudLayer', 6, {backgroundPosition: '45%', ease: Power0.easeIn}, 's8t2')
				
				.to('#s8wrap .delfinWrap7 .shadow', 1, {opacity: 1, left: '30%', width: '40%', delay: '-4', ease: Power0.easeInOut})
				.to('#s8wrap .delfinWrap7 .shadow', 1, {opacity: 0, left: '110%', width: '0%', delay: '-3', ease: Power0.easeInOut})
				.to('#s8wrap .delfinWrap7 .delfin', 2, {transform: 'rotate(120deg)', delay: '-4', ease: Power1.easeInOut})

				.to('#s8wrap .delfinWrap8 .shadow', 1, {opacity: 1, left: '30%', width: '40%', delay: '-3.5', ease: Power0.easeInOut})
				.to('#s8wrap .delfinWrap8 .shadow', 1, {opacity: 0, left: '110%', width: '0%', delay: '-2.5', ease: Power0.easeInOut})
				.to('#s8wrap .delfinWrap8 .delfin', 2, {transform: 'rotate(120deg)', delay: '-3.5', ease: Power1.easeInOut})

				.to('#s8wrap .delfinWrap9 .shadow', 1, {opacity: 1, left: '30%', width: '40%', delay: '-3', ease: Power0.easeInOut})
				.to('#s8wrap .delfinWrap9 .shadow', 1, {opacity: 0, left: '110%', width: '0%', delay: '-2', ease: Power0.easeInOut})
				.to('#s8wrap .delfinWrap9 .delfin', 2, {transform: 'rotate(120deg)', delay: '-3', ease: Power1.easeInOut})
				;
			var s8Scene = new ScrollMagic.Scene({
				triggerElement: "#sect8",
				triggerHook: 0,
				duration: 9000
			})
			.setPin('#sect8', {pushFollowers: false})
			// .setClassToggle('#s7wrap', 'active')
			.setTween(s8Tween)
			.addIndicators({name: "s8Scene"})
			.addTo(controller);





			var $cloud_s9 = '#s9wrap .cloudLayer';
			var $korablWrap_s9 = '#s9wrap .korablWrap';
			var $mainLay_s9 = '#s9wrap .mainLayer';
			var $treeLay_s9 = '#s9wrap .treeLayer';
			var $kreplWrap_s9 = '#s9wrap .kreplenieWrap';
			var $mainSostav_s9 = '#s9wrap .mainSostav';
			var $krepl2_s9 = '#s9wrap .krepl2';
			var $korablCont_s9 = '#s9wrap .korablContainer';
			var $hand_s9 = '#s9wrap .hand';
			var $bigKruk_s9 = '#s9wrap .bigKruk';
			var $carCont_s9 = '#s9wrap .carContainer';
			var $bigCar_s9 = '#s9wrap .bigCar';

			var s9Tween = new TimelineMax();
			s9Tween
				.to('#s8wrap', 7, {x: '-100%', ease: Power0.easeOut}, 's9t1')
				.to('#s9wrap', 7, {x: '0%', ease: Power0.easeOut}, 's9t1')
				.to($cloud_s9, 8, {backgroundPosition: '21%', ease: Power0.easeOut}, 's9cloud')
				.to($korablWrap_s9, 7, {left: '0%', scale: 1.1, y: '12%', ease: Power1.easeOut, delay: 1}, 's9cloud')
				.to($mainLay_s9, 8, {backgroundPosition: $mainLay_perem, ease: Power1.easeOut}, 's9cloud')
				.to($kreplWrap_s9, 8, {right: '65%', ease: Power1.easeOut}, 's9cloud')
				.to($mainSostav_s9, 9, {left: '55%', ease: Power1.easeOut, delay: -1}, 's9cloud')

				.to($krepl2_s9, 2, {transform: 'scaleY(1.83)', ease: Power1.easeOut})
				.to($krepl2_s9, 1, {transform: 'scaleY(1.83)', ease: Power1.easeOut})

				.to($krepl2_s9, 2, {transform: 'scaleY(0.75)', ease: Power1.easeOut}, 's9t2')
				.to($korablCont_s9, 2, {y: $korablCont_s9perem, ease: Power1.easeOut}, 's9t2')

				.to($kreplWrap_s9, 4, {x: '330%', ease: Power1.easeInOut}, 's9t3')
				.to($korablCont_s9, 4, {x: $korablContPerem, ease: Power1.easeInOut}, 's9t3')

				.to($krepl2_s9, 3, {transform: 'scaleY(1.86)', ease: Power1.easeInOut}, 's9t4')
				.to($korablCont_s9, 3, {y: '9%', ease: Power1.easeInOut}, 's9t4')

				.to($krepl2_s9, 2, {transform: 'scaleY(1.2)', ease: Power1.easeInOut})
				.to('#s9wrap .text12', 2, {left: '3%', ease: Power1.easeInOut})
				.to('#s9wrap .text12', 3, {left: '3%', ease: Power1.easeInOut})

				.to('#s9wrap .koordList', 2, {left: '36.8%', ease: Power1.easeInOut}, 's9t99')
				.to('#s9wrap .hand2', 2, {right: '0%', ease: Power1.easeInOut}, 's9t99')
				.to('#s9wrap .hand2', 1, {transform: 'translate(-10px, -10px)', ease: Power1.easeInOut})
				.to('#s9wrap .hand2', 1, {transform: 'translate(-5px, 0px)', ease: Power1.easeInOut})
				.to('#s9wrap .hand2', 1, {transform: 'translate(5px, -10px)', ease: Power1.easeInOut}, 's9t98')
				.to('#s9wrap .galka3', 1, {opacity: 1, ease: Power1.easeInOut}, 's9t98')
				.to('#s9wrap .koordList', 2, {left: '-90%', ease: Power1.easeInOut}, 's9t97')
				.to('#s9wrap .hand2', 2, {right: '-90%', ease: Power1.easeInOut}, 's9t97')

				.to('#s9wrap .listTamojn', 3, {left: '35%', ease: Power1.easeInOut}, 's9t5')
				.to($hand_s9, 3, {right: '-5%', ease: Power1.easeInOut}, 's9t5')

				.to($hand_s9, 3, {y: '4%', x: '-2%', ease: Power1.easeInOut}, 's9t6')
				.to('#s9wrap .listTamojn2', 1, {opacity: 1, ease: Power1.easeInOut, delay: 2}, 's9t6')
				.to('#s9wrap .sostavContainer', 1, {opacity: 1, ease: Power1.easeInOut})
				.to($korablCont_s9, 1, {opacity: 0, ease: Power1.easeInOut})
				.to($hand_s9, 1, {y: '-4%', x: '2%', ease: Power1.easeInOut})
				.to($hand_s9, 3, {y: '-7%', x: '20%', ease: Power1.easeInOut})

				.to('#s9wrap .listTamojn', 3, {left: '-50%', ease: Power1.easeInOut}, 's9t7')
				.to($hand_s9, 3, {right: '-50%', ease: Power1.easeInOut}, 's9t7')
				.to('#s9wrap .text12', 2, {left: '-100%', ease: Power1.easeInOut, delay: -1}, 's9t7')

				.to($cloud_s9, 37, {backgroundPosition: '29%', ease: Power1.easeOut, delay: '-41'})

				.to($treeLay_s9, 6, {backgroundPosition: '-20%', ease: Power1.easeOut}, 's9t8')
				.to($mainLay_s9, 6, {backgroundPosition: '17%', ease: Power1.easeIn}, 's9t8')
				.to($cloud_s9, 6, {backgroundPosition: '35%', ease: Power1.easeIn}, 's9t8')
				.to($korablWrap_s9, 6, {left: '-79%', ease: Power1.easeIn}, 's9t8')
				.to($kreplWrap_s9, 6, {right: '143%', ease: Power1.easeIn}, 's9t8')
				.to($mainSostav_s9, 6, {left: '2%', ease: Power1.easeIn}, 's9t8')
				.to('#s9wrap .text13', 6, {right: '5%', ease: Power1.easeIn}, 's9t8')

				.to($treeLay_s9, 6, {backgroundPosition: '0%', ease: Power0.easeIn}, 's9t9')
				.to($mainLay_s9, 6, {backgroundPosition: '33%', ease: Power0.easeIn}, 's9t9')
				.to($cloud_s9, 6, {backgroundPosition: '40%', ease: Power0.easeIn}, 's9t9')
				.to('#s9wrap .text13', 6, {right: '105%', ease: Power0.easeIn}, 's9t9')

				.to($treeLay_s9, 15, {backgroundPosition: '29%', ease: Power0.easeOut}, 's9t10')
				.to($mainLay_s9, 15, {backgroundPosition: '53%', ease: Power0.easeOut}, 's9t10')
				.to($cloud_s9, 15, {backgroundPosition: '46%', ease: Power0.easeOut}, 's9t10')

				.to($mainSostav_s9, 15, {left: '12%', ease: Power1.easeInOut}, 's9t11')
				.to($treeLay_s9, 15, {backgroundPosition: '53%', ease: Power1.easeOut}, 's9t11')
				.to($mainLay_s9, 15, {backgroundPosition: '70%', ease: Power1.easeOut}, 's9t11')
				.to($cloud_s9, 15, {backgroundPosition: '51%', ease: Power0.easeOut}, 's9t11')
				.to('#s9wrap .bigCran', 15, {left: '3%', ease: Power1.easeOut}, 's9t11')
				.to($bigCar_s9, 15, {left: '19.2%', ease: Power1.easeOut}, 's9t11')

				.to($carCont_s9, .1, {opacity: 1, ease: Power1.easeInOut})
				.to('#s9wrap .sostavContainer', .1, {opacity: 0, ease: Power1.easeInOut})
				.to($bigKruk_s9, 3, {left: '57%', scaleY: 1.1, ease: Power1.easeInOut})
				.to($bigKruk_s9, 3, {left: '57%', scaleY: 1, ease: Power1.easeInOut}, 's9t12')
				.to($carCont_s9, 3, {y: '-25%', ease: Power1.easeInOut}, 's9t12')
				.to($carCont_s9, 3, {x: $carCont_s9perem, ease: Power1.easeInOut}, 's9t13')
				.to($bigKruk_s9, 3, {left: '76%', ease: Power1.easeInOut}, 's9t13')
				.to($carCont_s9, 3, {y: $carCont_s9perem2, scale: 1, ease: Power1.easeInOut}, 's9t14')
				.to($bigKruk_s9, 3, {scaleY: 1.3, ease: Power1.easeInOut}, 's9t14')
				.to($bigKruk_s9, 3, {scaleY: 1, ease: Power1.easeInOut}, 's9t15')
				.to('#s9wrap .text14', 3, {right: '10%', ease: Power1.easeInOut}, 's9t15')

				.to($cloud_s9, 15, {backgroundPosition: '52%', ease: Power0.easeOut, delay: -15})
				.to($mainSostav_s9, 9, {left: $mainSostav_s9_perem, ease: Power1.easeInOut, delay: -9})

				.to($treeLay_s9, 15, {backgroundPosition: '74%', ease: Power1.easeIn}, 's9t16')
				.to($mainLay_s9, 15, {backgroundPosition: '87%', ease: Power1.easeIn}, 's9t16')
				.to($cloud_s9, 15, {backgroundPosition: '60%', ease: Power1.easeIn}, 's9t16')
				.to('#s9wrap .bigCran', 15, {left: '-100%', ease: Power1.easeIn}, 's9t16')
				.to($bigCar_s9, 15, {left: '30%', ease: Power1.easeIn}, 's9t16')
				.to($mainSostav_s9, 15, {left: $mainSostav_s9_perem2, ease: Power1.easeIn}, 's9t16')
				.to('#s9wrap .text14', 15, {right: '120%', ease: Power1.easeIn}, 's9t16')

				.to($treeLay_s9, 15, {backgroundPosition: '95%', ease: Power1.easeOut}, 's9t17')
				.to($mainLay_s9, 15, {backgroundPosition: '100%', ease: Power1.easeOut}, 's9t17')
				.to($cloud_s9, 15, {backgroundPosition: '67%', ease: Power1.easeOut}, 's9t17')

				.to($bigCar_s9, 15, {left: '120%', ease: Power1.easeInOut, delay: -15})
				.to('#s9wrap', 2, {opacity: 0.7, ease: Power0.easeOut, delay: -2})

				;
			var s9Scene = new ScrollMagic.Scene({
				triggerElement: "#sect9",
				triggerHook: 0,
				duration: 19000
			})
			.setPin('#sect9', {pushFollowers: false})
			// .setClassToggle('#s7wrap', 'active')
			.setTween(s9Tween)
			.addIndicators({name: "s9Scene"})
			.addTo(controller);





			var s10Tween = new TimelineMax();
			s10Tween
				.to('#s9wrap', 2, {opacity: 0, ease: Power0.easeOut}, 's10t1')
				.to('#s10wrap', 2, {opacity: 1, ease: Power0.easeOut}, 's10t1')

				.to('#s10wrap .city_wrap', 4, {backgroundSize: '155%', ease: Power1.easeInOut})
				.to('#s10wrap .bigCar', 4, {left: '23%', ease: Power1.easeInOut})

				.to('#s10wrap .koordList', 2, {left: '36.5%', ease: Power1.easeOut}, 's10t2')
				.to('#s10wrap .hand', 2, {right: '-7%', ease: Power1.easeOut}, 's10t2')
				.to('#s10wrap .hand', 1, {x: '-3%', ease: Power1.easeOut})
				.to('#s10wrap .hand', 1, {y: '1%', x: '-1.5%', ease: Power1.easeOut}, 's10t3')
				.to('#s10wrap .galka4', 1, {opacity: 1, ease: Power1.easeOut}, 's10t3')
				.to('#s10wrap .hand', 1, {y: '0%', x: '0%', ease: Power1.easeInOut})
				.to('#s10wrap .hand', 1, {x: '5%', y: '5%', ease: Power1.easeInOut})

				.to('#s10wrap .koordList', 2, {left: '-60%', ease: Power1.easeIn}, 's10t4')
				.to('#s10wrap .hand', 2, {right: '-60%', ease: Power1.easeIn}, 's10t4')
				.to('#s10wrap .man1', 1, {opacity: 1, ease: Power1.easeInOut}, 's10t5')
				.to('#s10wrap .man2', 1, {opacity: 1, ease: Power1.easeInOut}, 's10t5')
				.to('#s10wrap .gruzMain', 1, {opacity: 1, ease: Power1.easeInOut}, 's10t5')
				.to('#s10wrap .bigCar', 1, {className: '-=vashGruz', ease: Power1.easeInOut}, 's10t5')

				.to('#s10wrap .city_wrap', 5, {scale: '2.5', ease: Power1.easeInOut}, 's10t6')
				.to('#s10wrap .man3', 2, {opacity: 1, ease: Power1.easeInOut}, 's10t7')
				.to('#s10wrap .man2', 2, {opacity: 0, ease: Power1.easeInOut}, 's10t7')
				.to('#s10wrap .man1', 2, {opacity: 0, ease: Power1.easeInOut}, 's10t7')
				.to('#s10wrap .bigCar', 2, {x: '50%', ease: Power1.easeIn})
				.to('#s10wrap .bigCar', 4, {x: '210%', ease: Power1.easeOut})
				.to('#s10wrap .oblako', 2, {opacity: 1, ease: Power1.easeInOut, delay: 2})
				.to('#s10wrap .oblako', 4, {opacity: 1, ease: Power1.easeInOut})
				.to('#s10wrap .bigBg1', 3, {opacity: 1, ease: Power1.easeInOut})
				.to('#s10wrap .bigBg1', 6, {opacity: 1, ease: Power1.easeInOut})
				.to('#s10wrap .bigBg2', 1, {opacity: 1, ease: Power1.easeInOut})
				.to('#s10wrap .oblako-btn', 1, {display: 'block', ease: Power1.easeInOut})
				.to('#s10wrap .bigBg2', 6, {opacity: 1, ease: Power1.easeInOut})

				;
			var s10Scene = new ScrollMagic.Scene({
				triggerElement: "#sect10",
				triggerHook: 0,
				duration: 10000
			})
			.setPin('#sect10', {pushFollowers: false})
			// .setClassToggle('#s7wrap', 'active')
			.setTween(s10Tween)
			.addIndicators({name: "s10Scene"})
			.addTo(controller);





			// bl1_s2Scene.on('leave', function() {
			// 	$('.sect2').css({'opacity':'0'});
			// }).on('enter', function() {
			// 	$('.sect2').css({'opacity':'1'});
			// });

		 
			// build scene
			// var scene3 = new ScrollMagic.Scene({
			// 	triggerElement: "#trigger1",
			// 	duration: 300
			// })
			// .setTween("#animate1", 0.5, {backgroundColor: "green", scale: 2.5})
			// .addIndicators({name: "1 (duration: 0)"})
			// .addTo(controller);



			$('.btn-zayavka').click(function(e) {
				e.preventDefault();
				$('#callback-modal').arcticmodal();
			});

			//исправление бага ArcticModal в Firefox
			$('.arcticmodal-close').click(function() {
				$('body').css({'overflow-y': 'scroll'});
			});
			$("body").click(function(){$(this).css('overflow-y','visible')});

			//AJAX email send
			$('form').submit(function(event) {
				event.preventDefault();

				var data = $(this).serialize();

				$.ajax({
					url				: '/emailOrder.php',
					data			: data,
					type			: 'post',
					success		: function() {
						$('input, textarea').val('');
						$.arcticmodal('close');
						$('#modal_thank').arcticmodal();
					},
					error			: function(){
						$.arcticmodal('close');
						alert('Ошибка! Что-то пошло не так...');
					}
				});
			});


//==========EoF==============
});
});