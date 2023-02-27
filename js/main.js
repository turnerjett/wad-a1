import {
	searchChangeHandler,
	searchFocusHandler,
	overlayClickHandler,
} from "./handlers.js";
import { filterUsers } from "./filter.js";
import UserListItem from "./UserListItem.js";
import { displayUsers } from "./displayUsers.js";

let URL = "https://dummyjson.com/users";
let searchVal = "";

// Function to retrieve list of random users from an API
const getUsers = async () => {
	const res = await fetch(URL);
	const json = await res.json();
	return json;
};

//Function to insert users into the html list element
const insertUsers = async () => {
	const userData = await getUsers();
	const users = userData.users;
	const usersIndexed = users.map((user, i) => {
		user.index = i;
		return user;
	});
	displayUsers(usersIndexed, UserListItem);
};
insertUsers();

const searchBar = document.getElementById("search");
searchBar.addEventListener("change", (e) =>
	searchChangeHandler(e, searchVal, filterUsers, getUsers, UserListItem)
);
searchBar.addEventListener("focus", searchFocusHandler);

const overlay = document.getElementsByClassName("overlay-background")[0];
overlay.addEventListener("click", overlayClickHandler);
