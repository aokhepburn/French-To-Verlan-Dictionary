import { Outlet } from 'react-router';
import Nav from "../Nav.jsx";
import { useLoaderData } from 'react-router-dom';
import {useState} from 'react'

export default function Root(){
    const [words, setWords] = useState(useLoaderData())

    return(
        <div>
            <Nav />
            <Outlet />
        </div>
    )
}