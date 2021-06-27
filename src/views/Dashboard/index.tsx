import React from "react";
import "./index.scss";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import DashboardLayout from "../../layout/Dashboard";
import Home from "../Home/home"
import Footer from "../../components/footer/footer"
import Business from "./Business/SubBusiness/index"
import SingleBusiness from "./Business/SingleBusiness/index"
import BusinessDashboard from "./Business/DashboardBusiness"
import DiscountPartner from "./Business/DiscountPartners";
import AllAdmin from "./OverView/AdminViewComponent/AllAdmin";
import AddAdmin from "./OverView/AdminViewComponent/AddAdmin";
import AdminProfile from "./OverView/AdminViewComponent/AdminProfile";
import EditAdmin from "./OverView/AdminViewComponent/EditAdmin";
import AdvertiserList from '../Business/Advertisers/AdvertiserList';
import AdvertisersView from '../Business/Advertisers/AdvertisersView';

function Dashboard(props) {
  const {
    match: { path },
  } = props;
  return (
    <DashboardLayout>
      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}/dashboard`} />
        </Route>
        <Route path={`${path}/dashboard`}>
          <BusinessDashboard/>
          {/* <Home /> */}
        </Route>
        {/* / */}
        <Route path={`${path}/business`}>
          <Business/>
          {/* <SingleBusiness/> */}
        </Route>
        {/*  */}

        <Route path={`${path}/discount-partners`}>
          <DiscountPartner />
        </Route>

        {/* Admin View */}
        <Route path={`${path}/admin/list`}>
          <AllAdmin />
        </Route>
        <Route path={`${path}/admin/add`}>
          <AddAdmin />
        </Route>
        <Route path={`${path}/admin/profile`}>
          <AdminProfile />
        </Route>
        <Route path={`${path}/admin/edit`}>
          <EditAdmin />
        </Route>

        <Route path={`${path}/advertisers`}>
          <AdvertiserList />
        </Route>
        <Route path={`${path}/advertisers-view`}>
          <AdvertisersView />
        </Route>

        <Route path={`${path}/footer`}>
          <Footer />
        </Route>
      </Switch>
    </DashboardLayout>
  );
}

export default withRouter(Dashboard);
