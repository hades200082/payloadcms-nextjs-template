import {Block} from "payload/types";
import Blocks from "./index";

const ContainerBlock: Block = {
	slug: "container",
	labels: {
		plural: "Containers/Columns",
		singular: "Container/Columns"
	},
	imageURL: "/block-thumbnails/container.png",
	fields: [
		{
			name: "type",
			label: "Container type",
			type: "radio",
			defaultValue: "normal",
			options: [
				{ label: "Normal", value: "normal" },
				{ label: "Narrow", value: "narrow" },
				{ label: "Full", value: "full" },
				{ label: "Columns", value: "columns" },
			],
			required: true
		},
		{
			name: "content",
			label: "Container content",
			type: "blocks",
			minRows: 1,
			blocks: [
				...Blocks
			],
			admin:{
				condition: (data, siblingData) => {
					return siblingData.type !== "columns";
				}
			}
		},
		{
			name: "columns",
			label: "Columns",
			type: "array",
			minRows: 2,
			maxRows: 10,
			admin: {
				condition: (data, siblingData) => {
					return siblingData.type === "columns";
				}
			},
			validate: value => {
				if(value && value.reduce((sum:number, val:number) => sum + (val || 0), 0) > 100)
					return "Total width of all columns must be less than 100%.";
				return true;
			},
			fields: [
				{
					name: "widthPercent",
					label: "Column Width %",
					type: "number",
					min: 10,
					max: 100,
					admin: {
						description: "Columns without a width will be distributed to take the remaining space. On smaller devices width may be ignored and columns may be stacked."
					}
				},
				{
					name: "content",
					label: "Column content",
					type: "blocks",
					minRows: 1,
					blocks: [
						...Blocks
					],
					required: true
				},
			]
		}
	]
};

export default ContainerBlock;
