import { NavLink } from "react-router-dom"

function Nav({displayLanguage, setDisplayLanguage}){


    return(
        <div className="w-5/6 pb-5 pt-5 flex justify-between items-center">
            <div className="flex flex-col">
            <h1 className="text-3xl flex flex-col items-center">{displayLanguage ? "DICTIONNAIRE VERLAN" : "VERLAN DICTIONARY"}</h1><br />
            <div className="flex flex-row items-center"><button className="p-4" onClick={()=>setDisplayLanguage(true)}>Français</button>|<button className="p-4" onClick={()=>setDisplayLanguage(false)}>English</button></div><br/>
            </div>
        <nav className='w-5/6 flex flex-row justify-between uppercase text-xl'>
        <NavLink className="pb-2 text-[#003333] hover:text-[#FFAAAA]" to="home">{displayLanguage ? "Accueil" : "Home"}</NavLink>
        <NavLink className="pb-2 text-[#003333] hover:text-[#FFAAAA]" to="verlanlist">{displayLanguage ? "Le Dictionnaire" : "Dictionary"}</NavLink>
        <NavLink className="pb-2 text-[#003333] hover:text-[#FFAAAA]" to="createexample">{displayLanguage ? "Exemples" : "Examples"}</NavLink>
        
        </nav>
        </div>
        
    )
}

export default Nav