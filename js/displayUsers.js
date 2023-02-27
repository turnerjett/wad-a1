import { viewHandler } from "./handlers.js";

export const displayUsers = (users, UserListItem) => {
	const userList = document.getElementsByClassName("user-list")[0];
	let usersHTML = "";
	users.forEach((e, i) => {
		usersHTML += UserListItem(i, e.username, e.firstName, e.lastName, e.image);
	});
	userList.innerHTML = usersHTML;
	const listElements = userList.children;
	for (let i = 0; i < listElements.length; i++) {
		// console.log(listElements[i]);
		const button = listElements[i].getElementsByTagName("button")[0];
		// console.log(button);
		button.addEventListener("click", (e) => viewHandler(e, i));
	}
};
