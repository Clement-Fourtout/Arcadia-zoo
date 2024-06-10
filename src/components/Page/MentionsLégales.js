
import Footer from "../Footer"
import Header from "../Header"
import Nav from "../Nav"
import'../styles/CSS/Mentions.css'

export default function MentionsLégales() {
  return (
    <>
<Header></Header>
<Nav></Nav>
    <div class="container mt-5 mb-5">
    <h1>Mentions Légales</h1>
        <table>
            <tr>
                <th>Raison Sociale</th>
                <td>Arcadia</td>
            </tr>
            <tr>
                <th>Adresse</th>
                <td>35380 Paimpont, La forêt de Brocéliande</td>
            </tr>
            <tr>
                <th>Directeur de Publication</th>
                <td>José Saint Pierre</td>
            </tr>
            <tr>
                <th>Hébergeur</th>
                <td>
                    <p>Héroku</p>
                    <p>1 Market St. Suite 300, San Francisco, CA 94105, Etats-Unis d'Amérique</p>
                </td>
            </tr>
        </table>
    </div>
<Footer></Footer>
    </>
  )
}
