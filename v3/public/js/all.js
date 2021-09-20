"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var acc = document.querySelectorAll('.collapsible');
  var opt = {
    "accordion": true
  };
  var instances = M.Collapsible.init(acc, opt);
});
"use strict";

var animateObjs = {
  // fadeUpText:  document.querySelectorAll(".fade-up-text"),
  // fadeUpImage:  document.querySelectorAll(".fade-up-image"),
  fadeScaleInBanner: document.querySelectorAll(".fade-scaleIn-banner") // fadeScaleInImage:  document.querySelectorAll(".fade-scaleIn-image"),
  // fadeScaleInbg: document.querySelectorAll(".fade-scale-inbg"),
  // riseUpText:  document.querySelectorAll(".rise-up-text"),
  // riseUpImage:  document.querySelectorAll(".rise-up-image"),
  // listCarousel: document.querySelectorAll(".list-carousel .result__link"),
  // list: document.querySelectorAll(".row-list-two .result__item-img")

};

var callback = function callback(entires, observer) {
  entires.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
};

var options = {
  root: null,
  threshold: 0.5
};
var observer = new IntersectionObserver(callback, options);

for (var items in animateObjs) {
  animateObjs[items].forEach(function (e) {
    observer.observe(e);
  });
}
"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
}); // var slider = document.getElementById('test-slider');
// noUiSlider.create(slider, {
//  start: [20, 80],
//  connect: true,
//  step: 1,
//  orientation: 'horizontal', // 'horizontal' or 'vertical'
//  range: {
//    'min': 500,
//    'max': 1500
//  },
//  format: wNumb({
//    decimals: 0
//  })
// });
"use strict";

$('.flash').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1
    }
  }
});
"use strict";

// let slider = document.querySelectorAll(".slider");
// const cloneInit = (list,listLength,container)=>{
//     let last = list[listLength-1],
//         first = list[0],
//         lastClone = last.cloneNode(true),
//         secondLastClone = list[listLength-2].cloneNode(true),
//         firstClone = first.cloneNode(true),
//         secondClone = list[1].cloneNode(true);
//         firstClone.classList.add("clone");
//         secondClone.classList.add("clone");
//         lastClone.classList.add("clone");
//         secondLastClone.classList.add("clone");
//     firstClone.dataset.index = -1;
//     secondClone.dataset.index = -1;
//     lastClone.dataset.index = -1;
//     secondLastClone.dataset.index = -1;
//     first.classList.add("active-list");
//     container.appendChild(firstClone);
//     container.appendChild(secondClone);
//     first = container.insertBefore(lastClone,first);
//     container.insertBefore(secondLastClone,first);
// }
// slider.forEach(item=>{
//     let slides = item.querySelectorAll(".slider-item");
//     let sliderBtn = item.querySelectorAll(".slider-btn");
//     let sliderCont = item.querySelector(".slider-container");
//     let active = 1;
//     let total = slides.length;
//     let tranVal= 200;
//     cloneInit(slides,total,sliderCont);
//     sliderCont.style.transform = "translateX(-"+200+"%)";
//     sliderBtn.forEach(btn=>{
//         btn.addEventListener('click',(e=>{
//             sliderCont.classList.add("slider-animation");
//             let dir = e.target.dataset.dir;
//             let isLeft = dir == "left" ? true : false;
//             tranVal = isLeft ? (tranVal - 100) : (tranVal + 100);
//             if (active == 1 && isLeft) {
//                 active = total;
//                 setTimeout(()=>{
//                     sliderCont.classList.remove("slider-animation");
//                     tranVal = (total * 100) + 100; 
//                     sliderCont.style.transform = "translateX(-"+tranVal+"%)";
//                 },520);
//             }
//             else if (((active == total) && !isLeft)) {
//                 active = 0;
//                 setTimeout(()=>{
//                     sliderCont.classList.remove("slider-animation");
//                     tranVal = 200; 
//                     sliderCont.style.transform = "translateX(-"+tranVal+"%)";
//                 },520);
//             }
//             else {
//                 if(isLeft) {
//                     active = active -1;
//                 }
//                 else {
//                     active = active +1;
//                 }
//             }
//             sliderCont.style.transform = "translateX(-"+tranVal+"%)";
//         }));
//     })
// });
$('.slide').owlCarousel({
  stagePadding: 50,
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});
"use strict";

var options = {};
document.addEventListener('DOMContentLoaded', function () {
  var sidenav = document.querySelectorAll('.sidenav.menu');
  var instances = M.Sidenav.init(sidenav, options);
  options['edge'] = 'right';
  console.log(options);
  var sidenavCart = document.querySelectorAll('.sidenav.cart');
  instances = M.Sidenav.init(sidenavCart, options);
});
var navtabs = document.querySelectorAll('.tabs');
var instance = M.Tabs.init(navtabs, options); //mega dropdown

