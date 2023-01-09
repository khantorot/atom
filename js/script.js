window.onload = function() {
  setTimeout(function() {
    document.querySelector('.preloader').classList.add('preloader_hide');
    menu_btn.classList.add('menu-btn_show');
    document.querySelector('nav').classList.add('nav_active');

    setTimeout(headerShow, 1000);
      function headerShow() {
        header.classList.add('header_show');
        setTimeout(headShow, 4000);
      function headShow() {
        header.classList.add('headShow');
      }
      setTimeout(headhidden, 8000);
        function headhidden() {
          header.classList.remove('headShow');
          headerShow();
        }
      }
  }, 1111);
}


var menu_btn = document.querySelector('.menu-btn');
var header = document.querySelector('header');
var menu = document.querySelector('.menu');
var wrapper = document.querySelector('.wrapper');

menu_btn.onclick=function() {
	this.classList.toggle('menu-btn_active');
	menu.classList.toggle('menu_active');
	wrapper.classList.toggle('blure_effect');
	head.classList.toggle('head_hidden');
}
var menuElem = document.querySelectorAll('.menu a');
for(var i=0; i<menuElem.length; i++){
  menuElem[i].onclick = closeMenu;
}
wrapper.onclick = closeMenu;
header.onclick = closeMenu;

function closeMenu() {
  menu.classList.remove('menu_active');
  wrapper.classList.remove('blure_effect');
  head.classList.remove('head_hidden');
  menu_btn.classList.remove('menu-btn_active');
}




var team = document.querySelectorAll('.team div');
var workimg = document.querySelectorAll('.work .boximg');
var worktext = document.querySelectorAll('.worktext');
var h = document.querySelectorAll('.content h1');
var footElem = document.querySelectorAll('footer h4');
var footLink = document.querySelectorAll('footer a');

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if(document.documentElement.clientWidth <= 730){
    if(scrolled >= 200){
      document.querySelector('.abouttext').classList.add('abouttext_show');
    }
    if(scrolled >= 450){
      document.querySelector('.info_btn').classList.add('info_btn_show');
    }
    if(scrolled >= 850){
      document.querySelector('.video_btn').classList.add('video_btn_show');
    }
    if(scrolled >= 1000){
      document.querySelector('.eventtext').classList.add('eventtext_show');
    }
    if(scrolled >= 1350){
      document.querySelector('.location').classList.add('location_show');
    }
    if(scrolled >= 1600){
      document.querySelector('.applytext').classList.add('applytext_show');
    }
    if(scrolled >= 1850){
      document.querySelector('.apply_btn').classList.add('apply_btn_show');
    }
    if(scrolled >= 2000){
      document.querySelector('.gallery_btn').classList.add('gallery_btn_show');
    }
    if(scrolled >= 2200){
      footElem[0].classList.add('footElem_show');
      footLink[0].classList.add('footElem_show');
    }
    if(scrolled >= 2400){
      footElem[1].classList.add('footElem_show');
      footLink[1].classList.add('footElem_show');
    }
    if(scrolled >= 2600){
      footElem[2].classList.add('footElem_show');
      footLink[2].classList.add('footElem_show');
    }
  }else{
    if(scrolled >= 500){
    document.querySelector('.content').classList.add('content_show');
    }
    if(scrolled >= 600){
      document.querySelector('.abouttext').classList.add('abouttext_show');
    }
    if(scrolled >= 900){
      document.querySelector('.info_btn').classList.add('info_btn_show');
    }
    if(scrolled >= 1100){
      h[0].innerHTML = '&#60watch';
      h[1].innerHTML = 'our';
      h[2].innerHTML = 'video&#8260&#62';
      document.querySelector('.video_btn').classList.add('video_btn_show');
    }
    if(scrolled <= 1100){
      h[0].innerHTML = '&#60About';
      h[1].innerHTML = 'our';
      h[2].innerHTML = 'family &#8260&#62';
    }
    if(scrolled >= 1550){
      document.querySelector('.eventtext').classList.add('eventtext_show');
      h[0].innerHTML = '&#60Be a';
      h[1].innerHTML = 'part';
      h[2].innerHTML = 'of it &#8260&#62';
    }
    if(scrolled >= 1900){
      document.querySelector('.location').classList.add('location_show');
    }
    if(scrolled >= 2300){
      document.querySelector('.applytext').classList.add('applytext_show');
      h[0].innerHTML = '&#60Join';
      h[1].innerHTML = 'our';
      h[2].innerHTML = 'mission&#8260&#62';
    }
    if(scrolled >= 2550){
      document.querySelector('.apply_btn').classList.add('apply_btn_show');
    }
    if(scrolled >= 2800){
      document.querySelector('.gallery_btn').classList.add('gallery_btn_show');
      h[0].innerHTML = '&#60what';
      h[1].innerHTML = 'happened';
      h[2].innerHTML = 'so far?!&#8260&#62';
    }
    if(scrolled >= 3200){
      footElem[0].classList.add('footElem_show');
      footLink[0].classList.add('footElem_show');
      h[0].innerHTML = '&#60Get to';
      h[1].innerHTML = 'know';
      h[2].innerHTML = 'more!&#8260&#62';
    }
    if(scrolled >= 3400){
      footElem[1].classList.add('footElem_show');
      footLink[1].classList.add('footElem_show');
    }
    if(scrolled >= 3600){
      footElem[2].classList.add('footElem_show');
      footLink[2].classList.add('footElem_show');
    }
  }
}


