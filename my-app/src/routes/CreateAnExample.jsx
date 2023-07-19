import { useOutletContext } from "react-router-dom"

export default function CreateAnExample() {

    const [displayLanguage, setDisplayLanguage] = useOutletContext();
    


    return (
        <div>
            <p>{displayLanguage ? "Créez un exemple!" : "Write your own example!"}</p>
        </div>
    )
}