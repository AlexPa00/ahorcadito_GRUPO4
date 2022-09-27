//import logo from './logo.svg';
//import './src/App.css';
import styled from "styled-components";
import Game from "./game";


const AppStyled = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Rubik+Dirt&display=swap');

body{
  font-family: 'Rubik Dirt', cursive;
 
}
.content-app
{
  box-sizing:border-box;
  min-height: 100vh; 
  padding:2em;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
  `

function App() {
  return (
    <AppStyled>
          <Game />         
    </AppStyled>
  )
}

export default App;