const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");
const removeMarker = document.querySelector(".carousel-indicators");
const carouselcontrolprev = document.querySelector(".carousel-control-prev");
const carouselcontrolnext = document.querySelector(".carousel-control-next");
const carouselcontrolnexticon = document.querySelector(
  ".carousel-control-next-icon"
);

const carouselcontrolprevicon = document.querySelector(
  ".carousel-control-prev-icon"
);
carouselcontrolprev.style = "top: 46px;";
carouselcontrolnext.style = "top: 46px;";
carouselcontrolnexticon.style =
  "background-color: black; border-radius:30px; width:3rem;height:3rem";
carouselcontrolprevicon.style =
  "background-color: black; border-radius:30px; width:3rem;height:3rem";
removeMarker.style.display = "none";

// Đóng mở menu//
let header = document.getElementById("header");
let mobileMenu = document.getElementById("mobile-menu");
mobileMenu.onclick = function () {
  let isClosed = header.clientHeight === 46;
  console.log(isClosed);
  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};
// auto đóng khi chọn menu//
let menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (let i = 0; i < menuItems.length; i++) {
  let menuItem = menuItems[i];

  menuItem.onclick = function (event) {
    let isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnave");
    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}

// Hàm hiển thị mua vé(them class open vào modal)
function showBuyTickets() {
  modal.classList.add("open");
} // Hàm ẩn thị mua vé(bỏ class open vào modal)

function hideBuyTickets() {
  modal.classList.remove("open");
}
// lặp qua từng thẻ lắng nghe click để thêm class
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}
// nghe click để huỷ classs
modalClose.addEventListener("click", hideBuyTickets);
modal.addEventListener("click", hideBuyTickets);
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
