import * as React from "react";
import styled from 'styled-components';


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

const Body = styled.div`
  
  margin:0;
  padding: 1px 1px;
  color: white;
  font-size: 20px;
  min-height: 70vh;
  border-radius: 30px;
  position: relative;
  box-shadow: 0px     0px 30px #c94001;
  background-color: black;
`;

const Button = styled.button`
font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: #d53838;
  color: white;
`;


class Topic1 extends React.Component {
    render() {
        return (
            <TagComponent>
                <Header><h1>Topic 1</h1></Header>
                <Body>
                  <p>
                    Rules 
                  </p>
                  <Button>See Rules</Button>
                  <p>
                    Application
                  </p>
                  <Button>See Rules</Button>
                  <p>
                    Results
                  </p>
                  <Button>See Rules</Button>
                </Body>
            </TagComponent>

        )
    }
}

export default Topic1;