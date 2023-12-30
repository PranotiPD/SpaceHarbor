import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

function Layout(){
    const [mode, setMode] = useState('light');
    const [bgcolor, setBgColor] = useState('white');
    const [textColor, setTextColor] = useState('black')

    return(
        <div className={`pt-4 px-8 flex flex-col min-h-screen bg-${bgcolor} text-${textColor}`}>
        <Header mode={mode} setMode={setMode} bgcolor={bgcolor} 
        setBgColor={setBgColor} textColor={textColor} setTextColor={setTextColor}/>
        <Outlet/>
        <Footer textColor={textColor} bgcolor={bgcolor} />
        </div>
    )
}

export default Layout;