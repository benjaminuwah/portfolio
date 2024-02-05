import { Outlet } from "react-router-dom"
import { Footer, Navbar } from "../components"

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Main;