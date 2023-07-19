import {useState} from 'react'
import { useLoaderData } from 'react-router'
import Mot from '../Mot.jsx'

export default function VerlanList() {
    const [words, setWords] = useState(useLoaderData())

    const mappedWords = words.map(word=><Mot key={word.id} mot={word}/>)

    return (
        (
    <table class="table-results">
      <tbody>
        <tr>
          <th>
          <h3 className="row-verlan">Verlan</h3>

          </th>
          <th>
            <h3 className="row-french">Français</h3>
          </th>
        </tr>
        {mappedWords}
      </tbody>
    </table>
  )
    
    )

}