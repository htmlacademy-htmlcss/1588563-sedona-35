const searchPopup = document.querySelector(".modal-container");
const searchLinkHeader = document.querySelector(".user-navigation-deal-button");
const searchClose = document.querySelector(".modal-close-button");

searchLinkHeader.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchPopup.classList.remove("modal-close");
});

searchClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchPopup.classList.add("modal-close");
});
