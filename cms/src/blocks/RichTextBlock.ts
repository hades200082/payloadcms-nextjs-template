import {Block} from "payload/types";
import {slateEditor} from "@payloadcms/richtext-slate";

const RichTextBlock: Block = {
	slug: "richText",
	labels: {
		plural: "Rich text",
		singular: "Rich text"
	},
	imageURL: "/block-thumbnails/rich-text.png",
	fields: [
		{
			name: "content",
			label: "Content",
			type: "richText",
			editor: slateEditor({
				admin: {
					elements: ["h2","h3","h4","h5","h6","blockquote","link","ol","ul","textAlign","indent"],
					leaves: ["bold","italic","underline","strikethrough"]
				}
			}),
			required: true
		}
	]
};

export default RichTextBlock;
