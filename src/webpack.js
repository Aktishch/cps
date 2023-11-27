// Libraries
import airDatepicker from './lib/air-datepicker'
import yandexMap from './lib/yandex-map'
import fancybox from './lib/fancybox'
import sliderSwiper from './lib/slider-swiper'

// Scripts
import scrollHeader from './ts/scroll-header'
import mobileMenu from './ts/mobile-menu'
import scrollTo from './ts/scroll-to'
import animation from './ts/animation'
import waved from './ts/waved'
import listing from './ts/listing'
import accordion from './ts/accordion'
import parallax from './ts/parallax'
import formSubmit from './ts/form-submit'
import inputs from './ts/inputs'
import maskTel from './ts/mask-tel'
import quiz from './ts/quiz'
import themeNewYear from './ts/theme-new-year'
import preloader from './ts/preloader'

// Style
import './scss/index.scss'

// Connection
window.addEventListener('DOMContentLoaded', () => {

  airDatepicker.init()
  yandexMap.init()
  fancybox.init()
  sliderSwiper.init()
  scrollHeader.init()
  mobileMenu.init()
  scrollTo.init()
  animation.init()
  waved.init()
  listing.init()
  accordion.init()
  parallax.init()
  formSubmit.init()
  inputs.init()
  maskTel.init()
  quiz.init()
  themeNewYear.init()
  preloader.init()

})