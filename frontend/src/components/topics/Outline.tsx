import * as React from "react";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import Topic1 from "./Topic1";

const TagComponent = styled.div`
  width:100%;
  padding: 80px 16px;
  margin: 0px auto;
  box-sizing: border-box;
  color: white;
  text-align: center;
  margin-top:-18px;
  
`;

const Header = styled.h1`
  margin:0;
  padding: 16px 16px;
  color: white;
  font-size: 20px;
  min-height: 10vh;
  


`;

const Tiles1 = styled.div`
  display: block;
  margin:0;
  padding: 100px 100px;
  color: white;
  font-size: 20px;
  min-height: 10vh;
  border-radius: 10px;
  position: absolute;
  background-color: black;
  box-shadow: 0px 0px 50px #FF6600;

  &:hover {
      background-color: #0b1b22;
      border-radius: 10px;
      box-shadow: 0px 50px 50px red;
      cursor: pointer;
      
      
  }
  
`;
const Tiles2 = styled.div`
  
  margin-left: 400px;
  padding: 100px 100px;
  color: white;
  font-size: 20px;
  min-height: 10vh;
  border-radius: 10px;
  position: absolute;
  background-color: black;
  box-shadow: 0px 0px 50px #FF6600;

  &:hover {
      background-color: #0b1b22;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0px 50px 50px red;
  }
  
`;

const Tiles3 = styled.div`
  
  margin-left: 800px;
  padding: 100px 100px;
  color: white;
  font-size: 20px;
  min-height: 10vh;
  border-radius: 10px;
  position: absolute;
  background-color: black;
  box-shadow: 0px 0px 50px #FF6600;
  
  &:hover {
      background-color: #0b1b22;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0px 50px 50px red;
  }
`;

const Body = styled.div`
  
  margin:0;
  padding: 1px 1px;
  color: white;
  font-size: 20px;
  min-height: 70vh;
  border-radius: 30px;
  position: relative;
 
`;


class Outline extends React.Component {
    render() {
        return (
            <TagComponent>
                <Header><h1>Topics</h1></Header>
                <Body>
                <Tiles1 onClick={event => window.location.href = '/topic1'}>
                  <h3>TOPIC 1</h3>
                </Tiles1>
                <Tiles2>
                  <h3>TOPIC 2</h3>
                </Tiles2>
                <Tiles3>
                  <h3>TOPIC 3</h3>
                </Tiles3>
                </Body>
            </TagComponent>

        )
    }
}

export default Outline;

