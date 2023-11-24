import { CollectionConfig } from "payload/types";
import {SlugField} from "@nouance/payload-better-fields-plugin";

const Categories: CollectionConfig = {
	slug: "categories",
	labels: {
		plural: "Categories",
		singular: "Category",
	},
	admin: {
		group: "Taxonomy",
		useAsTitle: "name",
	},
	fields: [
		{
			name: "name",
			type: "text",
			label: "Display name"
		},
		...SlugField(
			{
				label: "Slug",
				name: "slug",
			},
			{
				useFields: ["name"],
				appendOnDuplication: true,
			},
			{
				enable: true
			}
		)
	]
};

export default Categories;
