
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home2(){

    return(
        <div class="Home2">
            <div class="note">
                <content>Étudiants, professionnels : une offre sur-mesure pour toutes les étapes importantes de votre parcours</content>
            </div>
            
            <div class="Home2_offres">


            <div class="block">
  <h2title>Entretiens étudiants:</h2title>
<br/>
<content1>
<blue><h3>Intégrez l'école de votre choix</h3></blue> préparez les oraux de tous les entretiens de motivation des concours postbac et au-delà <br/><br/>


</content1><br/><br/>

<Link to="/rendez-vous" onClick={() => window.scrollTo(0,10)}>
                <button id='bouton' >Prendre rdv</button>
                
                
                </Link>

</div>

<div class="block">
  <h2title>Coaching étudiants :</h2title>
<br/>
<content1>
<blue><h3>Soyez convaincants à l'écrit</h3></blue>
Rédigeons ensemble vos lettres de motivation et projets de formation motivés
</content1><br/><br/>

<Link to="/rendez-vous" onClick={() => window.scrollTo(0,10)}>
                <button id='bouton' >Prendre rdv</button>
                
                
                </Link>

</div>

<div class="block">
  <h2title>Entretiens professionnels :</h2title>
<br/>
<content1>
<blue><h3>Analysez les enjeux</h3></blue>
Sachez adapter votre discours aux différents interlocuteurs en charge de vos entretiens

</content1><br/><br/>

<Link to="/rendez-vous" onClick={() => window.scrollTo(0,10)}>
                <button id='bouton' >Prendre rdv</button>
                
                
                </Link>

</div>




            </div>

        </div>
    );
}