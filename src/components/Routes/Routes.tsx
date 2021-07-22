import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {AppPages} from '../../routes/index';


export const Routes = () => {
    return (
        <main className="content">
            <Switch>
                <Route path={AppPages['/dashboard'].route}>
                    {
                        AppPages['/dashboard'].component
                    }
                </Route> 
                <Route path={AppPages['/stuff'].route} >
                    {
                        AppPages['/stuff'].component
                    }
                </Route>
                <Route path={AppPages['/allerts'].route} >
                    {
                        AppPages['/allerts'].component
                    }
                </Route>
                <Route path={AppPages['/sequence'].route}>
                    {
                        AppPages['/sequence'].component
                    }
                </Route>
                <Redirect to={'/dashboard'} />
            </Switch>
        </main>
    );
}
