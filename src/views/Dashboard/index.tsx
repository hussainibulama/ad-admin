import React from "react";
import "./index.scss";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import DashboardLayout from "../../layout/Dashboard";
import Home from "../Home/home"
import Footer from "../../components/footer/footer"
import AllAdmin from "../../components/AdminViewComponent/AllAdmin";
import AddAdmin from "../../components/AdminViewComponent/AddAdmin";
import AdminProfile from "../../components/AdminViewComponent/AdminProfile";
import EditAdmin from "../../components/AdminViewComponent/EditAdmin";
import Business from "../Business/index";
import DiscountPartner from "../Business/DiscountPartners";

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
          <Home />
        </Route>
        {/* / */}
        <Route path={`${path}/business`}>
          <Business />
        </Route>

        {/*  */}

        <Route path={`${path}/discount-partners`}>
          <DiscountPartner />
        </Route>

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
