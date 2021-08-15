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

function GetCars() {
    fetch('http://localhost:3000/cars')
        .then(response => {
            return response.text();
        })

}


class Cars extends React.Component {
    render() {
        return (
            <TagComponent>
                <Header><h1>Cars</h1></Header>
                  <div>
                    <form method="GET" action="GetCars">
                        <div>
                            <label>Cars Make</label>
                            <p>
                                <strong>{'id'}</strong>
                            </p>
                        </div>
                    </form>
                  </div>
            
            </TagComponent>

        )
    }
}

export default Cars;