/*jshint esversion: 6 */
/* jshint node: true */

const openSidebar = () => {
  document.getElementsByClassName("openContactMenu")[0].style.display = "none";
  document.getElementsByClassName("contactMenu")[0].style.display = "flex";
};

const closeSidebar = () => {
  document.getElementsByClassName("openContactMenu")[0].style.display = "flex";
  document.getElementsByClassName("contactMenu")[0].style.display = "none";
};
