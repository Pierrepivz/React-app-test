import "./Home.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Home(){

return(
    <div class="Home">

<Helmet>
       
       <title>winentretien la préparation sur mesure à tous les entretiens</title>
       <meta name="description" content="Découvrez la méthode winentretien et nos conseils pour réussir tous les entretiens de motivation à l'entrée des grandes écoles et les entretiens d'embauche"></meta>
       <link rel="canonical" href="https://www.winentretien.com/" />

      </Helmet>
        <div class="column" id="main">
<h1>

      Atteindre son objectif, <br/>ça s'apprend
</h1>



<div class='underline2'></div>
<br/>
<hcontent>
<h2>Depuis 2007 nous vous apprenons à <blue>convaincre</blue> lors des moments importants de votre <blue>parcours
professionnel.</blue></h2>
<h3><blue>Projets de formation motivés, lettres de motivation, entretien de valorisation, entretien d’embauche :</blue></h3>
nous vous aidons à mettre des mots précis et personnels sur votre parcours, vos compétences, votre
motivation, votre projet professionnel.
<br/>
<h3><blue>Que vous soyez lycéen, étudiant ou déjà en poste,</blue></h3> adoptez les bons réflexes qui vont vous permettre
de convertir les moments importants de votre parcours en réussite.
Concrètement, notre cœur de métier est de préparer les étudiants et les professionnels à la réussite
de tous les moments clés de leur parcours professionnel.
<br/><br/>
                       

</hcontent>
      
      <Link to='/offre' onClick={() => window.scrollTo(0,10)}>
      <button id='bouton' >Mon offre</button>
      </Link>
      
</div>

        
    </div>
);





}