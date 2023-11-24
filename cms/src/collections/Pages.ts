import { CollectionConfig } from "payload/types";
import {SlugField} from "@nouance/payload-better-fields-plugin";
import BlockBody from "../fields/BlockBody";

const Pages: CollectionConfig = {
	slug: "pages",
	labels: {
		plural: "Pages",
		singular: "Page",
	},
	admin: {
		useAsTitle: "title",
		group: "Content",
		defaultColumns: ["title", "slug", "summary", "createdAt"]
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					name: "content",
					label: "Content",
					fields: [
						BlockBody
					],
				}
			]
		},
		{
			type: "text",
			name: "title",
			label: "Title",admin: {
				position: "sidebar",
			}
		},
		{
			type: "textarea",
			name: "summary",
			label: "Summary",
			admin: {
				position: "sidebar",
				description: "A simple summary of the page, mainly to be used in SEO but may also be used elsewhere."
			}
		},
		...SlugField(
			{
				name: "slug",
				label: "Slug",
				admin: {
					position: "sidebar",
					description: "The slug is typically used in URLs on websites.",
				}
			},
			{
				useFields: ["title"],
				appendOnDuplication: true,
			}
			,{
				enable: true,
			}
		),
	]
};

export default Pages;
