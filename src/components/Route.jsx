import React from 'react';
import { Switch, Route as RRoute, Redirect } from 'react-router-dom';

import { Results } from '.';

const Route = () => {
    return (
        <div className = 'p-4'>
            <Switch>
                <RRoute exact path = '/'>
                    <Redirect to = '/search' />
                </RRoute>
                <RRoute path = {['/search', '/images', '/news', '/videos']} >
                    <Results />
                </RRoute>
            </Switch>
        </div>
    )
}

export default Route
