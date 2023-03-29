import React, { useState } from "react";

export default function Card({ frontSide, backSide }) {
    const [isFront, setIsFront] = useState(true);

    function handleClick() {
        setIsFront(oldState => !oldState);
    }

    const content = isFront ? frontSide : backSide;
    const sideClass = isFront ? "front" : "back";
    const classList = `card ${sideClass}`;

    return(
        <div className={classList} onClick={handleClick}>
            {content}
        </div>
    );
}