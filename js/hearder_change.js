window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header1").className = "backgroundcolor_changed";
  } else {
    document.getElementById("header1").className = "";
  }
}