import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));
const BasicElements = lazy(() => import('./form-elements/BasicElements'));
const BasicTable = lazy(() => import('./tables/BasicTable'));
const Mdi = lazy(() => import('./icons/Mdi'));
const ChartJs = lazy(() => import('./charts/ChartJs'));
const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));
const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));
const Lockscreen = lazy(() => import('./user-pages/Lockscreen'));
const BlankPage = lazy(() => import('./general-pages/BlankPage'));
const Home = lazy(() => import('./components/Home'));
const AddOrders = lazy(() => import('./components/orders/AddOrders'));
const MyOrders = lazy(() => import('./components/orders/MyOrders'));
const ViewOrders = lazy(() => import('./components/orders/ViewOrders'));
const AddStaff = lazy(() => import('./components/staff/AddStaff'));
const StaffList = lazy(() => import('./components/staff/StaffList'));

const NewModel = lazy(() => import('./components/models/NewModel'));
const ViewModels = lazy(() => import('./components/models/ViewModels'));

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />
          <Route path="/home" component={ Home } />
          <Route path="/orders/add-orders" component={ AddOrders } />
          <Route path="/orders/my-orders" component={ MyOrders } />
          <Route path="/orders/view-orders" component={ ViewOrders } />
          <Route path="/staff/add-staff" component={ AddStaff } />
          <Route path="/staff/list" component={ StaffList } />
          <Route path="/models/new-model" component={ NewModel } />
          <Route path="/models/view-models" component={ ViewModels } />

          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />
          <Route path="/form-Elements/basic-elements" component={ BasicElements } />
          <Route path="/tables/basic-table" component={ BasicTable } />
          <Route path="/icons/mdi" component={ Mdi } />
          <Route path="/charts/chart-js" component={ ChartJs } />
          <Route path="/login" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />
          <Route path="/user-pages/lockscreen" component={ Lockscreen } />
          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />
          <Route path="/general-pages/blank-page" component={ BlankPage } />
          <Redirect to="/login" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;