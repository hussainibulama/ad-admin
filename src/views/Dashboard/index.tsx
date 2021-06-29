
import React from "react";
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
import Overview from './OverView/index';

// import Business from "../Business/index"
import Profile  from "./Users/Profile"
import AllUsers  from "./Users/AllUsers"

// import DiscountPartner from "../Business/DiscountPartners";


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
          <Overview />
        </Route>
        <Route path={`${path}/dashboard`}>
          <BusinessDashboard />
          {/* <Home /> */}
        </Route>
        <Route exact path={`${path}/users`}>
          <AllUsers/>
        </Route>
        <Route path={`${path}/users/:id`}>
          <Profile />
        </Route>


        {/* / */}
        <Route path={`${path}/business`}>
          <Business />
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

        
        <Route path={`${path}/footer`}>
          <Footer />
        </Route>
      </Switch>
    </DashboardLayout>
  );
}

export default withRouter(Dashboard);
