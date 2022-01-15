jQuery(document).ready(function($) {

    'use strict';


        $(".Modern-Slider").slick({
            autoplay:true,
            speed:1000,
            slidesToShow:1,
            slidesToScroll:1,
            pauseOnHover:false,
            dots:true,
            fade: true,
            pauseOnDotsHover:true,
            cssEase:'linear',
           // fade:true,
            draggable:false,
            prevArrow:'<button class="PrevArrow"></button>',
            nextArrow:'<button class="NextArrow"></button>', 
          });

        $('#nav-toggle').on('click', function (event) {
            event.preventDefault();
            $('#main-nav').toggleClass("open");
        });


        $('.tabgroup > div').hide();
            $('.tabgroup > div:first-of-type').show();
            $('.tabs a').click(function(e){
              e.preventDefault();
                var $this = $(this),
                tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
                others = $this.closest('li').siblings().children('a'),
                target = $this.attr('href');
            others.removeClass('active');
            $this.addClass('active');
            $(tabgroup).children('div').hide();
            $(target).show();
          
        })



        $(".box-video").click(function(){
          $('iframe',this)[0].src += "&amp;autoplay=1";
          $(this).addClass('open');
        });

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:false
                }
            }
        })



        var contentSection = $('.content-section, .main-banner');
        var navigation = $('nav');
        
        //when a nav link is clicked, smooth scroll to the section
        navigation.on('click', 'a', function(event){
            event.preventDefault(); //prevents previous event
            smoothScroll($(this.hash));
        });
        
        //update navigation on scroll...
        $(window).on('scroll', function(){
            updateNavigation();
        })
        //...and when the page starts
        updateNavigation();
        
        /////FUNCTIONS
        function updateNavigation(){
            contentSection.each(function(){
                var sectionName = $(this).attr('id');
                var navigationMatch = $('nav a[href="#' + sectionName + '"]');
                if( ($(this).offset().top - $(window).height()/2 < $(window).scrollTop()) &&
                      ($(this).offset().top + $(this).height() - $(window).height()/2 > $(window).scrollTop()))
                    {
                        navigationMatch.addClass('active-section');
                    }
                else {
                    navigationMatch.removeClass('active-section');
                }
            });
        }
        function smoothScroll(target){
            $('body,html').animate({
                scrollTop: target.offset().top
            }, 800);
        }


        $('.button a[href*=#]').on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top -0 }, 500, 'linear');
        });


});

let mypic1 = ["main-pics/pic2.jpeg","main-pics/pic5.jpeg","main-pics/pic6.jpeg","main-pics/pic7.jpeg","main-pics/pic8.jpeg","main-pics/pic9.jpeg"];
let mypic2 = ["main-pics/pic10.jpeg","main-pics/pic11.jpeg","main-pics/pic12.jpeg","main-pics/pic13.jpeg","main-pics/pic14.jpeg","main-pics/pic15.jpeg","main-pics/pic16.jpeg","main-pics/pic17.jpeg","main-pics/pic18.jpeg"];
let mypic3 = ["main-pics/pic19.jpeg","main-pics/pic20.jpeg","main-pics/pic21.jpeg","main-pics/pic22.jpeg","main-pics/pic23.jpeg","main-pics/pic24.jpeg","main-pics/pic25.jpeg","main-pics/pic27.jpeg"];
let mypic4 = ["main-pics/pic28.jpeg","main-pics/pic29.jpeg","main-pics/pic30.jpeg","main-pics/pic31.jpeg","main-pics/pic35.jpeg"];

const getRandom = (number) => {
    const r = Math.floor(Math.random() * number);
    return r;
}

const Picture1 =document.getElementById("picture1");
const Picture2 =document.getElementById("picture2");
const Picture3 =document.getElementById("picture3");
const Picture4 =document.getElementById("picture4");

Picture1.src = mypic1[getRandom(mypic1.length)];
Picture2.src = mypic2[getRandom(mypic2.length)];
Picture3.src = mypic3[getRandom(mypic3.length)];
Picture4.src = mypic4[getRandom(mypic4.length)];
console.log("done");