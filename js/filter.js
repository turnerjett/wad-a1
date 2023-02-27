import { displayUsers } from "./displayUsers.js";
import UserListItem from "./UserListItem.js";

export const filterUsers = async (search, getUsers) => {
	const userData = await getUsers();
	const users = await userData.users;
	const filteredUsers = users.filter((user) =>
		user.username.startsWith(search)
	);

	displayUsers(filteredUsers, UserListItem);
};
