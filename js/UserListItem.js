// Array of gradients for user banners
const gradients = [
	"linear-gradient(135deg, rgba(255,76,54,1) 0%, rgba(253,187,45,1) 100%)",
	"linear-gradient(135deg, rgba(36,226,30,1) 0%, rgba(45,253,179,1) 100%)",
	"linear-gradient(135deg, rgba(30,164,226,1) 0%, rgba(45,247,253,1) 100%)",
	"linear-gradient(135deg, rgba(140,30,226,1) 0%, rgba(255,116,234,1) 100%)",
];

// Function to generate reusable user component
const UserListItem = (index, username, firstname, lastname, image) => {
	return `
    <li class="user-list-item">
    <div class="user-list-item-banner" style="background:${
			gradients[index % gradients.length]
		};"></div>
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
