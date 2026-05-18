import React from 'react';

import { Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Mario from '../pages/repository/mario';
import Luigi from '../pages/repository/luigi';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/repository/mario.tsx" component={Mario} />
        <Route path="/repository/luigi.tsx" component={Luigi} />
    </Switch>
);

export default Routes;
