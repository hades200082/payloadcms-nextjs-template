import {CollectionConfig} from "payload/types";

export const HeroImages: CollectionConfig = {
	slug: "hero-images",
	admin:{
		group: "Media Library"
	},
	access: {
		read: () => true,
	},
	upload: {
		crop: true,
		focalPoint: true,
		imageSizes: [
			{
				name: "thumbnail",
				width: 400,
				height: 300,
				position: "center"
			},
			{
				name: "xs",
				width: 480,
				position: "center"
			},
			{
				name: "sm",
				width: 640,
				position: "center"
			},
			{
				name: "md",
				width: 800,
				position: "center"
			},
			{
				name: "lg",
				width: 1200,
				position: "center"
			},
			{
				name: "xl",
				width: 2600,
				position: "center"
			}
		],
		mimeTypes: ["image/*"]
	},
	fields:[]
};

export const SeoImages: CollectionConfig = {
	slug: "seo-images",
	admin:{
		group: "Media Library"
	},
	access: {
		read: () => true,
	},upload: {
		crop: true,
		focalPoint: true,
		adminThumbnail: "thumbnail",
		imageSizes: [
			{
				name: "thumbnail",
				width: 400,
				height: 300,
				position: "center"
			},
			{
				name: "xs",
				width: 480,
				position: "center"
			},
			{
				name: "sm",
				width: 640,
				position: "center"
			},
			{
				name: "md",
				width: 800,
				position: "center"
			},
			{
				name: "lg",
				width: 1200,
				position: "center"
			},
			{
				name: "xl",
				width: 2600,
				position: "center"
			}
		],
		mimeTypes: ["image/*"]
	},
	fields:[
		{
			type: "text",
			name: "alt",
			label: "Alt text"
		}
	]
};
