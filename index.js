/*********************************** Navbar ****************************************/
/* Opens side bar */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  close_side_social_Nav()
}

/* Closes side bar */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
/*********************************** Navbar ****************************************/

/****************************** Social side navbar ********************************/
/* close social side navbar */
function open_side_social_Nav() {
  document.getElementById("social_sidenav").style.width = "100px";
}

/* close social side navbar */
function close_side_social_Nav() {
  document.getElementById("social_sidenav").style.width = "0";
}
/****************************** Social side navbar ********************************/