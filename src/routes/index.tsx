import { Switch } from 'react-router-dom';

import { SignIn } from '../Pages/SignIn';
import { SignUp } from '../Pages/SignUp';
import { Dashboard } from '../Pages/Dashboard';

import { Route } from './Route';

export function AppRoutes() {
    return (
        <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/Dashboard" component={Dashboard} isPrivate/>
        </Switch>
    )
}