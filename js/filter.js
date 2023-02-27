import { displayUsers } from "./displayUsers.js";
import UserListItem from "./UserListItem.js";

// Function to filter users based on search input
export const filterUsers = async (search, getUsers) => {
	// Get users from API
	const userData = await getUsers();
	const users = await userData.users;
	// Add index to users (Used for assigning banner gradient)
	const usersIndexed = users.map((user, i) => {
		user.index = i;
		return user;
	});
	// Filter users based on search input
	const filteredUsers = usersIndexed.filter((user, i) => {
		return user.username.startsWith(search);
	});
	//Display filtered users to the page
	displayUsers(filteredUsers, UserListItem);
};
