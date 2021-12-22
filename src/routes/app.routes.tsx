import { Switch } from 'react-router-dom';

import { Route } from './Route';
import { TenantTable } from '../Pages/Tenants/Table';
import { TenantForm } from '../Pages/Tenants/Form';
import { Dashboard } from '../Pages/Dashboard';
import { Profile } from '../Pages/Profile';
import { SignIn } from '../Pages/SignIn';
import { SignUp } from '../Pages/SignUp';

export function AppRoutes() {
    return (
        <Switch>
            <Route exact path="/" component={SignIn} />
            
            <Route path="/signup" component={SignUp} />
            <Route path="/Dashboard" component={Dashboard} isPrivate />
            
            <Route exact path="/tenants" component={TenantTable} isPrivate />
            <Route path="/tenants/new" component={TenantForm} isPrivate />
            <Route path="/tenants/edit/:id" component={TenantForm} isPrivate />

            <Route path="/profile" component={Profile} isPrivate />
        </Switch>
    )
}