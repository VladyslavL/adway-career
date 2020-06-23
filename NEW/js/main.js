// mobile navigation
const toggleNavigation = function () {
  const navMob = document.querySelector(".js-mobilenav");
  const hamburger = document.querySelector(".js-hamburger");

  navMob.classList.toggle("js-active");
  hamburger.classList.toggle("js-active");
};

// carousels
const Carousels = function (elements) {
  var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  };

  // tiny-slider initialisation
  forEach(elements, function (index, value) {
    let sliderSettings = {
      0: {
        container: value,
        items: 1.3,
        slideBy: 1,
        autoWidth: true,
        // loop: true,
        mouseDrag: true,
        loop: false,
        rewind: true,
        nav: false,
        controlsPosition: "bottom",
        responsive: {
          480: {
            items: 2.3,
          },
          768: {
            items: 4,
            slideBy: "page",
          },
        },
      },
      1: {
        container: value,
        items: 2,
        slideBy: 1,
        startIndex: 1,
        center: true,
        autoWidth: true,
        // loop: true,
        mouseDrag: true,
        loop: false,
        rewind: true,
        nav: false,
        controlsPosition: "bottom",
        responsive: {
          480: {
            items: 3,
          },
          768: {
            items: 3,
            slideBy: 1,
          },
        },
      },
      2: {
        container: value,
        items: 2.2,
        // slideBy: 1,
        autoWidth: true,
        // loop: true,
        mouseDrag: true,
        // loop: false,
        // rewind: true,
        nav: false,
        controlsPosition: "bottom",
        responsive: {
          480: {
            items: 2.3,
          },
          768: {
            items: 3.5,
          },
        },
      },
    };
    let slider = tns(sliderSettings[index]);
  });
};

// add event listeners
if (document.querySelector(".js-hamburger")) {
  document.querySelector(".js-hamburger").addEventListener("click", toggleNavigation);
}

if (document.querySelector(".carousel")) {
  Carousels(document.querySelectorAll(".carousel"));
}
