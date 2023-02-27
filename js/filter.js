import { displayUsers } from "./displayUsers.js";
import UserListItem from "./UserListItem.js";

export const filterUsers = async (search, getUsers) => {
	const userData = await getUsers();
	const users = await userData.users;
	const usersIndexed = users.map((user, i) => {
		user.index = i;
		return user;
	});
	const filteredUsers = usersIndexed.filter((user, i) => {
		return user.username.startsWith(search);
	});

	displayUsers(filteredUsers, UserListItem);
};
