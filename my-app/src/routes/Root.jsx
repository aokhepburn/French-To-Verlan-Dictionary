import { useState } from "react";
import { Outlet } from 'react-router';
import Nav from "../Nav.jsx";
import VerlanList from "./VerlanList.jsx";

export default function Root(){

    const [displayLanguage, setDisplayLanguage] = useState(true)

    return(
        <div className="w-screen flex flex-col items-center">
            <Nav displayLanguage={displayLanguage} setDisplayLanguage={setDisplayLanguage}/>
            <Outlet context={[displayLanguage, setDisplayLanguage]}/>
        </div>
    )
}