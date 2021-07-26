import * as React from "react";
import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: relative;
    font-weight: bold;
    text-align: center;
   
    display: block;
    width:100%;
    background-color: #111110;
   
    padding-top:50px;
    height: 200px;
    margin-top: 500px;

    box-sizing: border-box;
    
   
`;

const Row = styled.div`
  &::after {
      content: "";
      clear: both;
      display: table;
  }
`;

const Column = styled.div`
float: left;
width: 33.33%;
font-weight: normal;
font-size: 12px;


`;


const Footer = () =>
    <StyledFooter>
        <Row>
        <Column>Testing 1</Column>
        <Column>Testing 2</Column>
        <Column>Testing 3</Column>
        </Row>
        <p>&copy; 2021 82 Learn Pty Ltd</p>
   
 


    </StyledFooter>
    

export default Footer;