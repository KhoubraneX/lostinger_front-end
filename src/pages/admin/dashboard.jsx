import SideBar from "../../components/dashboard/sideBar";
import { Helmet } from "react-helmet";
import  "../../assets/dashboard/css/styles.css"
import { Outlet } from "react-router-dom";
const Dashboard = () => {

    return (
        <div className="page-container" style={{ height: "calc(100vh - 90px - 75px)" }}>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <SideBar />
            <div className="page-content dashboard">
                <Outlet />
            </div>
        </div>
    )
};

export default Dashboard