window.onscroll = () => {
  if (window.pageYOffset > 0) {
    document.querySelector("header").className = "scrolledHeader";
  } else document.querySelector("header").className = "";
}