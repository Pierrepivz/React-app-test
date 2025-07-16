
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home2(){

    return(
        <div class="Home2">
            <div class="note">
                <content>Étudiants, professionnels : une offre sur-mesure pour toutes les étapes importantes de votre parcours</content>
            </div>
            
            <div class="Home2_offres window">


            

<div class="block">
  <h2title>Coaching étudiants :</h2title>
<br/>
<content1>
<blue>Confiance et efficacité</blue><br/>
S'appuyer sur l'expèrience d'un coach pendant les années de collège, lycée, et dans toutes les étapes de parcoursup.
</content1>

<Link to="/LP?id=39" onClick={() => window.scrollTo(0,10)}>
                <button id='bouton' >Découvrir</button>
                
                
                </Link>

</div>

<div class="block">
  <h2title>Entretiens étudiants :</h2title>
<br/>
<content1>
<blue>Intégrez l'école de votre choix </blue><br/> Préparez les oraux de tous les concours d'entrée aux grandes écoles postbac <br/><br/>


</content1>

<Link to="/rendez-vous" onClick={() => window.scrollTo(0,10)}>
                <button id='bouton' >Découvrir</button>
                
                
                </Link>

</div>

<div class="block">
  <h2title>Entretiens professionnels :</h2title>
<br/>
<content1>
<blue>Apprenez à convaincre</blue><br/>
Comprenez les enjeux des entretiens d'embauche et apprenez à convaincre les recruteurs

</content1>

<Link to="/LP?id=50" onClick={() => window.scrollTo(0,10)}>
                <button id='bouton' >Découvrir</button>
                
                
                </Link>

</div>




            </div>

        </div>
    );
}