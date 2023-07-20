import {useState} from 'react'
import { useLoaderData } from 'react-router'
import { Switch, Route, NavLink, Link } from 'react-router-dom'
import Mot from '../Mot.jsx'
import Alphabet from '../Alphabet.jsx'

export default function VerlanList() {
    const [words, setWords] = useState(useLoaderData())
    const [displayLetters, setDisplayLetters] = useState(true)
    
    function displayLetterLinks(){
      setDisplayLetters(!displayLetters)
    }

  function handleLetterClick(e) {
  const wordsToDisplay = words.filter(store => {
    return store.name.startsWith(e.target.id);
  })
  }
  const mappedWords = words.map(word=><Mot key={word.id} mot={word}/>)

    return (
      <div className="flex flex-col items-center w-3/4">
    <table className="flex flex-col items-center w-3/4">

      <tbody>
        <tr>
          <th>
          <h3 className="text-[#003333] text-xl">Verlan</h3>

          </th>
          <th>
            <h3 className="text-[#003333] text-xl">Français</h3>
          </th>
        </tr>
        {mappedWords}
      </tbody>
    </table>
    </div>
  )
    
    

}