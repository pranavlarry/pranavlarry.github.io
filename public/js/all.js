"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var acc = document.querySelectorAll('.collapsible');
  var opt = {
    "accordion": true
  };
  var instances = M.Collapsible.init(acc, opt);
});
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
  var sidenav = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(sidenav, options);
});
var navtabs = document.querySelectorAll('.tabs');
var instance = M.Tabs.init(navtabs, options);
"use strict";

$('.product-catalog_carousel').owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1
    }
  }
});
"use strict";

$('.product-slider').owlCarousel({
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
  responsive: {
    0: {
      items: 2
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