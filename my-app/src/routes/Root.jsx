import { useState } from "react";
import { Outlet } from 'react-router';
import Nav from "../Nav.jsx";
import Home from "./Home.jsx"

export default function Root(){

    const [displayLanguage, setDisplayLanguage] = useState(true)

    return(
        <div>
            <Nav displayLanguage={displayLanguage} setDisplayLanguage={setDisplayLanguage}/>
            <Outlet context={[displayLanguage, setDisplayLanguage]}/>
        </div>
    )
}