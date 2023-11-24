import getCmsSettings from "@/cms/settings";
import BlockRenderer from "@/components/BlockRenderer";

export default async function Page() {
	const setting = await getCmsSettings({depth: 2});
	const page = setting.defaults.mainIndex?.value;

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<BlockRenderer blocks={page.content.blockContent} />
		</main>
	);
}
