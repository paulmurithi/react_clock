import { Route, Switch } from 'react-router-dom';
import Home from '../../containers/Home';
import Login from '../../containers/Login';
import React, { Component } from 'react'
import Error from '../../containers/Error';
import Register from '../Signup/Register';

export default class Routes extends Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/login" component={ Login } />
                <Route exact path="/signup" component={ Register } />

                {/* <Route exact path="/posts" component={ CommercialHouses } />
                <Route exact path="/posts/:id" component={SingleHouse} /> */}

                <Route exact component={ Error } />
            </Switch>
        )
    }
}