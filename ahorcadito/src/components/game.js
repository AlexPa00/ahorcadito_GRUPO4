import React from "react";
import styled from "styled-components";
import Token from "./token";


const GameStyled = styled.div`
display: flex;



`



function Game(){
    return(
    <GameStyled>           
        <Token/>
    </GameStyled>

    )

}

export default Game