var pointer = document.querySelector('.pointer');
var head = document.querySelector('.head');
var body = document.querySelector('body');

head.onmousemove = function pointerEf(e) {
	pointer.style.opacity = 1;
	pointer.style.left = e.pageX + 'px';
	pointer.style.top = e.pageY + 'px';
}
head.onmouseleave = function() {
	pointer.style.opacity = 0;
}


document.querySelector('.video_btn').onclick = function() {
  document.querySelector('.video').classList.add('video_active');
  document.querySelector('video').play();
  body.classList.add('body_scroll');
}
document.querySelector('.close_video').onclick = function() {
  document.querySelector('.video').classList.remove('video_active');
  body.classList.remove('body_scroll');
  document.querySelector('video').pause();
}


document.querySelector('.info_btn').onclick = function() {
  document.querySelector('.moreinfo').classList.toggle('moreinfo_active');
  body.classList.toggle('body_scroll');
}
document.querySelector('.moreinfo_btn').onclick = function() {
  document.querySelector('.moreinfo').classList.remove('moreinfo_active');
  body.classList.remove('body_scroll');
}

document.querySelector('.apply_btn').onclick = function() {
  document.querySelector('.applyinfo').classList.toggle('applyinfo_active');
  body.classList.toggle('body_scroll');
}
document.querySelector('.applyinfo_btn').onclick = function() {
  document.querySelector('.applyinfo').classList.remove('applyinfo_active');
  body.classList.remove('body_scroll');
}

document.querySelector('.gallery_btn').onclick = function() {
  document.querySelector('.gallery').classList.add('gallery_show');
  body.classList.add('body_scroll');
}
document.querySelector('.gallery_close').onclick = function() {
  document.querySelector('.gallery').classList.remove('gallery_show');
  body.classList.remove('body_scroll');
}

document.querySelector('.white').onclick = function() {
  body.classList.add('white_active');
}
document.querySelector('.black').onclick = function() {
  body.classList.remove('white_active');
}


var menuPrg = document.querySelectorAll('.menu p');

menuElem[0].onmouseover=function(){
  menuPrg[0].classList.add('menu_p_active');
}
menuElem[1].onmouseover=function(){
  menuPrg[1].classList.add('menu_p_active');
}
menuElem[2].onmouseover=function(){
  menuPrg[2].classList.add('menu_p_active');
}
menuElem[3].onmouseover=function(){
  menuPrg[3].classList.add('menu_p_active');
} 

menuElem[0].onmouseleave=function(){
  menuPrg[0].classList.remove('menu_p_active');
}
menuElem[1].onmouseleave=function(){
  menuPrg[1].classList.remove('menu_p_active');
}
menuElem[2].onmouseleave=function(){
  menuPrg[2].classList.remove('menu_p_active');
}
menuElem[3].onmouseleave=function(){
  menuPrg[3].classList.remove('menu_p_active');
}
