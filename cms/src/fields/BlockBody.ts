import {Field} from "payload/types";
import ContainerBlock from "../blocks/ContainerBlock";
import Blocks from "../blocks";

const BlockBody: Field = {
	type: "blocks",
	name: "blockContent",
	label: "Body content",
	admin: {
		description: "Add blocks below to build the page."
	},
	blocks: [
		...Blocks,
		ContainerBlock
	],
};

export default BlockBody;