$(".mega-trigger").click(function (e) {
  var id = $(e.target).data("target");
  var $traget = $(id);

  if (!$traget.hasClass("active")) {
    $(".mega.active").slideUp();
    $(".mega").removeClass("active");
    $traget.addClass("active");
    $traget.slideDown();
  } else {
    $traget.slideUp();
    $traget.removeClass("active");
  }
}); //  $(".mega-trigger").on("mouseenter",(e)=>{
//     let id = $(e.target).data("target");
//     let $traget = $(id);
//     if(!$traget.hasClass("active")) {
//         $(".mega").slideUp();
//         $(".mega").removeClass("active");
//         $traget.slideDown();
//         $traget.addClass("active");
//     }
//  });
//  $(document).mouseup(function(e) 
//  {
//      var container = $(".mega-trigger");
//      // if the target of the click isn't the container nor a descendant of the container
//      if (!container.is(e.target) && container.has(e.target).length === 0) 
//      {
//          $(".mega.active").slideUp();
//      }
//  });
"use strict";

var $products = $('.product-catalog_carousel').owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  autoplayTimeout: 500,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1
    }
  }
});
$("input[name='grid']").on("change", function () {
  $(".product-cont").toggleClass("m-50");
  $products.trigger('refresh.owl.carousel');
});
$(".product-catalog_carttrigger").click(function (e) {
  $(e.target).addClass("active");
  $(e.target).next(".product-catalog_cart").addClass("active");
});
$(".product-catalog_close").click(function (e) {
  var $parent = $(e.target).closest(".product-catalog_cart");
  $parent.prev(".product-catalog_carttrigger").removeClass("active");
  $parent.removeClass("active");
});
"use strict";

var $productSlider = $('.product-slider').owlCarousel({
  stagePadding: 30,
  loop: true,
  margin: 5,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    768: {
      items: 0
    }
  }
});
window.addEventListener('resize', function () {
  var path = window.location.pathname;
  var page = path.split("/").pop();

  if (page == "product.html") {
    window.location.reload();
  }
});
"use strict";

var colors = document.querySelectorAll(".product-colorbtn");

if (colors != null) {
  colors.forEach(function (c) {
    c.addEventListener("click", function (e) {
      var activeColor = document.querySelector(".product-colorbtn.active");

      if (activeColor != null) {
        activeColor.classList.remove("active");
      }

      e.target.classList.add("active");
    });
  });
}

var sizes = document.querySelectorAll(".product-sizes button");

if (sizes != null) {
  sizes.forEach(function (s) {
    s.addEventListener("click", function (e) {
      var sizeColor = document.querySelector(".product-sizes button.active");

      if (sizeColor != null) {
        sizeColor.classList.remove("active");
      }

      e.target.classList.add("active");
    });
  });
}

var plusBtn = document.querySelector(".product-qtyplus");
var minusBtn = document.querySelector(".product-qtyminus");
var qty = document.querySelector(".product-qtyno");

if (qty != null) {
  plusBtn.addEventListener("click", function () {
    var val = parseInt(qty.value);

    if (val < 10) {
      qty.value = val + 1;
    }
  });
  minusBtn.addEventListener("click", function () {
    var val = parseInt(qty.value);

    if (val > 1) {
      qty.value = val - 1;
    }
  });
}

$('.product-related').owlCarousel({
  stagePadding: 50,
  loop: true,
  margin: 15,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});
"use strict";

// function getVals(){
//     // Get slider values
//     let parent = this.parentNode;
//     let slides = parent.getElementsByTagName("input");
//       let slide1 = parseFloat( slides[0].value );
//       let slide2 = parseFloat( slides[1].value );
//     // Neither slider will clip the other, so make sure we determine which is larger
//     if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
//     let displayElement = parent.getElementsByClassName("rangeValues")[0];
//         displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
//   }
//   window.onload = function(){
//     // Initialize Sliders
//     let sliderSections = document.getElementsByClassName("range-slider");
//         for( let x = 0; x < sliderSections.length; x++ ){
//           let sliders = sliderSections[x].getElementsByTagName("input");
//           for( let y = 0; y < sliders.length; y++ ){
//             if( sliders[y].type ==="range" ){
//               sliders[y].oninput = getVals;
//               // Manually trigger event first time to display values
//               sliders[y].oninput();
//             }
//           }
//         }
//   }
$(document).ready(function () {
  var $priceRange = $(".rangeValues");
  var $rangeOne = $(".price-range-one");
  var $rangeTwo = $(".price-range-two");
  var min = "Rs. " + $rangeOne.val();
  var max = "Rs. " + $rangeTwo.val();
  $priceRange.text(min + " - " + max);
  $rangeOne.on("input", function () {
    min = "Rs. " + $rangeOne.val();
    $priceRange.text(min + " - " + max);
  });
  $rangeTwo.on("input", function () {
    max = "Rs. " + $rangeTwo.val();
    $priceRange.text(min + " - " + max);
  });
});
"use strict";

$('.reviews-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
});