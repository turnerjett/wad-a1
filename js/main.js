import {
	searchChangeHandler,
	searchFocusHandler,
	overlayClickHandler,
} from "./handlers.js";
import { filterUsers } from "./filter.js";
import UserListItem from "./UserListItem.js";
import { displayUsers } from "./displayUsers.js";

// API URL for random user info
let URL = "https://dummyjson.com/users";

// Function to retrieve list of random users from API
const getUsers = async () => {
	// Retrieve data
	const res = await fetch(URL);
	// Convert data to JSON
	const json = await res.json();
	// Return the JSON object
	return json;
};

//Function to insert users into the html list element on page load
const insertUsers = async () => {
	// Retrieve data using getUsers function
	const userData = await getUsers();
	// Set value to the retrived object
	const users = userData.users;
	// Add index to users (Used for assigning banner gradient)
	const usersIndexed = users.map((user, i) => {
		user.index = i;
		return user;
	});
	// Call function to display users to the page
	displayUsers(usersIndexed, UserListItem);
};
insertUsers();

// Setup event listeners and link them to handler functions
const searchBar = document.getElementById("search");
searchBar.addEventListener("change", (e) =>
	searchChangeHandler(e, filterUsers, getUsers, UserListItem)
);
searchBar.addEventListener("focus", searchFocusHandler);
const overlay = document.getElementsByClassName("overlay-background")[0];
overlay.addEventListener("click", overlayClickHandler);
