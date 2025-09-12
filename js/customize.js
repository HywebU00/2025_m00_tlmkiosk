// 自行加入的JS請寫在這裡
$(function () {
  // cp_photo
  $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  if ($('.Slider-for').length > 0) {
    $('.Slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      // fade: true,
      swipe: false,
      swipeToSlide: false,
      lazyLoad: 'ondemand',
      asNavFor: '.Slider-nav',
      infinite: true,
      swipe: true,
      draggable: true,
    });
  }
  if ($('.Slider-nav').length > 0) {
    $('.Slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.Slider-for',
      dots: true,
      arrows: true,
      lazyLoad: 'ondemand',
      focusOnSelect: true,
      infinite: true,
    });
  }
  // cp圖片輪播
  if ($('.cppic_slider').length > 0) {
    $('.cppic_slider').slick({
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1500,
      swipeToSlide: true, // 手指/滑鼠拖曳時，不需要卡在每個 slide
      swipe: true,
      draggable: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 545,
          settings: {
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    });
  }

  // 典藏listslider 輪播
  if ($('.collection_listslider').length > 0) {
    $('.collection_listslider').slick({
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 3,
      // swipeToSlide: true, // 手指/滑鼠拖曳時，不需要卡在每個 slide
      draggable: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  }
  // 作家listslider 輪播
  if ($('.writer_listslider').length > 0) {
    $('.writer_listslider').slick({
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 3,
      // swipeToSlide: true, // 手指/滑鼠拖曳時，不需要卡在每個 slide
      draggable: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  }

  // cp頁面照片輪播
  if ($('.picslider').length > 0) {
    $('.picslider').slick({
      dots: true,
      infinite: false,
      speed: 500,
      cssEase: 'linear',
      swipe: true,
      draggable: true,
    });
  }

  // 寫作年表輪播
  if ($('.chronology_slider').length > 0) {
    $('.chronology_slider').slick({
      dots: false,
      infinite: false,
      speed: 1000,
      cssEase: 'linear',
      swipe: true,
      draggable: true,
    });
  }
  // 著作作品 輪播
  if ($('.work_slider').length > 0) {
    $('.work_slider').slick({
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 6,
      slidesToScroll: 1,
      swipeToSlide: true, // 手指/滑鼠拖曳時，不需要卡在每個 slide
      swipe: true,
      draggable: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  }
  // 內頁滑上去
  $(window).bind('scroll', function () {
    if ($(this).scrollTop() > 60) {
      $('.titleblock').addClass('sticky');
    } else {
      $('.titleblock').removeClass('sticky');
    }
  });
  /*-----------------------------------*/
  ///////////////置頂go to top////////////
  /*-----------------------------------*/
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
      $('.scrollToTop').fadeIn(200);
    } else {
      $('.scrollToTop').fadeOut(200);
    }
  });
  /*-----------------------------------*/
  /////click event to scroll to top//////
  /*-----------------------------------*/
  $('.scrollToTop')
    .off()
    .on('click', function (e) {
      $('html, body').stop().animate({ scrollTop: 0 }, 400, 'linear');
      // $('a.goCenter').focus(); //加入這行
      e.preventDefault();
    });
  // $('.scrollToTop').keydown(function (e) {
  //   if (e.code == 'Enter' && !e.shiftKey) {
  //     e.preventDefault();
  //     _body.find('a.goCenter').focus();
  //     $('html, body').stop().animate({ scrollTop: 0 }, 400, 'linear');
  //   }
  // });
  // 快速連結
  // $('.introduction_btn>a').on('click', function (e) {
  //   e.preventDefault(); // 避免連結預設行為
  //   $('html, body')
  //     .stop(true, true)
  //     .animate(
  //       {
  //         scrollTop: $('.material_group').offset().top - 160,
  //       },
  //       200,
  //       'easeOutExpo'
  //     );
  // });
  // $('.autobiography_btn>a').on('click', function (e) {
  //   e.preventDefault(); // 避免連結預設行為
  //   $('html, body')
  //     .stop(true, true)
  //     .animate(
  //       {
  //         scrollTop: $('.autobiography_block').offset().top - 170,
  //       },
  //       200,
  //       'easeOutExpo'
  //     );
  // });
  // $('.chronology_btn>a').on('click', function (e) {
  //   e.preventDefault(); // 避免連結預設行為
  //   $('html, body')
  //     .stop(true, true)
  //     .animate(
  //       {
  //         scrollTop: $('.chronology_block').offset().top - 170,
  //       },
  //       200,
  //       'easeOutExpo'
  //     );
  // });
  // $('.work_btn>a').on('click', function (e) {
  //   e.preventDefault(); // 避免連結預設行為
  //   $('html, body')
  //     .stop(true, true)
  //     .animate(
  //       {
  //         scrollTop: $('.work_block').offset().top - 170,
  //       },
  //       200,
  //       'easeOutExpo'
  //     );
  // });
  //
  $('.quicklinks_block ul li > a').on('click', function (e) {
    e.preventDefault(); // 避免 a 連結跳動
    $(this)
      .parent('li') // 找到當前 li
      .addClass('active') // 加上 active
      .siblings('li') // 找到其他 li
      .removeClass('active'); // 移除 active
  });

  //燈箱

  Fancybox.bind('[data-fancybox]', {
    on: {
      reveal: (fancybox, slide) => {
        // 等 fancybox 出來後，更新 slick
        $('.slick-slider').slick('setPosition');
      },
    },
  });
});
// 快捷鍵
$(function () {
  const offsetTop = 170; // 固定高度偏移
  const sectionMap = {
    introduction_btn: '.material_group',
    autobiography_btn: '.autobiography_block',
    chronology_btn: '.chronology_block',
    work_btn: '.work_block',
  };

  // ScrollSpy 功能
  function updateActive() {
    let scrollPos = $(window).scrollTop();
    let windowHeight = $(window).height();
    let docHeight = $(document).height();
    let activeClass = null;

    $.each(sectionMap, function (btnClass, sectionSelector) {
      let section = $(sectionSelector);
      if (section.length) {
        let top = section.offset().top - offsetTop; // 偏移量
        let bottom = top + section.outerHeight();

        if (scrollPos >= top && scrollPos < bottom) {
          activeClass = btnClass;
        }
      }
    });

    // 如果滑到最底部，確保最後一個快捷鍵 active
    if ($(window).scrollTop() + windowHeight >= docHeight) {
      let lastBtnClass = Object.keys(sectionMap)[Object.keys(sectionMap).length - 1];
      activeClass = lastBtnClass;
    }

    if (activeClass) {
      $('.quicklinks_block li').removeClass('active');
      $('.quicklinks_block li.' + activeClass).addClass('active');
    }
  }

  $(window).on('scroll', updateActive);

  // 點選快捷鍵滾動
  $('.quicklinks_block li a').on('click', function (e) {
    e.preventDefault();
    let li = $(this).parent();
    let btnClass = li.attr('class').split(' ')[0]; // 取 li 第一個 class
    let target = $(sectionMap[btnClass]);

    if (target.length) {
      $('html, body').animate({ scrollTop: target.offset().top - offsetTop }, 600, 'easeOutExpo', function () {
        updateActive(); // 滾動完成後也更新 active
      });
    }
  });

  // 初始化一次 active
  updateActive();
});
