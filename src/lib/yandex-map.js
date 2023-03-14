import ymaps from 'ymaps'
import media from '../ts/functions/media'

const init = () => {

  if (!document.querySelector('*[data-suggest-view]') && !document.getElementById('map')) return

  ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then((maps) => {

    const center = window.screen.width > media.md ? [45.038109920627555, 38.933175269126686] : [45.0378970746017, 38.93649699999996]
    const mark = [45.0378970746017, 38.93649699999996]
    const inputs = [...document.querySelectorAll('[data-suggest-view]')]

    const map = new maps.Map('map', {

      center: center,
      zoom: window.screen.width > media.md ? 17 : 16

    })

    const placemark = new maps.Placemark((mark), {}, {

      iconLayout: 'default#image',
      iconImageHref: '../img/pictures/geo.png',
      iconImageSize: [100, 100],
      iconImageOffset: [-50, -50]

    })

    inputs.forEach((input) => {

      new maps.SuggestView(input, {

        results: 5,
        container: document.body

      })

    })

    map.controls.remove('geolocationControl')
    map.controls.remove('searchControl')
    map.controls.remove('trafficControl')
    map.controls.remove('typeSelector')
    map.controls.remove('fullscreenControl')
    map.controls.remove('rulerControl')
    map.behaviors.disable(['scrollZoom'])
    map.geoObjects.add(placemark)

  }).catch((error) =>

    console.log('Failed to load Yandex Maps', error)

  )

}

export default { init }