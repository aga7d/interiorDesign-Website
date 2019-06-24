const Header = () => {
  const leftContainer = document.querySelector("#left_img");
  const rightContainer = document.querySelector("#right_img");
  const leftImages = document.querySelectorAll("#left_img img");
  const rightImages = document.querySelectorAll("#right_img img");
  let lCounter = 2;
  let rCounter = 2;
  let size = leftImages[0].clientHeight;

  const init = () => {
    document.querySelector("#hero_img").style.height = `${size - 10}px`;
  };
  init();
  const slide = (container, direction) => {
    container.style.transform = `translateY(-${direction}px)`;
  };
  const noTransitionSlide = () => {
    rightContainer.style.transition = "none";
    leftContainer.style.transition = "none";
    slide(rightContainer, size * (rCounter + 1));
    slide(leftContainer, size * (lCounter - 1));
  };
  //  go to second img
  slide(leftContainer, size);
  slide(rightContainer, size * (rightImages.length - 2));

  setInterval(() => {
    leftContainer.style.transition = "transform 0.7s ease-in-out";
    rightContainer.style.transition = "transform 0.7s ease-in-out";
    slide(leftContainer, size * lCounter);
    slide(rightContainer, size * rCounter);
    lCounter++;
    rCounter--;
    if (lCounter > leftImages.length || rCounter < -1) {
      lCounter = 2;
      rCounter = 2;
      noTransitionSlide();
    }
  }, 5000);
  window.addEventListener("resize", () => {
    size = leftImages[0].clientHeight;
    init();
    noTransitionSlide();
  });
  rightContainer.addEventListener("transitionend", () => {
    if (rightImages[rCounter + 1].className === "last_clone") {
      rightContainer.style.transition = "none";
      rCounter = rightImages.length - 2;
      slide(rightContainer, size * rCounter);
      rCounter--;
    }
  });
  leftContainer.addEventListener("transitionend", () => {
    if (leftImages[lCounter - 1].className === "first_clone") {
      leftContainer.style.transition = "none";
      lCounter = 1;
      slide(leftContainer, size * lCounter);
      lCounter++;
    }
  });
};
export default Header;
