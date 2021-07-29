import * as React from "react";
import styled from 'styled-components';
import Outline from '../topics/Outline';

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




class Home extends React.Component {
    render() {
        return (
            <TagComponent>
                <Header><h1>Welcome to 82 Learn</h1></Header>
                  <h2>Building a new Human Speed Learning method</h2>
            <Outline />
            </TagComponent>

        )
    }
}

export default Home;