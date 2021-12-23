function addListItem() {
        var x = document.getElementById("home-items");
        if (x.style.display === "none") {
          x.style.display = "flex";          
        } else {
          x.style.display = "none";
        }
}
function addListItem1() {
  var x = document.getElementById("home-items-1");
  if (x.style.display === "none") {
    x.style.display = "flex";          
  } else {
    x.style.display = "none";
  }
}
function addListItem2() {
  var x = document.getElementById("home-items-2");
  if (x.style.display === "none") {
    x.style.display = "flex";          
  } else {
    x.style.display = "none";
  }
}
function addListItem3() {
  var x = document.getElementById("home-items-3");
  if (x.style.display === "none") {
    x.style.display = "flex";          
  } else {
    x.style.display = "none";
  }
}
function addListItem4() {
  var x = document.getElementById("home-items-4");
  if (x.style.display === "none") {
    x.style.display = "flex";          
  } else {
    x.style.display = "none";
  }
}
function clicked() {
  var y = document.getElementById("navbar-links");
  if (y.style.display === "none") {
    y.style.display = "flex";
  } else {
    y.style.display = "none"
  }
}

function category() {
   var z = document.getElementById("categories-item");
   if (z.style.display === "none") {
     z.style.display = "block";
   }else {
     z.style.display = "none"
   }
  }


  // slider

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // var slideIndex = 0;
  // showSlides();

  // function showSlides() {
  //   var i;
  //   var slides = document.getElementsByClassName("grid-two");
  //   var dots = document.getElementsByClassName("dot");
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   slideIndex++;
  //   if(slideIndex > slides.length)  {
  //     slideIndex = 1;
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex-1].style.display = "grid";
  //   dots[slideIndex-1].className += "active";
  //   setTimeout(showSlides, 2000);
  // }

  // hover
  function hoverBottomAdd(hover) {
    const hoverBlock = document.querySelector(hover);
  
    hoverBlock.addEventListener("mousemove", () => {
      bottomAdd.classList.add("bottom3");
      textSection.classList.add("bottom2");
    });
  
    hoverBlock.addEventListener("mouseout", () => {
      bottomAdd.classList.remove("bottom3");
      textSection.classList.remove("bottom2");
    });
  }

const scrollTopIcon = document.querySelector(".move-up");

window.onscroll = () => {
  if (window.scrollY > 500) {
    scrollTopIcon.classList.remove("move-up-bottom");
  } else if (window.scrollY < 500) {
    scrollTopIcon.classList.add("move-up-bottom");
  }
};
scrollTopIcon.addEventListener("click", () => {
  window.scrollTo(0, 0);
});