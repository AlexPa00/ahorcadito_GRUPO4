import React from "react";
import styled from "styled-components";

const TokenStyled = styled.div`
padding:100px;
position:relative;
left:17%;
   width: 600px; 
     height: 600px; 
     border: 3px solid #555;
     border-radius: 600px;
     display:grid;
     justify-content:center;

img{
    height:300px;
    width:300px;
    position:relative;
    left:30%;
}
span{
    font-size:50px;
    margin-left:40px;
    position:relative;
    left:25%;
}
.botton{
    padding:20px 0;
}
button{
    padding:0 10px;
    margin:20px;
}



`

function Token(){

    return(
        <TokenStyled >   
            <div>
                <img src="./img/ahorcadito.gif" alt=""/>
            </div>     
                <div className="word">
                <span>_</span>
                <span>_</span>
                <span>_</span>
                <span>_</span>
                </div> 

                    <div className="botton">
                    <button>A</button>
            <button>B</button>
            <button>C</button>
            <button>D</button>
            <button>E</button>
            <button>F</button>
            <button>G</button>
            <button>H</button>
            <button>I</button>
            <button>J</button>
            <button>K</button>
            <button>L</button>
            <button>M</button>
            <button>N</button>
            <button>O</button>
            <button>P</button>
            <button>Q</button>
            <button>R</button>
            <button>S</button>
            <button>T</button>
            <button>U</button>
            <button>V</button>
            <button>W</button>
            <button>X</button>
            <button>Y</button>
            <button>Z</button>
            </div>

            
           
        </TokenStyled>

    )

}

export default Token