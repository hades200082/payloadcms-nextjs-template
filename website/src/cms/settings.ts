import {Setting} from "@/payload-types";

export type settingsOptions = {
	depth: number
} | undefined

export default async function getCmsSettings(options:settingsOptions = undefined) : Promise<Setting>{
	const query = options ? `?depth=${options.depth}` : "";
	const result = await fetch({
		url: `${process.env.CMS_API_URL}/globals/settings${query}`,
		method: "GET",
		cache: "no-store"
	});

	const json = await result.json();
	console.log(`${process.env.CMS_API_URL}/globals/settings${query}`, JSON.stringify(json));
	return json;
}
