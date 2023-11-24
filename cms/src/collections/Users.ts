import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
	slug: "users",
	auth: true,
	admin: {
		useAsTitle: "email",
		group: "Configuration"
	},
	fields: [
		// Email added by default
		// Add more fields as needed
	],
};

export default Users;
