import React, { useState, useEffect } from 'react';
import randomColor from "randomcolor";


const Paint = () => {
    const [colors, setColors] = useState([]);
    const [activeColor, setActiveColor] = useState(null);
    const getColors = () => {
        const baseColor = randomColor().slice(1);
        fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
            .then((res) => res.json())
            .then((res) => {
                setColors(res.colors.map((color) => color.hex.value));
                setActiveColor(res.colors[0].hex.value);
            });
    };
    useEffect(getColors, [])
    return (
        <div>

        </div>
    )
}

export default Paint;