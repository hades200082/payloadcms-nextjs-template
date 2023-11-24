import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import seo from "@payloadcms/plugin-seo";
import Pages from "./collections/Pages";
import {HeroImages, SeoImages} from "./collections/MediaLibrary";
import {cloudStorage} from "@payloadcms/plugin-cloud-storage";
import {azureBlobStorageAdapter} from "@payloadcms/plugin-cloud-storage/azure";

const storageAdapter = azureBlobStorageAdapter({
	connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING,
	containerName: process.env.AZURE_STORAGE_CONTAINER_NAME,
	allowContainerCreate: process.env.AZURE_STORAGE_ALLOW_CONTAINER_CREATE === "true",
	baseURL: process.env.AZURE_STORAGE_ACCOUNT_BASEURL,
});

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
	},
	editor: slateEditor({}),
	collections: [
		// configuration
		Users,
  
		// content
		Pages,
  
		// media
		HeroImages,
		SeoImages
	],
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts"),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
	},
	plugins: [
		payloadCloud(),
		cloudStorage({
			collections: {
				"hero-images": {
					disableLocalStorage: true,
					disablePayloadAccessControl: true,
					prefix: "hero-images",
					adapter: storageAdapter, // see docs for the adapter you want to use
				},
				"seo-images": {
					disableLocalStorage: true,
					disablePayloadAccessControl: true,
					prefix: "seo-images",
					adapter: storageAdapter, // see docs for the adapter you want to use
				},
			},
   
		}),
		seo({
			collections: [
				"pages",
			],
			uploadsCollection: "seo-images",
			tabbedUI: true,
		 
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			generateTitle: ({ doc }) => `${doc.title.value} | Lee Conlin`,
		
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			generateDescription: ({ doc }) => doc.summary,
		})
	],
	db: mongooseAdapter({
		url: process.env.DATABASE_URI,
	}),
});
