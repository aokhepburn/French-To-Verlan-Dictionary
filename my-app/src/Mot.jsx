export default function Mot ({mot}){
const {verlan, francais} = mot

return(
    <tr>
        <td class="lowercase hover:uppercase">
            {verlan}
        </td>
        <td>{francais}</td>
    </tr>
)
}