import {Block} from "payload/types";
import Link from "../fields/Link";

const ImageBlock: Block = {
	slug: "image",
	labels: {
		plural: "Images",
		singular: "Image"
	},
	imageURL: "/block-thumbnails/image.png",
	fields: [
		{
			name: "image",
			type: "upload",
			relationTo: "content-images",
			label: "Image",
			required: true,
			maxDepth: 2
		},
		{
			name: "includeLink",
			label: "Include link?",
			type: "checkbox",
			defaultValue: false,
		},
		Link({
			overrides: {
				name: "link",
				label: "Image link",
				admin: {
					condition: (data, siblingData) => siblingData.includeLink
				}
			}
		})
	]
};

export default ImageBlock;
