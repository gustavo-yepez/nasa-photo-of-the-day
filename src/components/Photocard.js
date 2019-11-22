import React from "react";
import styled from 'styled-components';

const PhotoCard = (props) => {
    return(
        <div>
            <h1 style={{ "fontSize": "1.0rem", "color": "white" }}>
                {props.title}
            </h1>
            <h2 style={{ "fontSize": "4.0rem", "color": "red" }}>
                {props.date}
            </h2>
            <img src = {props.url} alt="NASA POTD"/>
        <div>
            <h3 style={{ "fontSize": "1.0rem", "color": "purple" }}>
                Details
            </h3>
            <p style={{ "fontSize": "1.0rem", "color": "white" }}>
            {props.explanation}
            </p>
        </div>
        </div>
    );
};

export default PhotoCard;