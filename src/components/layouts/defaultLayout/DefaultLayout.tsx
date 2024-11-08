import { PrimeReactProvider } from "primereact/api";
import Navbar from "../../navbar/Navbar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <PrimeReactProvider>
            <Navbar />
            <div style={{padding: "16px 40px", backgroundColor: "#F6F7FB", height: "3000px"}}>
                <Outlet />
            </div>
        </PrimeReactProvider>
    );
};

export default DefaultLayout;