function autoScroll() {
	const firstButton = document.querySelector(".button:first-child");
	carouselWrapper.appendChild(firstButton);
	carouselWrapper.style.transition = "none";
	carouselWrapper.style.transform = `translateX(0%)`;
	setTimeout(() => {
		carouselWrapper.style.transition = "transform 1s ease-in-out";
	}, 0);
}
let autoScrollInterval = setInterval(autoScroll, 2000); // adjust timing as per your need

let isUserInteracting = false;

prevButton.addEventListener("click", () => {
	if (!isUserInteracting) {
		clearInterval(autoScrollInterval);
		isUserInteracting = true;
		setTimeout(() => {
			isUserInteracting = false;
			autoScrollInterval = setInterval(autoScroll, 2000);
		}, 5000); // 5 seconds delay before auto scroll starts again
	}

	const lastButton = document.querySelector(".button:last-child");
	carouselWrapper.prepend(lastButton);
	carouselWrapper.style.transition = "none";
	carouselWrapper.style.transform = `translateX(-${100 / 7}%)`;
	setTimeout(() => {
		carouselWrapper.style.transition = "transform 1s ease-in-out";
		carouselWrapper.style.transform = `translateX(0%)`;
	}, 0);
});

nextButton.addEventListener("click", () => {
	if (!isUserInteracting) {
		clearInterval(autoScrollInterval);
		isUserInteracting = true;
		setTimeout(() => {
			isUserInteracting = false;
			autoScrollInterval = setInterval(autoScroll, 2000);
		}, 5000); // 5 seconds delay before auto scroll starts again
	}

	autoScroll();
});
