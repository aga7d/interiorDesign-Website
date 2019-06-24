import dropDownMenu from "./js/dropDownMenu";

dropDownMenu();
const p = Array.from(document.querySelectorAll("p"));
const titles = Array.from(document.querySelectorAll(".title"));

const changeOpacity = node => {
  if (
    document.body.scrollTop > node.offsetTop - 300 ||
    document.documentElement.scrollTop > node.offsetTop - 300
  ) {
    node.style.opacity = 1;
  }
};
window.onscroll = () => {
  p.forEach(node => {
    changeOpacity(node);
  });
  titles.forEach(node => {
    changeOpacity(node);
  });
};
