import logo from "../../assets/icons/admoni-logo.svg"
import Overview from "../../assets/icons/chart-overview-icon.svg"
import Users from "../../assets/icons/users-profile-icon.svg"
import Business from "../../assets/icons/user-business-icon.svg"
import Transaction from "../../assets/icons/transaction.svg"
import Referrals from "../../assets/icons/referrals.svg"
import AppDownlaod from "../../assets/icons/app-downlaod.svg"
import AppBuild from "../../assets/icons/app-build.svg"
import Error from "../../assets/icons/erros.svg"
import Endpoint from "../../assets/icons/endpoint.svg"
import AppReview from "../../assets/icons/app-review.svg"
import Notification from "../../assets/icons/notification.svg"
import Logout from "../../assets/icons/logout.svg"
import NavNotification from "../../assets/icons/nav-notification.svg"
import PlusGreen from "../../assets/icons/plus-sign-green.svg"
import ToggleMenu from "../../assets/icons/sidebar-toggle-menu.svg"
import Chat from "../../assets/icons/Chat.svg"
import Search from "../../assets/icons/search.svg"
import AddUsers from "../../assets/icons/addUsers.svg"
import CheveronDown from "../../assets/icons/cheveron-down.svg"
import Dashboard from "../../assets/icons/Activity-dashboard-icon.svg"
import WorkBusiness from "../../assets/icons/work-buss-icon.svg"
import Advertiser from "../../assets/icons/advertiser.svg"
import Discount from "../../assets/icons/discount.svg"


const Icons = {
    logo,
    Overview,
    Users,
    Business,
    Transaction,
    Referrals,
    AppDownlaod,
    AppBuild,
    Error,
    Endpoint,
    AppReview,
    Notification,
    Logout,
    NavNotification,
    PlusGreen,
    ToggleMenu,
    Chat,
    Search,
    AddUsers,
    CheveronDown,
    Dashboard,
    WorkBusiness,
    Advertiser,
    Discount
}

const menus1 = [
    {
        icon: Overview,
        title: "Overview",
        route: "/app/overview",
    },
    {
        icon: Users,
        title: "Users",
        route: "/app/users",
    },
]

const menusInner = [
    {
        icon: Dashboard,
        title: "Dashboard",
        route: "/app/dashboard",
    },
    {
        icon: WorkBusiness,
        title: "Business",
        route: "/app/business",
    },
    {
        icon: Discount,
        title: "Discount Partners",
        route: "/app/discount-partners",
    },
    {
        icon: Advertiser,
        title: "Advertisers",
        route: "/app/advertisers",
    },
    {
        icon: Advertiser,
        title: "Advert",
        route: "/app/advert",
    },
]

const menus2 = [

    {
        icon: Transaction,
        title: "Transactions",
        route: "/app/transactions",
    },
    {
        icon: Referrals,
        title: "Referrals",
        route: "/app/referrals",
    },
    {
        icon: AppDownlaod,
        title: "App",
        route: "/app/app",
    },
    {
        icon: AppBuild,
        title: "App Build",
        route: "/app/build_app",
    },
    {
        icon: Error,
        title: "Errors",
        route: "/app/errors",
    },
    {
        icon: Endpoint,
        title: "Endpoint Requests",
        route: "/app/endpoint_requests",
    },
    {
        icon: AppReview,
        title: "App Reviews",
        route: "/app/app_reviews",
    },
    {
        icon: Notification,
        title: "Notifications",
        route: "/app/notifications",
    },
]

export {
    menus1,
    menusInner,
    menus2,
    Icons
}