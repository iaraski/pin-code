import * as React from "react";
import {HorizontalCardProps} from "../interfaces.ts";
import {Link} from "react-router-dom";


const  HorizontalCard: React.FC<HorizontalCardProps> = ({heading, text, bgImage,link})=> {
    return (
        <div className="HorizontalCard" style={{
            backgroundImage: `url(${bgImage})`,
        }}>
            <div className="HorizontalCard__content">
                <div>
                    <h4>{heading}</h4>
                    <p>{text}</p>
                </div>
                <button className="button_white"><Link to ={link}>Узнать больше</Link></button>

            </div>
        </div>
    )
}

export default HorizontalCard;