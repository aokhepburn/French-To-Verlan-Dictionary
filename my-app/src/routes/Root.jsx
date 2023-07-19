import { Outlet } from 'react-router';
import Nav from "../Nav.jsx";
import Home from "./Home.jsx"

export default function Root(){

    return(
        <div>
            <Nav />
            <Outlet />
        </div>
    )
}