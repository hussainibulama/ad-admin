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
import Profile from './Users/Profile';
import UpdateUser from './Users/UpdateUser';
import AllUsers from './Users/AllUsers';
import AdvertList from '../Business/Advert/AdvertList/index';
import AdsDetails from '../Business/Advert/AdsDetails/index';
import AdvertView from '../Business/Advert/AdvertView/index';
import Transactions from './Transactions/Transaction';
import Referrals from './Referrals/Referrals';
import App from './App/App';
import AppBuild from './AppBuild/AppBuild';
import BuildDetails from './AppBuild/BuildDetails';
import Notifications from "./Notifications/Notification"
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
          <AllUsers />
        </Route>
        <Route path={`${path}/users/update/:id`}>
          <UpdateUser />
        </Route>
        <Route path={`${path}/users/:id`}>
          <Profile />
        </Route>

        <Route exact path="/app/dashboard" component={DashboardOverview} />
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
        <Route exact path="/app/admin/profile" component={AdminProfile} />
        <Route exact path="/app/admin/edit" component={EditAdmin} />

        <Route
          exact
          path="/app/business/advertisers"
          component={AdvertiserList}
        />
        <Route
          exact
          path="/app/business/advertisers-view"
          component={AdvertisersView}
        />

        {/*Advert view */}
        <Route exact path="/app/business/advert" component={AdvertView} />
        <Route exact path="/app/business/advert-list" component={AdvertList} />
        <Route exact path="/app/business/ads-details" component={AdsDetails} />

        <Route exact path={`${path}/footer`} />

        <Route path={`${path}/discount-partners`}>
          <DiscountPartner />
        </Route>

        <Route path={`${path}/transactions`}>
          <Transactions />
        </Route>
        <Route path={`${path}/referrals`}>
          <Referrals />
        </Route>
        <Route path={`${path}/build_app`}>
          <AppBuild />
        </Route>
        <Route path={`${path}/errors`}>
          <BuildDetails />
        </Route>

        <Route path={`${path}/app`}>
          <App />
        </Route>


        <Route path={`${path}/notifications`}>
          <Notifications />
        </Route>

        <Route path={`${path}/footer`}>
          <Footer />
        </Route>
      </Switch>
    </DashboardLayout>
  );
}

export default withRouter(Dashboard);
