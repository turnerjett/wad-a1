const UserListItem = (username, firstname, lastname, image) => {
	return `
    <li class="user-list-item">
    <div class="user-list-item-content">
        <img src="${image}" style="width:100px;height:100px;"/>
        <div class="user-info-container">
            <h3>@${username}</h3>
            <h3>${firstname} ${lastname}</h3>
        </div>
    </div>
    <button class="view-btn">View Profile</button>
    </li>
    `;
};

export default UserListItem;
