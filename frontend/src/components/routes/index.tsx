import * as React from "react";
import {  Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Topic1 from '../topics/Topic1';


class Routes extends React.Component {
    render() {
        return (
            <Switch>
            <Route path="/" exact component={Home}/>
             <Route path="/home" component={Home}/>
             <Route path="/topic1" component={Topic1}/>
             <Route component={NotFound}/>
         </Switch>
        )
    };
}

export default Routes;