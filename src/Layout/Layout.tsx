import { Outlet } from "react-router-dom"
import { Navigasi } from "../components"

const Layout = () => {

    return (
        <div>
            <Navigasi/>
            <Outlet/>
        </div>
    )
}

export default Layout