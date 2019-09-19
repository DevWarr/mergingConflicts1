import React from "react"
import styled from "styled-components"

const CardContainer = styled.div`
    background: black;
    width: 400px;
    margin: 20px auto;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 5px 5px #555555;
    * {
        color: white;
        font: 1.1rem;
    }
`;


const Card = (props) => {
    return (
        <CardContainer>
            <h1>{props.firstName + " " + props.lastName}</h1>
            <p>Id: {props.id}</p>
        </CardContainer>
    )
}

export default Card;