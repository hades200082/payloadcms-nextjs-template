import RichText from "@/components/RichText";
import Hero from "@/components/blocks/Hero";
import Container from "@/components/blocks/Container";
import Image from "@/components/blocks/Image";

type Block<T> = T & {
	id?:string|null,
	blockType:string,
	blockName:string|null
}

export type BlockRendererParams = {
	blocks: Block<unknown>[]
}

export default function BlockRenderer({blocks}:BlockRendererParams) {
	return (
		<>
			{ blocks.map(block => {
				return (
					<>
						{
							{
								"hero": <Hero model={block}/>,
								"image": <Image model={block} />,
								"richText": <RichText content={block.content}/>,
								"container": <Container model={block} />
							}[block.blockType]
						}
					</>
				);
			})}
		</>
	);
}
