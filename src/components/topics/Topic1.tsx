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
  margin-bottom: 500px;

`;

const Header = styled.h1`
  margin:0;
  padding: 16px 16px;
  color: white;
  font-size: 20px;
  min-height: 9vh;


`;

const Body = styled.div`
  
  margin:0;
  padding: 150px 150px;
  color: white;
  margin-left: 100px;
  margin-right: 100px;
  font-size: 20px;
  border-radius: 30px;
  position: relative;
  box-shadow: 0px     0px 30px #e70404;
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
                  <h1>New information upload</h1>
                  <p>
                    Rules 
                  </p>
                  <Button>See Rules</Button>
                  <p>
                    Application
                  </p>
                  <Button>apply rules</Button>
                  <p>
                    Results
                  </p>
                  <Button>Score</Button>
                </Body>
            </TagComponent>

        )
    }
}

export default Topic1;