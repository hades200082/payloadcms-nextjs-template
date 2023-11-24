import {GlobalConfig} from "payload/types";

const Settings: GlobalConfig = {
	slug: "settings",
	admin: {
		group: "Configuration"
	},
	access:{
		read: () => true,
	},
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					name: "defaults",
					label: "Defaults",
					fields: [
						{
							name: "mainIndex",
							label: "Home page",
							type: "relationship",
							relationTo: ["pages"]
						}
					]
				}
			]
		}
	]
};

export default Settings;
