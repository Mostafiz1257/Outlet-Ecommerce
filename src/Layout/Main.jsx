import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";


const Main = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <Navbar></Navbar>
                    <div className=" min-h-[calc(100vh-68px)]">
                        <Outlet></Outlet>
                    </div>
                    <Footer></Footer>

                </div>
            )}
        </>

    );
};

export default Main;