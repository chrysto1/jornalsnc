(function ($)
  { "use strict"
  
/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });


/* 2. slick Nav */
// mobile_menu
    var menu = $('ul#navigation');
    if(menu.length){
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol:'-'
      });
    };

// Weekly-2 Acticve
    $('.weekly-news-active').slick({
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        initialSlide: 3,
        loop:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

    // Weekly-2 Acticve
    $('.weekly2-news-active').slick({
        dots: true,
        infinite: true,
        speed: 600,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        initialSlide: 3,
        loop:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

    // recent-active
    $('.recent-active').slick({
        dots: true,
        infinite: true,
        speed: 600,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"> <span class="flaticon-arrow"></span></button>',
        nextArrow: '<button type="button" class="slick-next"> <span class="flaticon-arrow"><span></button>',
        autoplay:true,
        initialSlide: 3,
        loop:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

/* 5. Video area Active */
    $('.video-items-active').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor:'.testmonial-nav'
    });
    $('.testmonial-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.video-items-active',
      dots: false,
      prevArrow: '<button type="button" class="slick-prev"><span class="ti-arrow-left"></<span></button>',
      nextArrow: '<button type="button" class="slick-next"><span class="ti-arrow-right"></span></button>',
      centerMode: true,
      focusOnSelect: true,
      centerPadding:0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]




    });


/* 5. Gallery Active */
    var client_list = $('.completed-active');
    if(client_list.length){
      client_list.owlCarousel({
        slidesToShow: 2,
        slidesToScroll: 1,
        loop: true,
        autoplay:true,
        speed: 3000,
        smartSpeed:2000,
        nav: false,
        dots: false,
        margin: 15,

        autoplayHoverPause: true,
        responsive : {
          0 : {
            items: 1
          },
          768 : {
            items: 2
          },
          992 : {
            items: 2
          },
          1200:{
            items: 3
          }
        }
      });
    }


/* 6. Nice Selectorp  */
  var nice_Select = $('select');
    if(nice_Select.length){
      nice_Select.niceSelect();
    }

/* 7.  Custom Sticky Menu  */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $(".header-sticky ").removeClass("sticky-bar");
      } else {
        $(".header-sticky").addClass("sticky-bar");
      }
    });

    /*   Show img flex  */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $(".header-flex").removeClass("sticky-flex");
      } else {
        $(".header-flex").addClass("sticky-flex");
      }
    });

    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
          $(".header-sticky").removeClass("sticky");
      } else {
          $(".header-sticky").addClass("sticky");
      }
    });



/* 8. sildeBar scroll */
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="ti-arrow-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


/* 9. data-background */
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
      });


/* 10. WOW active */
    new WOW().init();

/* 11. Datepicker */
    
// 11. ---- Mailchimp js --------//  
    function mailChimp() {
      $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();


// 12 Pop Up Img
    var popUp = $('.single_gallery_part, .img-pop-up');
      if(popUp.length){
        popUp.magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
        });
      }

// Add class




$('.sticky-logo').addClass('info-open');


// Remove clas
$('.close-icon').click(function(){
  $('.extra-inofo-bar').removeClass('info-open');
})



})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
  const scrollWrapper = document.getElementById('presenter-wrapper');
  const scrollLeftBtn = document.getElementById('scroll-left');
  const scrollRightBtn = document.getElementById('scroll-right');
  const seeMoreBtn = document.getElementById('see-more-presenters');
  
  // Amount to scroll on each arrow click
  const scrollAmount = 440; // Adjust based on your design
  
  // Handle left arrow click
  scrollLeftBtn.addEventListener('click', function(e) {
      e.preventDefault();
      scrollWrapper.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
      });
  });
  
  // Handle right arrow click
  scrollRightBtn.addEventListener('click', function(e) {
      e.preventDefault();
      scrollWrapper.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
      });
  });
  
  // Handle See More button click
  seeMoreBtn.addEventListener('click', function() {
      scrollWrapper.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Atualiza a data em tempo real
  function updateDate() {
      const dateElement = document.getElementById("current-date");
      const now = new Date();
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
      dateElement.textContent = now.toLocaleDateString('pt-BR', options);
  }

  // Pega a localização do usuário e obtém o clima
  function fetchWeather(lat, lon) {
      const apiKey = "06c750c2987626c86627034db20d5cb4"; // Substitua por sua chave da OpenWeatherMap
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${apiKey}`;

      fetch(url)
          .then(response => response.json())
          .then(data => {
              const weatherElement = document.getElementById("weather-info").children[0];
              const temperature = Math.round(data.main.temp);
              const description = data.weather[0].description;
              weatherElement.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt=""> ${temperature}°C, ${description}`;
          })
          .catch(() => {
              document.getElementById("weather-info").children[0].textContent = "Não foi possível carregar o clima";
          });
  }

  // Obtém a localização do usuário
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          position => fetchWeather(position.coords.latitude, position.coords.longitude),
          () => document.getElementById("weather-info").children[0].textContent = "Ative a localização para ver o clima."
      );
  } else {
      document.getElementById("weather-info").children[0].textContent = "Geolocalização não suportada.";
  }

  updateDate();
});

document.addEventListener("DOMContentLoaded", function () {
  const headerTop = document.querySelector(".header-top");
  const originalHeight = headerTop.offsetHeight; // Salva a altura inicial

  // Após carregar o clima
  function updateWeatherInfo(data) {
      const weatherElement = document.querySelector("#weather-info li:first-child");
      weatherElement.innerHTML = `<img src="assets/img/icon/header_icon1.png" alt=""> ${data.temp}°C - ${data.description}`;

      // Mantém a altura original
      headerTop.style.height = originalHeight + "px";
  }

  // Simulação de chamada à API
  setTimeout(() => {
      updateWeatherInfo({ temp: 25, description: "Ensolarado" }); // Exemplo de dados
  }, 2000);
});
