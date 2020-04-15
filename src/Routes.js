import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './app/components/PrivateRoute';

import Login from './app/views/login';
import HomeAdm from './app/views/home';
import Companies from './app/views/companies';
import MyCurriculum from './app/views/my-curriculum';
import Vacancies from './app/views/vacancies';
import Interviews from './app/views/interviews';
import Candidates from './app/views/candidates';
import Sorting from './app/views/sorting';
import Profile from './app/views/profile';
import Dashboard from './app/views/dashboard';
import Register from './app/views/register';

export default function Routes() {
     return (
          <Switch>
               <Route exact path="/" component={Login} />
               <Route exact path="/login-adm" admin component={Login} />
               <Route exact path="/register" component={Register} />
               <PrivateRoute exact path="/home" component={HomeAdm} />
               <PrivateRoute exact path="/companies" component={Companies} />
               <PrivateRoute exact path="/my-curriculum" component={MyCurriculum} />
               <PrivateRoute exact path="/vacancies" component={Vacancies} />
               <PrivateRoute exact path="/interviews" component={Interviews} />
               <PrivateRoute exact path="/candidates" component={Candidates} />
               <PrivateRoute exact path="/sorting" component={Sorting} />
               <PrivateRoute exact path="/profile" component={Profile} />
               <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
     )
}
