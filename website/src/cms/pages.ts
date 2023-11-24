import {Page} from "@/payload-types";
import qs from "qs";

export async function getPageById(id: string) : Promise<Page>{
	const result = await fetch({
		url: `${process.env.CMS_API_URL}/pages/${id}`,
		method: "GET"
	});

	// validate & return
	const json = await result.json();
	//console.log(`${process.env.CMS_API_URL}/pages/${id}`, JSON.stringify(json));
	return json;
}

export async function getPageBySlug(slug: string) : Promise<Page>{
	const query = qs.stringify({ where: { slug: { equals: slug } } }, { addQueryPrefix: true });
	const result = await fetch({
		url: `${process.env.CMS_API_URL}/pages${query}`,
		method: "GET"
	});

	// validate & return
	const json = await result.json();
	//console.log(`${process.env.CMS_API_URL}/pages${query}`, json);
	return json;
}
