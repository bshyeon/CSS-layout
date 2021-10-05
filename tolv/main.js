const header = document.querySelector("header");
const headerHeight = header.getBoundingClientRect().height;

// 아래로 스크롤 시 background color 가 white로 변경
window.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.setAttribute("style", "background: white;");
  } else {
    header.setAttribute("style", "background: transparent;");
  }
});
