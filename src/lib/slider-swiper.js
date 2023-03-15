import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

import media from '../ts/functions/media'
import quiz from '../ts/quiz'

const init = () => {

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
    // freeMode: true,

    breakpoints: {

      [media.sm]: {

        slidesPerView: 1.5

      },

      [media.md]: {

        slidesPerView: 'auto',
        spaceBetween: 0,
        allowTouchMove: false

      }

    },

  })

  window.Swiper = Swiper

}

export default { init }