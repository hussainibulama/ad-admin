import React from 'react';
import {
  withRouter,
  Route,
  Switch,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';
import DashboardLayout from '../../layout/Dashboard';
import Home from '../Home/home';
import Footer from '../../components/footer/footer';
import Business from './Business/SubBusiness/index';
import SingleBusiness from './Business/SingleBusiness/index';
import BusinessDashboard from './Business/DashboardBusiness';
import DiscountPartner from './Business/DiscountPartners';
import AllAdmin from './OverView/AdminViewComponent/AllAdmin';
import AddAdmin from './OverView/AdminViewComponent/AddAdmin';
import AdminProfile from './OverView/AdminViewComponent/AdminProfile';
import EditAdmin from './OverView/AdminViewComponent/EditAdmin';
import DiscountPartnerDetails from './Business/DiscountPartners/pages/discount-partner-detalis';
import BusinessDetailsPage from './Business/SingleBusiness/index';
import DashboardOverview from './OverView/DashboardOverview';
import AdvertiserList from '../Business/Advertisers/AdvertiserList';
import AdvertisersView from '../Business/Advertisers/AdvertisersView';
import Profile  from "./Users/Profile"
import UpdateUser  from "./Users/UpdateUser"
import AllUsers  from "./Users/AllUsers"

import Transactions from './Transactions/Transaction';

function Dashboard(props) {
  const {
    match: { path },
  } = props;


  return (
    <DashboardLayout>
      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}/overview`} />
        </Route>
        <Route path={`${path}/overview`}>
          <DashboardOverview />
        </Route>
        <Route path={`${path}/dashboard`}>
          <BusinessDashboard />
          {/* <Home /> */}
        </Route>
        <Route exact path={`${path}/users`}>
          <AllUsers/>
        </Route>
        <Route path={`${path}/users/update/:id`}>
          <UpdateUser />
        </Route>
        <Route path={`${path}/users/:id`}>
          <Profile />
        </Route>

        <Route
          exact
          path="/app/business/dashboard"
          component={BusinessDashboard}
        />

        <Route exact path="/app/business/business" component={Business} />

        {/*  */}
        <Route
          path="/app/business/business-details"
          component={BusinessDetailsPage}
        />

        <Route
          path="/app/business/discount-partners"
          component={DiscountPartner}
        />

        <Route
          exact
          path="/app/business/discount-details"
          component={DiscountPartnerDetails}
        />

        {/* Admin View */}
        <Route exact path="/app/admin" component={AllAdmin} />

        <Route exact path="/app/admin/add" component={AddAdmin} />
        <Route exact path="app/admin/profile" component={AdminProfile} />

        <Route exact path="/app/admin/edit" component={EditAdmin} />

        <Route
          exact
          path="/app/business/advertisers"
          component={AdvertiserList}
        />

        <Route exact path="/app/business/advert" component={AdvertisersView} />

        <Route exact path={`${path}/footer`}/>

        <Route path={`${path}/discount-partners`}>
          <DiscountPartner />
        </Route>

        <Route path={`${path}/transactions`}>
          <Transactions />
        </Route>

        <Route path={`${path}/footer`}>

          <Footer />
        </Route>
      </Switch>
    </DashboardLayout>
  );
}

export default withRouter(Dashboard);
