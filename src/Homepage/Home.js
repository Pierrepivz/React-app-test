import "./Home.css";
import { Link } from "react-router-dom";
export default function Home(){

return(
    <div class="Home">
        <div class="column" id="main">
<h1>

      Atteindre son objectif, <br/>ça s'apprend
</h1>

<div class='underline2'></div>
<br/>
<hcontent>
Depuis plus de 15 ans, winentretien prépare les étudiants et les professionnels à réussir les
entretiens de motivation qui leur permettent de réaliser leur projet professionnel :<br/><br/>
<blue> entretien des
concours d’entrée dans une école pour les étudiants,</blue><br/><blue> entretien d’embauche pour les professionnels.</blue><br/><br/>
Notre mission est de leur donner les bons réflexes pour être prêt à saisir les opportunités et à
convertir les moments importants de leur parcours en réussite.
<br/><br/>
<br/>                        

</hcontent>
      
      <Link to='/offre' onClick={() => window.scrollTo(0,10)}>
      <button id='bouton' >Mon offre</button>
      </Link>
      
</div>
        
    </div>
);





}