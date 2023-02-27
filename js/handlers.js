export const searchChangeHandler = (
	e,
	searchVal,
	filterUsers,
	getUsers,
	UserListItem
) => {
	const test = document.getElementById("search-text");
	const text = e.target.value
		? `Showing results that start with "${e.target.value}"`
		: "Search to narrow results";
	test.textContent = text;
	searchVal = e.target.value;
	filterUsers(e.target.value, getUsers);
};

export const searchFocusHandler = (e) => {
	const overlay = document.getElementById("overlay");
	const overlaySearch = document.getElementsByClassName("search-wrapper")[0];
	if (overlay.style.display == "flex") return;
	const inputContainer = document.getElementsByClassName("input-container")[0];
	overlaySearch.prepend(inputContainer);
	overlay.style.display = "flex";
	inputContainer.children[0].focus();
};

//
export const overlayClickHandler = (e) => {
	const searchWrapper = document.getElementsByClassName("search-wrapper")[1];
	const overlaySearch = document.getElementsByClassName("search-wrapper")[0];
	searchWrapper.prepend(overlaySearch.firstChild);
	overlay.style.display = "none";
};

export const viewHandler = (e, i) => {
	const listItem = document.getElementsByClassName("user-list")[0].children[i];
	listItem.style.minHeight =
		listItem.style.minHeight === "30rem" ? "0rem" : "30rem";
};
