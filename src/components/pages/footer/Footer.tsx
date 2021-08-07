import * as React from "react";
import styled from 'styled-components';
import LogoSrc from './images/logo1.png';

const StyledFooter = styled.div`
  padding: 0;
  background-color: rgb(19, 19, 18);
  position: relative;
  bottom: 0px;
  width: 100%;
  font-family: sans-serif;
  height:400px;
  clear: both;
  z-index:10;
  
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;


`;

const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    `;

const FooterLink = styled.a`
  color: white;
  margin-bottom: 20px;
  font-size:18px;
  text-decoration: none;
   
  &:hover {
    
      background-color: #FF6600;
      border-radius: 10px;
      box-shadow: 0px 50px 50px red;
  }
`;

const BottomFooter = styled.p`

    min-height: 1vh;
    margin-top: 9em;
`;

const Logo = styled.img`
    position: absolute;
    width: 250px;
    height: 200px;
    top: 60px;
    left: 2px;
    background-color: #FF6600;
    border-radius: 30px;
    
`;

const Footer = () =>
    <StyledFooter>
      <Container>
        <Row>
          <Column>
          <Heading>About 82</Heading>
          <FooterLink onClick={event => window.location.href = '/aim'}>Aim for 82 Learn</FooterLink>
          </Column>
          <Column>
            <Heading>Contact 82</Heading>
            <FooterLink onClick={event => window.location.href = '/contact'}>82 Learn @</FooterLink>
          </Column>
          <Column>
            <Heading>Sign Up</Heading>
            <FooterLink onClick={event => window.location.href = '/signup'}>Sign up</FooterLink>
            <FooterLink onClick={event => window.location.href = '/login'}>Login</FooterLink>
          </Column>
        </Row>
        <BottomFooter>
        <p>Copyright &copy; 2021 82 Learn Pty Ltd</p>
        </BottomFooter>
        <Logo src={LogoSrc} alt="logo"/>
      </Container>
    </StyledFooter>
    

export default Footer;
