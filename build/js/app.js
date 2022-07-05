const countdown = document.querySelector('.countdown'),
  reproductor = document.querySelector('.reproductor');

let ubicacionPrincipal = window.pageYOffset;

document.addEventListener('DOMContentLoaded', function () {
  inicarApp();
});

// window.addEventListener('resize', function () {
//   // tu código aquí
//   console.log('La resolución de tu pantalla es: ' + document.documentElement.clientWidth + ' x ' + document.documentElement.clientHeight);
// });

function inicarApp() {
  aparecerElementos();
  desplegarCantidadPersonas();
  esconderHeader();
}

function aparecerElementos() {
  ScrollReveal().reveal('.portada__text', { delay: 300 });
  ScrollReveal().reveal('.legend', { delay: 300 });
  ScrollReveal().reveal('.imagen-padres', { delay: 300 });
  ScrollReveal().reveal('.portada2__p p', { delay: 300 });
  ScrollReveal().reveal('.ubicacion img', { delay: 300 });
  ScrollReveal().reveal('.discurso-descripcion-texto', { delay: 300 });
  ScrollReveal().reveal('.recepcion-descripcion-texto', { delay: 300 });
  ScrollReveal().reveal('.vestimenta__imagenes', { delay: 300 });
  ScrollReveal().reveal('#carouselExampleIndicators', { delay: 300 });
  ScrollReveal().reveal('.gifts', { delay: 300 });

  // if (innerWidth >= 768) {
  //   ScrollReveal().reveal('.social-media', { distance: '150%', origin: 'bottom', opacity: null, delay: 400 });
  // } else {
  //   ScrollReveal().reveal('.social-media', { distance: '150%', origin: 'right', opacity: null, delay: 400 });
  // }

  // ScrollReveal().reveal('.about__foto img', { distance: '150%', origin: 'left', opacity: null, delay: 200 });
  // ScrollReveal().reveal('.about__descripcion p');
  // ScrollReveal().reveal('.glider_container', { easing: 'ease-in' });
  // ScrollReveal().reveal('.portfolio__contenido');
}

simplyCountdown(countdown, {
  year: 2023, // required
  month: 8, // required
  day: 22, // required
  hours: 0, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 0, // Default is 0 [0-59] integer
  words: {
    //words displayed into the countdown
    days: { singular: 'Día', plural: 'Días' },
    hours: { singular: 'Hora', plural: 'Horas' },
    minutes: { singular: 'Minuto', plural: 'Minutos' },
    seconds: { singular: 'Segundo', plural: 'Segundos' },
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: false,
  onEnd: function () {
    // your code
    return;
  },
  refresh: 1000, //default refresh every 1s
  sectionClass: 'simply-section', //section css class
  amountClass: 'simply-amount', // amount css class
  wordClass: 'simply-word', // word css class
  zeroPad: false,
  countUp: false, // enable count up if set to true
});

function desplegarCantidadPersonas() {
  const si = document.getElementById('si');
  const no = document.getElementById('no');
  const select = document.querySelector('.select');

  si.addEventListener('click', function () {
    if (select.classList.contains('d-none')) {
      select.classList.remove('d-none');
    }
  });

  no.addEventListener('click', function () {
    select.classList.add('d-none');
  });
}

function esconderHeader() {
  window.onscroll = function () {
    let Desplazamiento_Actual = window.pageYOffset;
    if (ubicacionPrincipal >= Desplazamiento_Actual) {
      reproductor.classList.remove('d-none');
    } else {
      reproductor.classList.add('d-none');
    }
    ubicacionPrincipal = Desplazamiento_Actual;
  };
}
