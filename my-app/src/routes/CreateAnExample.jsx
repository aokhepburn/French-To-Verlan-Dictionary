import {useState} from 'react'
import { useLoaderData } from 'react-router'
import { useOutletContext } from "react-router-dom"
import Example from '../Example';

export default function CreateAnExample() {

    const [displayLanguage] = useOutletContext();
    const [showExemples, setShowExemples] = useState(useLoaderData())
    const [votreExemple, setVotreExemple] = useState({
        "exemple": ""
    })

    function postEvent(e){
        e.preventDefault()
        fetch('http://localhost:3000/verlanExemple',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(votreExemple)
        } )
            .then(res=>res.json())
            .then(data=>setVotreExemple(data))
            
            setShowExemples([...showExemples, votreExemple])
    }

    function updateExemple(event){
        setVotreExemple({...votreExemple, [event.target.id]: event.target.value})
    }

    return (
        <div>
            <p>{displayLanguage ? "Créez un exemple!" : "Write your own example!"}</p>
            <form onSubmit={(e)=>postEvent(e)}>
                <input type="text" id="exemple" placeholder="Écrivez!" onChange={updateExemple}></input><br/>
                <input type="submit" value="Submit"/>
            </form>
            <div>
                {showExemples.map(showExemple=><Example key={showExemple.id} exemple={showExemple.exemple}/>)}
            </div>
        </div>
    )
}