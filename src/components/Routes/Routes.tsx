import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import { Allerts } from '../../pages/Allerts';
import { Dashboard } from '../../pages/Dashboard';
import { Sequence } from '../../pages/Sequence';
import { Stuff } from '../../pages/Stuff';

export const Routes = () => {
    return (
        <div className="content">
            <Switch>
                <Route path={'/dashboard'}>
                    <Dashboard/>
                </Route> 
                <Route path={'/stuff'} >
                    <Stuff/>
                </Route>
                <Route path={'/allerts'} >
                    <Allerts/>
                </Route>
                <Route path={'/sequence'}>
                    <Sequence/>
                </Route>
                <Redirect to={'/dashboard'} />
            </Switch>
        </div>
    );
}
