import React, {JSX} from "react";
export interface Block {
    id: string;
    title?: string;
    content?: string | JSX.Element;
    blockNum?: string;
    backgroundImage?: string;
}

interface DynamicGridProps {
    blocks: Block[];
    backgroundColor?: string;
    color?: string;
    layout?: "default" | "alternative";
    backgroundColorBlock?: string;
    image?: string;
}




const Infoblock: React.FC<DynamicGridProps> = ({ blocks, backgroundColor, color, backgroundColorBlock, layout,  }) => {
    return (
        <div
            className={`${layout === "alternative" ? "DynamicGrid--alternative" : "DynamicGrid "}`}
            style={{backgroundColor: backgroundColorBlock}}
            data-blocks-count={blocks.length}
        >
            {blocks.map((block, index) => {
                const areaName = String.fromCharCode(97 + index);
                return (
                    <div
                        key={block.id}
                        className={`${layout ==="alternative" ? "DynamicGrid--alternative__item":"DynamicGrid__item" } ${areaName} ${block.backgroundImage ? "DynamicGrid__item_withBg": "" }`}
                        style={{
                            backgroundColor: backgroundColor,
                            color: color,
                            backgroundImage: `url(${block.backgroundImage})`,
                        }}
                    >
                        {block.blockNum && <div className={layout === "alternative" ? "DynamicGrid--alternative__item__numAndLine":"DynamicGrid__item__numAndLine"}><div className="DynamicGrid__line"></div><p>{block.blockNum}</p></div>}
                        <div style={{position: "relative"}}>
                            {block.title && <h3>{block.title}</h3>}
                            {block.content && <p>{block.content}</p>}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};


export default Infoblock;