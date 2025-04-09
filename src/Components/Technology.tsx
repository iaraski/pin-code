import React, {JSX} from "react";

interface block {
    id?: string,
    content:JSX.Element,
    image?: string,
    Num?: string,
}

interface technologyProps{
    className: "Technology"| "PathDevelopment",
    blocks: block[],
}


const Technology: React.FC<technologyProps> = ({className,blocks}) => {
    return(
        <div className={className} data-blocks-count={blocks.length}>
            {blocks.map((block, index) => {
                const areaName = String.fromCharCode(97 + index);
                return (
                    <div key={block.id} className={className + "__item__" + areaName}>
                        {block.image ? <img src={block.image} alt="Image" /> : <h3>{block.Num}</h3>}
                        <div>
                            {block.image}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Technology