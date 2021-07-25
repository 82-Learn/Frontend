import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Home from './/pages/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import {GlobalStyle} from '../components/App.styles';



function App() {
    return (
        <div>
          <GlobalStyle />
            <Layout>
              <Router>
                <Switch>
                   <Route path="/" exact component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route component={NotFound}/>
                </Switch>
              </Router>
          </Layout>
      </div>
    );
}

export default App;

