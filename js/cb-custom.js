$(window).scroll(function(){var scroll=$(window).scrollTop();if(scroll>=100){$(".cb-nav").addClass("isScrolled")}else{$(".cb-nav").removeClass("isScrolled")}});$(function(){wow=new WOW({boxClass:'wow',animateClass:'animated',offset:100,mobile:!1,live:!0})
wow.init()});$('.titl').textillate({loop:!0,in:{effect:'fadeInUp',delayScale:1,delay:150,shuffle:!0},out:{effect:'fadeOutDown',shuffle:!0}});$(function(){$('.cb-wel-text').textillate({loop:!0,autoStart:!0,initialDelay:0,minDisplayTime:-50,in:{effect:"flipInY",delayScale:2.5,delay:70,sync:!1,shuffle:!1,reverse:!1},out:{effect:"flipOutY",delayScale:2.5,delay:70,sync:!1,shuffle:!1,reverse:!1}})});$(function(){$('#cbt-clients').owlCarousel({autoplay:!0,autoplayHoverPause:!0,loop:!0,margin:10,smartSpeed:1200,responsiveClass:!0,responsive:{0:{items:2},600:{items:3},768:{items:4},1000:{items:5},1200:{items:6}}})});$(function(){$('.counter').counterUp({delay:10,time:2500})});$(".ngs-qr-icon").click(function(){$(".ngs-qr-wrap").toggleClass("active")});$(function(){$(window).on('scroll',function(){if($(window).scrollTop()>50){$('#back-to-top').addClass('animated fadeInLeft')}else{$('#back-to-top').removeClass('animated fadeInLeft')}})});$('#back-to-top').click(function(){$('body,html').animate({scrollTop:0},1500,'easeInExpo');return!1});$(document).on('load scroll',stickyFooter);$(window).on('resize',stickyFooter);function stickyFooter(){var $footer=$("#footer");var $stickyFooter=$("#qr");var footerOffsetTop=$footer.offset().top;var viewportHeight=$(window).height();var scrollPosition=$(this).scrollTop()+viewportHeight-$stickyFooter.outerHeight();if(scrollPosition>=footerOffsetTop){$stickyFooter.hide()}else{$stickyFooter.show()}}
function initMap(){var hyd={info:'<strong>CALIBER IT SOLUTIONS</strong><br>\
                    HiTech City, Madhapur,<br> Hyderabad, 500081.',lat:17.426098,long:78.540452,};var usa={info:'<strong>CALIBER IT SOLUTIONS</strong><br>\
                    3020-I Prosperity Church Rd, Suite #503, <br> Charlotte, NC 28269.</a>',lat:35.501523,long:-80.771310};var locations=[[hyd.info,hyd.lat,hyd.long,0],[usa.info,usa.lat,usa.long,1]];var map=new google.maps.Map(document.getElementById('map'),{zoom:2,scrollwheel:!1,center:new google.maps.LatLng(20.921737,-19.501565),styles:[{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}],mapTypeId:google.maps.MapTypeId.ROADMAP});var infowindow=new google.maps.InfoWindow({});var marker,i;for(i=0;i<locations.length;i++){marker=new google.maps.Marker({position:new google.maps.LatLng(locations[i][1],locations[i][2]),map:map,icon:'images/map-pin.png',animation:google.maps.Animation.DROP,});google.maps.event.addListener(marker,'',toggleBounce);google.maps.event.addListener(marker,'click',(function(marker,i){return function(){infowindow.setContent(locations[i][0]);infowindow.open(map,marker)}})(marker,i))}
function toggleBounce(){if(marker.getAnimation()!=null){marker.setAnimation(null)}else{marker.setAnimation(google.maps.Animation.BOUNCE)}}}
particlesJS("particles-js",{particles:{"number":{"value":70,"density":{"enable":!0,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"images/bgs/particle-bg.jpg","width":100,"height":100}},"opacity":{"value":0.9,"random":!1,"anim":{"enable":!1,"speed":1,"opacity_min":0.1,"sync":!1}},"size":{"value":2.5,"random":!1,"anim":{"enable":!1,"speed":40,"size_min":0.1,"sync":!1}},"line_linked":{"enable":!0,"distance":150,"color":"#ffffff","opacity":0.7,"width":1},"move":{"enable":!0,"speed":6,"direction":"none","random":!1,"straight":!1,"out_mode":"out","bounce":!1,"attract":{"enable":!1,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":!0,"mode":"grab"},"onclick":{"enable":!0,"mode":"push"},"resize":!0},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"transparent",background_image:"images/bgs/particle-bg.jpg",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}})