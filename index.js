let navToggleButton = document.querySelector(".nav-toggle");
let closeSideBar = document.querySelector(".close-button");
let nav = document.querySelector(".sidebar");

closeSideBar.addEventListener("click", () => {
	navToggleButton.classList.remove("hide-nav-toggle");
	nav.classList.remove("show-sidebar");
});

navToggleButton.addEventListener("click", () => {
	navToggleButton.classList.add("hide-nav-toggle");
	nav.classList.add("show-sidebar");
});
