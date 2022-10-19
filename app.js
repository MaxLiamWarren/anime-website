const open_modal_one = document.getElementById("open_modal_one");
const modal_one = document.getElementById("modal_one");
const close_modal_one = document.getElementById("close_modal_one");

open_modal_one.addEventListener("click", () => {
	modal_one.classList.add("show_modal_one");
});

close_modal_one.addEventListener("click", () => {
	modal_one.classList.remove("show_modal_one");
});

const open_modal_two = document.getElementById("open_modal_two");
const modal_two = document.getElementById("modal_two");
const close_modal_two = document.getElementById("close_modal_two");

open_modal_two.addEventListener("click", () => {
	modal_two.classList.add("show_modal_two");
});

close_modal_two.addEventListener("click", () => {
	modal_two.classList.remove("show_modal_two");
});

const open_modal_three = document.getElementById("open_modal_three");
const modal_three = document.getElementById("modal_three");
const close_modal_three = document.getElementById("close_modal_three");

open_modal_three.addEventListener("click", () => {
	modal_three.classList.add("show_modal_three");
});

close_modal_three.addEventListener("click", () => {
	modal_three.classList.remove("show_modal_three");
});

const container = document.querySelector(".cards_container");
const cards = document.querySelector(".cards");

/*  Keep track of user's mouse down and up */
let isPressedDown = false;
/*  x horizontal space of cursor from inner container */
let cursorXSpace;

container.addEventListener("mousedown", (e) => {
	isPressedDown = true;
	cursorXSpace = e.offsetX - cards.offsetLeft;
	//e.offsetX is going to retrieve the horizontal position of mouse cursor in pixels
	container.style.cursor = "grabbing";
});

container.addEventListener("mouseup", () => {
	container.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
	isPressedDown = false;
});

container.addEventListener("mousemove", (e) => {
	if (!isPressedDown) return;
	e.preventDefault();
	cards.style.left = `${e.offsetX - cursorXSpace}px`;
	boundCards();
});

function boundCards() {
	const container_rect = container.getBoundingClientRect();
	const cards_rect = cards.getBoundingClientRect();

	if (parseInt(cards_rect.left) > 0) {
		cards.style.left = 0;
	} else if (cards_rect.right < container_rect.right) {
		cards.style.left = `-${cards_rect.width - container_rect.width}px`;
	}
}

const open_card_one = document.getElementById("open_card_one");
const card_one = document.getElementById("card_one");
const close_card_one = document.getElementById("close_card_one");

open_card_one.addEventListener("click", () => {
	card_one.classList.add("show_card_one");
});

close_card_one.addEventListener("click", () => {
	card_one.classList.remove("show_card_one");
});
