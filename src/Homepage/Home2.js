
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
  <h2title>Coaching :</h2title>
<br/>
<content1>
<strong>Identifiez vos points forts</strong> et sachez les mettre en valeurs dans vos lettres de motivation<br/><br/>


</content1><br/><br/>

<Link to="/rendez-vous" onClick={() => window.scrollTo(0,10)}>
                <button id='bouton' >Découvrir</button>
                
                
                </Link>

</div>

<div class="block">
  <h2title>Entretiens professionnels :</h2title>
<br/>
<content1>
Entrainez-vous pour passer vos entretiens d'embauche
</content1><br/><br/>

<Link to="/rendez-vous" onClick={() => window.scrollTo(0,10)}>
                <button id='bouton' >Découvrir</button>
                
                
                </Link>

</div>

<div class="block">
  <h2title>Entretiens étudiants :</h2title>
<br/>
<content1>
Préparez les oraux des Entretiens des écoles post bac et au-delà
</content1><br/><br/>

<Link to="/rendez-vous" onClick={() => window.scrollTo(0,10)}>
                <button id='bouton' >Découvrir</button>
                
                
                </Link>

</div>




            </div>

        </div>
    );
}