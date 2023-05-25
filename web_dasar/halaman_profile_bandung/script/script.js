var lastScrollTop;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && scrollTop > 555) {
    navbar.style.top = "-80px";
    navbar.style.transition = "all .5s";
  } else {
    navbar.style.top = "0";
    // navbar.style.transition = "all .5s";
  }
  lastScrollTop = scrollTop;
});

// image zoom
$(document).ready(function () {
  $(".zoom").magnify();
});
