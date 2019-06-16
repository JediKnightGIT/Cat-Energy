const navMain = document.querySelector(".main-nav"),
	  navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
	if (navMain.classList.contains("main-nav--closed")) {
		navMain.classList.remove("main-nav--closed");
		navMain.classList.add("main-nav--opened");
	} else {
		navMain.classList.add("main-nav--closed");
		navMain.classList.remove("main-nav--opened");
	}
});

// window.addEventListener("keydown", function (evt) {
// 	if (evt.keyCode === 27) {
// 		evt.preventDefault();
// 		if (mapPopup.classList.contains("modal-show")) {
// 			mapOverlay.classList.remove("overlay-show");
// 			mapPopup.classList.remove("modal-show");
// 			mapPopup.classList.remove("modal-error");
// 		}
// 	}
// });