import * as React from "react";
import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: relative;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin: 0 auto;
    display: block;
    top: 60vh;
    background-color: #111110;
    
`;

const StyledFooter2 = styled.footer`
    font-size:10px;
`;

const Footer = () =>
    <StyledFooter>
        <p>&copy; 2021 82 Learn Pty Ltd</p>
    <StyledFooter2>
        <p>Extra information needed to know</p>
        <p>Extra information needed to know</p>
        <p>Extra information needed to know</p>
        <p>Extra information needed to know</p>
        <p>Extra information needed to know</p>
        <p>Extra information needed to know</p>
        <p>Extra information needed to know</p>
        <p>Extra information needed to know</p>
    </StyledFooter2>
    </StyledFooter>
    

export default Footer;