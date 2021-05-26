import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Weather from './components/index'





export default class App extends Component {
    render(){return(
        <BrowserRouter>
            <Switch>
                <Route path = '/weather' component = {Weather}/>
            </Switch>
        </BrowserRouter>
    )}
}