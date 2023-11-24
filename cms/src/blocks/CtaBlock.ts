import {Block} from "payload/types";
import Link from "../fields/Link";

const CtaBlock: Block = {
	slug: "cta",
	labels: {
		plural: "CTAs",
		singular: "CTA"
	},
	imageURL: "/block-thumbnails/cta.png",
	fields: [
		{
			type: "array",
			name: "links",
			label: "Links",
			admin: {
				description: "Add one or more links for the CTA."
			},
			minRows: 1,
			maxRows: 3,
			fields: [
				Link({overrides: {admin: { hideGutter: true }}})
			]
		}
	]
};

export default CtaBlock;
