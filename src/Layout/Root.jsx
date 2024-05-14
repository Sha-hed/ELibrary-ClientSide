import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import { useEffect } from "react";

const Root = () => {
   
    const location = useLocation();
    useEffect(()=>{
        if(location.pathname === '/'){
            document.title = `ELibrary | ${location.pathname.replace('/','Home')}`
        }else if(location.state){
            document.title = `ELibrary | ${location.state}`
        }else{
            document.title = `ELibrary | ${location.pathname.replace('/','')}`
        }

    },[location.pathname])

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;