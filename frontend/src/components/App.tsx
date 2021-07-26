import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Home from './/pages/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Topic1 from "./topics/Topic1";
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
                    <Route path="/topic1" component={Topic1}/>
                    <Route component={NotFound}/>
                </Switch>
              </Router>
          </Layout>
      </div>
    );
}

export default App;

