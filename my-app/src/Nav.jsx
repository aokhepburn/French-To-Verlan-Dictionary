import { NavLink } from "react-router-dom"

function Nav({displayLanguage, setDisplayLanguage}){


    return(
        <span className="w-3/4 pb-5 pt-5">
            <h1 className="text-3xl pb-5">DICTIONNAIRE VERLAN</h1>
            <button onClick={()=>setDisplayLanguage(true)}>French</button> | <button onClick={()=>setDisplayLanguage(false)}>English</button>
        <nav className='flex justify-between uppercase text-xl'>
        <NavLink className="text-[#003333] hover:text-[#FFAAAA]" to="home">{displayLanguage ? "Accueil" : "Home"}</NavLink>
        <NavLink className="text-[#003333] hover:text-[#FFAAAA]" to="verlanlist">{displayLanguage ? "Le Dictionnaire" : "Dictionary"}</NavLink>
        <NavLink className="text-[#003333] hover:text-[#FFAAAA]" to="createexample">{displayLanguage ? "Exemples" : "Examples"}</NavLink>
        
        </nav>
        </span>
        
    )
}

export default Nav