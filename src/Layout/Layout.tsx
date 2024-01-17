import { Outlet } from "react-router-dom"
import Navigasi from "../Components/Navigasi"


const Layout = () => {

    return (
        <div>
            <Navigasi/>
            <Outlet/>
        </div>
    )
}

export default Layout