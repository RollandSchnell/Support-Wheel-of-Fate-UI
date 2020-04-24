import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';


import IndexPage from './components/pages/landing-page';

const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <div className="container">
                <Switch>
                    <Route path='/' component={IndexPage} exact={true}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Fragment>
    </BrowserRouter>);

export default AppRouter;