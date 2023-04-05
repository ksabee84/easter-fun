import "./card.css";
import "./flip-transition.css";
import { useState } from "react";
import { poems, imgUrls } from "../../data";

const Card = ({ onClick }) => {
    const [activePoem, setActivePoem] = useState(0);
    const [activeBg, setActiveBackground] = useState(0);

    const randomPoems = () => {
        const randomPoem = (Math.floor(Math.random() * poems.length));
        setTimeout(() => {
            setActivePoem(randomPoem);
        }, 300);
    };

    const randomBackgrounds = () => {
        const randomBackground = (Math.floor(Math.random() * imgUrls.length));
        setTimeout(() => {
            setActiveBackground(randomBackground);
        }, 1000);
    };

    return(
        <div className="card shadow-5" onClick={() => onClick()}>
            <div className="card-back f3 lh-copy pa3" key={activePoem}>
                {poems[activePoem].poem}
            </div>
            <div className="card-front" key={activeBg} onClick={() => {randomPoems(); randomBackgrounds();}}>
                {<img src={imgUrls[activeBg].imgUrl} alt="easter bunny"/>}
            </div>
        </div>
    );
}

export default Card;