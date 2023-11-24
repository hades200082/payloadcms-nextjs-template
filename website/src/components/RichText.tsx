import escapeHTML from "escape-html";
import {cn} from "@/utils/tailwindUtils";
import {Fragment} from "react";

type Node = {
	type: string
	value?: {
		url: string
		alt: string
	}
	children?: Node[]
	url?: string
	[key: string]: unknown
	newTab?: boolean
}

const isText = (value: any): boolean =>
	typeof value === "object" && value !== null && typeof value.text === "string";

export default function RichText({content, className=""}){
	return (
		<div className={`rich-text ${className}`}>
			{content?.map((node, i) => {
				if(isText(node)) {
					const text = escapeHTML(node.text);
					const elem = <span className={
						cn(
							{
								"font-bold": node.bold,
								"italic": node.italic,
								"underline": node.underline,
								"line-through": node.strikethrough,
								"font-mono p-0.5 bg-slate-500 rounded-sm border-slate-400": node.code
							}
						)
					} dangerouslySetInnerHTML={{__html: text}} />;

					return <Fragment key={i}>{elem}</Fragment>;
				}

				if(!node) return null;

				switch(node.type){
					case "h1":
						return <h1 key={i}><RichText content={node.children} /></h1>;
					case "h2":
						return <h2 key={i}><RichText content={node.children} /></h2>;
					case "h3":
						return <h3 key={i}><RichText content={node.children} /></h3>;
					case "h4":
						return <h4 key={i}><RichText content={node.children} /></h4>;
					case "h5":
						return <h5 key={i}><RichText content={node.children} /></h5>;
					case "h6":
						return <h6 key={i}><RichText content={node.children} /></h6>;
					case "blockquote":
						return <blockquote key={i}><RichText content={node.children} /></blockquote>;
					case "ul":
						return <ul key={i}><RichText content={node.children} /></ul>;
					case "ol":
						return <ol key={i}><RichText content={node.children} /></ol>;
					case "li":
						return <li key={i}><RichText content={node.children} /></li>;
					case "link":
						return <span>Link: <RichText content={node.children} /></span>;
					default:
						return <p key={i}><RichText content={node.children} /></p>;
				}
			})}
		</div>
	);
}
