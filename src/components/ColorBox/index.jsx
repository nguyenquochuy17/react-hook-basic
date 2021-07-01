import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {

};
function getRandomColor() {
    const colorList = ["deeppink", "green", "yellow", "black", "blue"]
    var randomIndex = Math.trunc(Math.random() * 5)
    return colorList[randomIndex]
}
function ColorBox(props) {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem("box-color") || "deeppink"
        console.log(initColor)
        return initColor
    });
    console.log("Color Box")
    function handleBoxClick() {
        var newColor = getRandomColor()
        setColor(newColor)
        localStorage.setItem("box-color", newColor)
    }
    return (

        <div className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}>
            Color Box
        </div>
    );
}

export default ColorBox;