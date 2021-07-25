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
  box-shadow: 0px     0px 30px orange;
  
`;



class Outline extends React.Component {
    render() {
        return (
            <TagComponent>
                <Header><h1>Learning Process</h1></Header>
                <Body>
                  <p>
                    Rules 
                  </p>
                  <button>See Rules</button>
                  <p>
                    Application
                  </p>
                  <button>See Example</button>
                  <p>
                    Results
                  </p>
                  <button>See Results</button>
                </Body>
            </TagComponent>

        )
    }
}

export default Outline;