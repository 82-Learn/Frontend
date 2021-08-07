import * as React from "react";
import { FormGroup, Label, Input, Message, Button } from './Loginstyles';
import styled from 'styled-components';

const TagComponent = styled.div`
  width:100%;
  padding: 300px 16px;
  margin: 0px auto;
  box-sizing: border-box;
  color: white;
  text-align: center;
  margin-top:-18px;

`;

const Title = styled.header`
  color: white;
  padding-bottom: 30px;
  font-size: 30px;
  
`;


const Register = () =>

    <div>
        <TagComponent>
          <FormGroup>
            <Title>SignUp</Title>
              <Label>Enter your email:</Label>
                <Input />
                  <Message></Message>
                  <Label>Enter a password</Label>
                <Input />
                  <Message></Message>
                  <Button>Submit</Button>
            </FormGroup>
        </TagComponent>
    </div>

export default Register;
