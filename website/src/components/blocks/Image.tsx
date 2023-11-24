import NextImage from "next/image";
export default function Image({model}){
	return (
		<NextImage src={model.image.url} alt={model.image.alt} width={model.image.width} height={model.image.height} loading="lazy"  />
	);
}
