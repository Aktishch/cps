import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

import media from '../ts/functions/media'
import quiz from '../ts/quiz'

const init = () => {

  const quizDetail = new Swiper('.quiz-detail .swiper', {

    slidesPerView: 1,
    slidesPerGroup: 1,
    allowTouchMove: false

  })

  const quizSlider = new Swiper('.quiz-slider .swiper', {

    navigation: {

      prevEl: '.quiz-slider .swiper-button-prev',
      nextEl: '.quiz-slider .swiper-button-next'

    },

    pagination: {

      el: '.quiz-slider .swiper-pagination',
      type: 'custom',

      renderCustom: (swiper, current, total) => {

        return total - current

      }

    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    allowTouchMove: false,
    watchSlidesProgress: true,

    on: {

      slideChange: (swiper) => {

        quizDetail.slideTo(swiper.activeIndex)

        quiz.checkQuizSlide(swiper.visibleSlides[0])

        if (swiper.visibleSlides[0] == swiper.slides[swiper.slides.length - 1]) {

          swiper.el.closest('[data-quiz]').setAttribute('data-quiz-end', '')

        } else {

          swiper.el.closest('[data-quiz]').removeAttribute('data-quiz-end')

        }

      }

    }

  })

  const sliderResult = new Swiper('.result-slider .swiper', {

    pagination: {

      el: '.result-slider .swiper-pagination',
      clickable: true

    },

    navigation: {

      prevEl: '.result-slider .swiper-button-prev',
      nextEl: '.result-slider .swiper-button-next'

    },

    slidesPerView: 1.1,
    slidesPerGroup: 1,
    spaceBetween: 16,
    grabCursor: true,

    breakpoints: {

      [media.md]: {

        slidesPerView: 1,
        spaceBetween: 30

      }

    }

  })

  const sliderStages = new Swiper('.stages-slider .swiper', {

    pagination: {

      el: '.stages-slider .swiper-pagination',
      clickable: true

    },

    slidesPerView: 1.1,
    slidesPerGroup: 1,
    spaceBetween: 16,

    breakpoints: {

      [media.sm]: {

        slidesPerView: 1.5

      },

      [media.md]: {

        slidesPerView: 'auto',
        spaceBetween: 0,
        allowTouchMove: false

      }

    }

  })

  const sliderPersonal = new Swiper('.personal-slider .swiper', {

    pagination: {

      el: '.personal-slider .swiper-pagination',
      clickable: true

    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 40,
    speed: 1000,
    centeredSlides: true,
    loop: true,
    grabCursor: true,

    breakpoints: {

      [media.sm]: {

        slidesPerView: 1.8

      },

      [media.md]: {

        slidesPerView: 2.2

      },

      [media.lg]: {

        slidesPerView: 2.7

      }

    },

    autoplay: {

      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false

    }

  })

  const sliderGallery = new Swiper('.gallery-slider .swiper', {

    slidesPerView: 0.8,
    spaceBetween: 16,
    speed: 15000,
    centeredSlides: true,
    loop: true,
    allowTouchMove: false,

    breakpoints: {

      [media.md]: {

        slidesPerView: 1.2,

      },

      [media.lg]: {

        slidesPerView: 1.4,
        spaceBetween: 32

      },

      [media.xl]: {

        slidesPerView: 1.8,

      }

    },

    autoplay: {

      delay: 0,
      stopOnLastSlide: false,
      disableOnInteraction: false

    }

  })

  window.Swiper = Swiper

}

export default { init }