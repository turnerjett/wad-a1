// Function to handle search event
export const searchChangeHandler = (e, filterUsers, getUsers, UserListItem) => {
	// Find p element to say what is being searched
	const test = document.getElementById("search-text");
	// Conditionally set value based on if search is empty or not
	const text = e.target.value
		? `Showing results that start with "${e.target.value}"`
		: "Search to narrow results";
	// Display text
	test.textContent = text;
	filterUsers(e.target.value, getUsers);
};

// Function to handle when the search bar is focused
export const searchFocusHandler = (e) => {
	const overlay = document.getElementById("overlay");
	const overlaySearch = document.getElementsByClassName("search-wrapper")[0];
	// Guard to check if the overlay is already showing
	if (overlay.style.display == "flex") return;
	const inputContainer = document.getElementsByClassName("input-container")[0];
	// Move search bar to overlay
	overlaySearch.prepend(inputContainer);
	// Set display from none to to flex
	overlay.style.display = "flex";
	// Make sure the search bar is still focus after moving it
	inputContainer.children[0].focus();
};

// Function to handle when the overlay or search button is clicked
export const overlayClickHandler = (e) => {
	const searchWrapper = document.getElementsByClassName("search-wrapper")[1];
	const overlaySearch = document.getElementsByClassName("search-wrapper")[0];
	// Move search bar back to original position
	if (overlaySearch.firstChild !== null) {
		searchWrapper.prepend(overlaySearch.firstChild);
	}
	// Set the overlays display to none
	overlay.style.display = "none";
};

// Function to handle when the overlay is clicked
export const returnPressHandler = (e) => {
	if (e.key !== "Enter") return;
	// e.preventDefault();
	const searchWrapper = document.getElementsByClassName("search-wrapper")[1];
	const overlaySearch = document.getElementsByClassName("search-wrapper")[0];
	// Move search bar back to original position
	searchWrapper.prepend(overlaySearch.firstChild);
	// Set the overlays display to none
	overlay.style.display = "none";
};

// Function to handle expanding the user view to show more info
export const viewHandler = (e, i) => {
	const listItem = document.getElementsByClassName("user-list")[0].children[i];
	// Conditionally toggle height of user list item
	listItem.style.minHeight =
		listItem.style.minHeight === "30rem" ? "0rem" : "30rem";
};
