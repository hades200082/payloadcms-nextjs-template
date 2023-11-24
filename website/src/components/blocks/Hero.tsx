import RichText from "@/components/RichText";

export default function Hero({model}){
	return (
		<div>
			<h1>{model.heading}</h1>
			{model.leadText && <RichText content={model.leadText} />}
			{model.image && <div>Image included</div>}
		</div>
	);
}
