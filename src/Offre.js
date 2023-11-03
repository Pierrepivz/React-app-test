import offre_c1 from './images/offre_c1.svg';
import offre_c2 from './images/offre_c2.svg';
import offre_c3 from './images/prise_de_poste.svg';
import offre_c4 from './images/faire_un_choix.svg';
import avatar_pro from './images/avatar_pro_v1.svg';
import avatar_etudiant from './images/avatar_etudiant.svg';
import { Link } from 'react-router-dom';
import "./Coach.css";


/*<img src={logo} className="win-logo" alt="logo" />*/

function Offre() {

      
      
      

      return (
            <div className="Offre">
              

<div class="decoration"></div>

<div class="decoration3"></div>

<div class="decoration5"></div>


<div id="titre_second"class='column_items_center'>
                              
                              
                              <h1title>Mon offre</h1title>
                              <h2under></h2under>
                              <h2under2></h2under2>
                              <div class="note column_items_center">
                              
       
                              
                              <content> La méthode de préparation à l’entretien de winentretien a été renforcée pour vous<br/>
transmettre une compétence essentielle : Convaincre à l’oral.<br/><br/>

En complément, des services de coaching ont été conçus avec un objectif précis :<br/>
résoudre les difficultés fréquemment rencontrées et vous permettre d’être bien dans
votre poste.</content></div>
                              
                        </div> 

                        <div class="column_items_center">
                              
                              
                        


<br/><br/><br/><br/>
</div>

                        <div class="section block">
                        <div class="margin_left">
                        <h2title>Convaincre à l'oral</h2title>
                        <div id="underline"></div>
                        </div>
                  </div>

                        <div class="window column_start">
                        
                        
                        
                        

                        

                       
                              
                              

                        <div class='column_items_center block'>
                        
                              <div class="note"><content> Préparation aux épreuves orales des concours des grandes écoles, entretien de motivation ou d’embauche,
pitch, prise de parole devant 100 personnes : apprenez à <strong>communiquer pour convaincre </strong></content></div>                      

  <div class="offre_content line_between">

  <div class='home_offre column_items_center'>

                              
<div class="photo"></div>
      
      
      
</div>

<div class="offre_text column_start">
  <h2title>Concours d’entrée aux grandes écoles :</h2title>
<h2under2></h2under2>
<content1>
En 2 à 4 séances individuelles, nous allons passer en revue
le déroulement de l’entretien avec le jury de l’école de
votre choix.<br/><br/>

Nous allons préparer vos réponses, identifier vos points
forts, mais aussi, simuler l’entretien pour vous mettre en
confiance et vous entraîner.
</content1>

<Link to="/Methode">
                <a id='bouton' >Prendre rendez-vous</a>
                </Link>

</div>


    
    </div> 

    <div class="offre_content line_between">


    <div class="offre_text column_start">
  <h2title>Entretien d’embauche :</h2title>
<h2under2></h2under2>
<content1>
Que ce soit pour un stage, un 1er job ou un changement de
carrière, l’entretien de motivation est un exercice qui
demande de la préparation et de l’entrainement.<br/><br/>

Mettons ensemble des mots précis et exacts sur votre
parcours, votre projet professionnel et votre envie d’être
sélectionné(e).
</content1>



</div>

<div class="offre_text column_start">
  <h2title>Prise de parole :</h2title>
<h2under2></h2under2>
<content1>
Pour faire de votre prochaine prise de parole un moment
réussi, voire agréable, il s’avère efficace de se concentrer
sur le message que vous allez porter.<br/><br/>

SI le contenu de votre
communication est en résonance avec les attentes du
public, il y a de fortes chances que tout se passe bien.
Apprenez les règles de base qui permettent de favoriser
l’adhésion de votre audience.
</content1>



</div>


</div>                        
                            
                            
<div class="line_between">

<div class="column_items_center">
  <h1title>+ 600</h1title>
  <h2under2></h2under2>
  <br/>
  <h2title>Entretiens depuis
2007</h2title>
</div>
<div class="column_items_center">
  <h1title>98 %</h1title>
  <h2under2></h2under2>
  <br/>
  <h2title>de taux de réussite moyen</h2title>
</div>
<div class="column_items_center">
  <h1title>100 %</h1title>
  <h2under2></h2under2>
  <br/>
  <h2title>de taux de satisfaction</h2title>
</div>


</div>
<br/><br/><br/>
<Link to="/Methode">
                <a id='bouton' >Prendre rendez-vous</a>
                </Link>




                             




    
    

    
    </div>

                        
                        
                        

            

            
            






            





            


            


            

                        </div>
                        
                        
                        
            


            </div>
      );
}

export default Offre;