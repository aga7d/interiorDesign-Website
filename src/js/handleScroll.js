const handleScroll = () => {
  const nav = document.querySelector(".main_nav");
  const h2 = document.querySelector(".content h2");
  const h3 = document.querySelector(".content h3");
  const rDescrip = document.querySelector("#content_right_img");
  const lDescrip = document.querySelector("#content_left_img");
  const bLDescrip = document.querySelector("#content_bottom_left");
  const bRDescrip = document.querySelector("#content_bottom_right");
  const changeOpacity = node => {
    node.style.opacity = 1;
  };

  const getHeaderOffset = header => {
    if (
      document.body.scrollTop >= header.offsetTop - 320 ||
      document.documentElement.scrollTop >= header.offsetTop - 320
    ) {
      changeOpacity(header);
    }
  };
  const getDescripOffset = node => {
    if (
      document.body.scrollTop >= node.offsetTop - 220 ||
      document.documentElement.scrollTop >= node.offsetTop - 220
    ) {
      changeOpacity(node.querySelector(".dscription"));
    }
  };
  window.onscroll = () => {
    getHeaderOffset(h2);
    getHeaderOffset(h3);
    getDescripOffset(rDescrip);
    getDescripOffset(lDescrip);
    getDescripOffset(bLDescrip);
    getDescripOffset(bRDescrip);
  };
};
export default handleScroll;
