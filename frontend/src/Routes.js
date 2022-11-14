import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Clients from "./components/Clients";
import AddClient from "./components/AddClient";
import EditClient from "./components/EditClient";
import App from "./components/App";

const Routes = () => {
    <Switch>
        <Route exact path='/'>
            <Clients/>
        </Route>

        <Route exact path='/clients'>
            <Clients/>
        </Route>

        <Route exact path='/clients/new'>
            <AddClient/>
        </Route>
        <Route exact path='/clients/:id/edit'>
            <EditClient/>
        </Route>
    </Switch>
}
export default Routes