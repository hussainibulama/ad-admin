import React from 'react';
import './index.scss';
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
import DashboardOverview from './OverView';
import AdvertiserList from '../Business/Advertisers/AdvertiserList';
import AdvertisersView from '../Business/Advertisers/AdvertisersView';

function Dashboard() {
  let { path } = useRouteMatch();
  return (
    <DashboardLayout>
      <Switch>
        <Route exact path="/app">
          {<Redirect to="/app/dashboard" />}
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
        <Route exact path="app/admin/profile" component={AdminProfile} />

        <Route exact path="/app/admin/edit" component={EditAdmin} />

        <Route
          exact
          path="/app/business/advertisers"
          component={AdvertiserList}
        />

        <Route exact path="/app/business/advert" component={AdvertisersView} />

        <Route exact path={`${path}/footer`}>
          <Footer />
        </Route>
      </Switch>
    </DashboardLayout>
  );
}

export default withRouter(Dashboard);
