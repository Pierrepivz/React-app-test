import "./Methode.css";
import { Link } from "react-router-dom";
import stats from "../images/entretienpourmethode.jpg";
import coaching1 from "../images/coaching1.JPG";
import coaching2 from "../images/coaching2.jpg";
import {Helmet} from "react-helmet";

function MethodePage(){

   



  return(

   <div className="Contact Page">


<Helmet>
       
       <title>Notre méthode pour préparation sur mesure aux entretiens</title>
       <meta name="description" content="La méthode winentretien basée sur la recherche des faits personnels de votre parcours, vos points forts et la projection sur un projet professionnel précis"></meta>
       <link rel="canonical" href="https://www.winentretien.com/Methode_page" />

      </Helmet>



<div id="titre_second"class='column_items_center'>
                              
                              <h1>Méthode de préparation aux entretiens de motivation</h1>
                              <h2under2></h2under2>
                              

                  <div class="note"><content> <blue>Mettre des mots sur ce qui vous définit, vous donner confiance en vos possibilités</blue><br/>
                  C'est en partant de ce qui fait l'unicité de votre candidature que vous pourrez le mieux convaincre votre interlocuteur </content><br />
</div>
                              
                              
                        </div>

                        <div class="section block">
                        <div class="margin_left">
                        <h1title>Mes Valeurs</h1title>
                        <div id="underline"></div>
                        </div>
                  </div>

<div class="line_between window valeur">




<div class="column_items_center block" id="method_background">


      <div class="image_methode">
      <i class="fa-solid fa-heart fa-2xl"></i>
      </div>
      
      <div class="row">
      
      <div id='box_graph' class="column_items_center">

      <div id="circle"></div>
      <div id="dropbar"></div>
      

      </div>

      
      
      <div class='column'>
      <div class="row">
      <h2title>
      Bienveillance
      
      </h2title>
      
      </div>
      
      <div id='box_content' >
      <content1>
      La bienveillance désigne pour moi une intention de compréhension et d’indulgence vers autrui.
Cette attitude vise à favoriser le bien-être de <blue>l’autre.</blue>
Dans un contexte professionnel, elle se traduit par une <blue>attitude d’écoute et de soutien.</blue>
<br/>
</content1>
      </div>


      </div>


              </div>

</div>

<div class="column_items_center block" id="method_background">
<div class="image_methode"><i class="fa-solid fa-cloud fa-2xl"></i></div>
<div class="row">


      <div id='box_graph' class="column_items_center">

      <div id="circle"></div>
      <div id="dropbar"></div>
      

      </div>

      
      
      <div class='column'>
      <div class="row">
      <h2title>
      Equanimité
      
      </h2title>
      
      </div>
      
      <div id='box_content' >
      <content1>
      L’équanimité, c’est la capacité à entendre l’autre sans porter de jugement ni faire d’évaluation.
Elle consiste à ne pas émettre de jugement personnel sur les croyances et modes de fonctionnement
de son interlocuteur afin de mieux pouvoir <blue>l’orienter et le conseiller.</blue>
<br/>
</content1>



      </div>


      </div>


              </div>
      

      
</div>


<div class="column_items_center block" id="method_background">

<div class="image_methode"><i class="fa-solid fa-ice-cream fa-2xl"></i></div>

<div class='column'>
<div class="row">

<div id='box_graph' class="column_items_center">

      <div id="circle"></div>
      <div id="dropbar"></div>
      

      </div>

<div class="column">

<h2title>
Plaisir

</h2title>



<div id='box_content'>
<content1>
Les pauses et les moments de légèreté pendant nos entretiens sont des instants de partage et
d’ancrage bénéfiques à chacun, coach et client.<br/>
Ils permettent le <blue>lâcher-prise</blue> et favorisent l’irruption d’idées souvent <blue>innovantes</blue> parce que non
contrôlées.
</content1>



</div>
</div>

</div>


</div>

</div>


<br/><br/>
</div>


<div class="section block">
                        <div class="margin_left">
                        <h1title>La préparation aux entretiens</h1title>
                        <div id="underline"></div>
                        </div>
                  </div>


<div class="flex block window methode_part2">
<div class="methode_text">

<content1><strong>C’est grâce aux <blue>600 personnes accompagnées depuis 2007</blue> que la méthode <blue>win</blue>entretien a été mise au point.</strong><br/><br/>

Vous arrivez avec un objectif précis : rédiger une lettre de
motivation convaincante (Parcoursup), convaincre une
structure (école, entreprise) de vous prendre <strong>vous.</strong><br/><br/>

Notre méthode : raconter de manière attractive votre motivation et votre projet, qui sont uniques parce que
personnels. Nous allons mettre des mots personnels et précis sur les réponses aux questions qui vous seront posées.<br/><br/>

Le cas échéant, nous vous proposons un entraînement au passage de l’entretien, en
évaluant des points d’attention tels que : posture,
élocution, pertinence des réponses..<br/>

Au cours de ces séances, nous appliquons une règle essentielle : <br/><br/><strong><orange><h3title>respecter votre zone de confort.</h3title></orange></strong></content1>


      
</div>
<div class="column">
<img class="image_methode_2" src={stats} alt=""/>
<br/>
<Link to='/rendez-vous' onClick={() => window.scrollTo(0,10)}>
                                    <button id='bouton' class="mobile_off">Prendre rendez-vous</button>
                                    </Link></div>

  </div>  



  
<div class="section block">
                        <div class="margin_left">
                        <h1title>Les services de coaching</h1title>
                        <div id="underline"></div>
                        </div>
                  </div>


<div class="flex block window methode_part2">
<div class="methode_text">

<content1>Pour les <strong>services de coaching</strong>, l’objectif qui est le vôtre part souvent d’un constat négatif : stress, difficultés
d’organisation ou de communication, perception négative de ses résultats.

Parce que la perception que l’on a d’un problème contient en partie sa résolution, nous allons travailler sur sa 
<blue> formulation</blue>, sur sa <blue> réalité objective</blue>, sur la <blue> manière dont vous le ressentez.</blue><br/><br/>

<blue>L’écoute active</blue>, avec ses corollaires que sont la reformulation et le questionnement, sera le socle de tous nos
échanges.<br/><br/>

Elle permet d’instaurer la confiance et la compréhension, et pour peu qu’on se laisse entraîner par sa simplicité
apparente, elle permet au pouvoir des mots de faire son œuvre. 

</content1>
      
</div>
<div class="column">
<img class="image_methode_2" src={coaching2} id="image_coaching" alt=""/>
<br/>
</div>

  </div> 


  <div class="flex block window methode_part2">

<div class="column">
<img class="image_methode_2" src={coaching1} id="image_coaching_2" alt=""/>
<br/>
</div>


<div class="column_items_center">
<div class="methode_text">


<content1>
A chaque séance je <blue>pars de votre demande et je me laisse
guider par votre réceptivité</blue> pour vous proposer : des techniques de pleine conscience, des exercices de CNV, une projection avec narration positive, ou
même des jeux.<br/><br/>

Au cours de ces séances, j’applique avec vigilance une règle essentielle : <br/><br/><strong><orange><h3title>respecter votre zone de confort.</h3title></orange></strong></content1>


      
</div>
<Link to='/rendez-vous' onClick={() => window.scrollTo(0,10)}>
                                    <button id='bouton'>Prendre rendez-vous</button>
                                    </Link></div>


  </div>       
  <br/><br/>
  





    

    
    </div>



  );
    
  }
  
  export default MethodePage;