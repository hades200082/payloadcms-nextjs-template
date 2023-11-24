import {cn} from "@/utils/tailwindUtils";
import BlockRenderer from "@/components/BlockRenderer";

export default function Container({model}){
	switch(model.type){
		case "normal":
			return <div className={cn("container")}>
				<BlockRenderer blocks={model.content} />
			</div>;
		case "narrow":
			return <div className={cn("container w-2/3")}>
				<BlockRenderer blocks={model.content} />
			</div>;
		case "full":
			return <div className={cn("w-full")}>
				<div className={cn("container")}>
					<BlockRenderer blocks={model.content} />
				</div>
			</div>;
		case "columns":
			return <div className={cn("container sm:flex-none flex-auto flex-row")}>
				{model.columns?.map((col, i) => {
					if (col.widthPercent) {
						return (<div key={i} className={cn("cms-column", `w-[${col.widthPercent}%]`)}>
							<BlockRenderer blocks={col.content}/>
						</div>);
					}
					else{
						return (<div key={i} className={cn("cms-column")}>
							<BlockRenderer blocks={col.content}/>
						</div>);
					}
				})}
			</div>;
	}
}
