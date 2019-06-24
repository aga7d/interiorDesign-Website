const dropDownMenu = () => {
  const dropDownBtn = document.querySelector("#mobile");
  const nav = document.querySelector(".main_nav");
  const logo = document.querySelector("#logo");
  const navLinks = Array.from(document.querySelectorAll(".nav_links"));
  const nodesArray = [dropDownBtn, nav, logo, ...navLinks];
  dropDownBtn.addEventListener("click", () => {
    nodesArray.forEach(node => {
      node.classList.toggle("active");
    });
    if (!dropDownBtn.classList.contains("active")) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 730) {
      nodesArray.forEach(node => {
        node.classList.remove("active");
      });
    }
  });
};

export default dropDownMenu;
