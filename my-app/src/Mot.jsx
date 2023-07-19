import {useState} from 'react'

export default function Mot ({mot}){
const {verlan, francais, english} = mot
const [hideEnglish, setHideEnglish] = useState(true)



function displayEnglish(){
    setHideEnglish(!hideEnglish)
}

return(
    <tr className="lowercase hover:text-1xl">
        <td>
            {verlan}
        </td>
        {/*<td onMouseEnter={displayEnglish} onMouseLeave={displayEnglish}>{hideEnglish ? francais : english}</td>*/}
        <td>{francais}</td>
    </tr>
)
}