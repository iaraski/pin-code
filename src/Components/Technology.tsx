import React, {JSX} from "react";

export interface blockTechnology {
    id?: string,
    content?:JSX.Element,
    image?: string,
    Num?: string,
    title?: string | JSX.Element,
    underline?:boolean,
}

interface technologyProps{
    className: "Technology",
    blocks: blockTechnology[],
}


const Technology: React.FC<technologyProps> = ({className,blocks}) => {
    return(
        <div className={className} data-blocks-count={blocks.length}>
            {blocks.map((block, index) => {
                const areaName = String.fromCharCode(97 + index);
                return (
                    <div key={block.id} className={className + "__item " + areaName}>
                        {block.image && <img src={block.image} alt=""/>}
                        {block.Num && <h3>{block.Num}</h3>}
                        <div>
                            {block.title && <h4>{block.title}</h4>}
                            {block.content && <p>{block.content}</p>}
                        </div>
                        {block.underline && <div className={className + "__underline"}></div>}
                    </div>
                )
            })}
        </div>
    )
}
export default Technology