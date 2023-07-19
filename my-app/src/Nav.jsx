import { NavLink } from "react-router-dom"

function Nav(){
    return(
        <div className="w-800">
            <h1 className="text-3xl">DICTIONNAIRE VERLAN</h1>
        <nav className='flex justify-between'>
        <NavLink to="verlanlist">Browse</NavLink>
        <NavLink to="home">Accueil</NavLink>
        </nav>
        </div>
        
    )
}

export default Nav