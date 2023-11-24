import {Block} from "payload/types";

const Hero: Block = {
	slug: "hero",
	labels: {
		plural: "Hero banners",
		singular: "Hero banner"
	},
	imageURL: "/built-in/block-thumbnails/hero.png",
	fields: [
		{
			name: "type",
			label: "Container type",
			type: "radio",
			defaultValue: "basic",
			options: [
				{ label: "Basic", value: "basic" },
				{ label: "Image", value: "image" },
			],
		},
		{
			name: "image",
			label: "Image",
			type: "upload",
			relationTo: "hero-images",
			admin: {
				condition: (data, siblingData) => {
					return siblingData.type === "image";
				}
			}
		}
	]
};
