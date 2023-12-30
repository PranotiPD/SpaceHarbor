import { Outlet } from "react-router";
import Header from "./Header";
// import Footer from "./Footer";

function Layout(){
    return(
        <div className="py-4 px-8 flex flex-col min-h-screen">
        <Header />
        <Outlet style={{mb: '20px'}}/>
        {/* <Footer /> */}
        </div>
    )
}

export default Layout;