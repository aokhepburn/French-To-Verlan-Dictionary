import {useState} from 'react'
import { useLoaderData } from 'react-router'
import { Switch, Route, NavLink, Link } from 'react-router-dom'
import Mot from '../Mot.jsx'
import Search from '../Search.jsx'

export default function VerlanList() {
    const [words, setWords] = useState(useLoaderData())
    const [displayLetters, setDisplayLetters] = useState(true)

    const [searchText, setSearchText] = useState('')

  const searchWords = words.filter(word =>
  word.francais.toLowerCase().includes(searchText.toLowerCase())
  || word.english.toLowerCase().includes(searchText.toLowerCase())
  )

  const mappedWords = searchWords.map(word=><Mot key={word.id} mot={word}/>)

    return (
      <div className="flex flex-col items-center w-3/4">
        <div className="p-5"><Search searchText={searchText} setSearchText={setSearchText}/></div>
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