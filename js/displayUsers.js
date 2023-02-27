import { viewHandler } from "./handlers.js";

// Reusable function to display users on the page
export const displayUsers = (users, UserListItem) => {
	// Get list element to insert user items
	const userList = document.getElementsByClassName("user-list")[0];
	let usersHTML = "";
	// Create a user component for every user
	users.forEach((e) => {
		usersHTML += UserListItem(
			e.index,
			e.username,
			e.firstName,
			e.lastName,
			e.image
		);
	});
	// Insert HTML into list element
	userList.innerHTML = usersHTML;
	const listElements = userList.children;
	// Add button event listener to every view button in the list
	for (let i = 0; i < listElements.length; i++) {
		const button = listElements[i].getElementsByTagName("button")[0];
		button.addEventListener("click", (e) => viewHandler(e, i));
	}
};
