import {Block} from "payload/types";
import {slateEditor} from "@payloadcms/richtext-slate";
import Link from "../fields/Link";

const HeroBlock: Block = {
	slug: "hero",
	labels: {
		plural: "HeroBlock banners",
		singular: "HeroBlock banner"
	},
	imageURL: "/block-thumbnails/hero.png",
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
			required: true
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
		},
		{
			name: "heading",
			type: "text",
			maxLength: 200,
			required: true
		},
		{
			name: "leadText",
			type: "richText",
			editor: slateEditor({
				admin:{
					elements: ["link"],
					leaves: ["bold", "italic", "underline", "strikethrough"]
				}
			})
		},
		{
			name: "links",
			type: "array",
			minRows: 0,
			maxRows: 2,
			fields: [
				Link({overrides: {admin: { hideGutter: true }}})
			]
		}
	]
};

export default HeroBlock;
