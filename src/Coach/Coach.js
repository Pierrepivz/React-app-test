import "./Coach.css";
import livre_eyrolles from "../images/photo_eyrolles.jpeg";
import { Link } from "react-router-dom";
import photo_carole from "../images/photo_carole_face.JPG";
import carole_pied from "../images/photo_carole_pied.JPG";


function Coach(){

   



  return(

   <div className="Contact Page">






<div id="titre_second"class='column_items_center'>
                              
                              <h1title>La Coach</h1title>
                              
                              <h2under2></h2under2>

                              
                              
                        </div>

<div class="window column block">

<div class="row space_between" >

                  

                  

                  <div class="column_start" id="coach_message1">
                  <h2title>La Coach : Carole Pivin</h2title>
                  <div class="underline2"></div>

                  

                  <div class="content_blue">
                  <content>
                  Quelques mots pour parler de mon envie de vous accompagner...<br/><br/>

Dans les trois professions que j'exerce depuis plus de 25 ans :  <strong>la formation, le conseil et le coaching</strong>, il y a un point de convergence essentiel qui est la relation à l'autre.<br/><br/>

C'est l'unicité de la rencontre, avec une classe, un groupe de dirigeants ou tout simplement une personnalité unique  - car tous mes clients sont de belles personnes - qui permet de développer une relation singulière, où la qualité de l'attention portée à l'autre permet que surviennent des instants de vérité et de possibilités.  <br/>
La recherche de ces moments suspendus, où la compréhension et l'acceptation surgissent, dans un climat de totale bienveillance : c'est cela que je tente à chaque fois de développer avec vous.<br/><br/>

<br/>  <i class="fa-solid fa-person 2xl" id="icon"></i></content>


</div>
                
                  </div>

                  
                  

                  <div class="column_items_center" id="coach_message2">

                        
                        
                              <img class="photo_box" src={photo_carole}/>
                        
                        <div class="photo_avatar"></div>

                        <div class="content_blue">
                  <content>
                  



Par <strong>l'écoute, la reformulation, l'équanimité.</strong><br/><br/>

Par des techniques qui s'appuient sur le pouvoir des mots, des silences et de toutes leurs combinaisons.<br/><br/><br/>  </content>

<Link to='./offre'><a id="bouton"><content>Ma méthode</content></a></Link>


</div>

                  
                  
                 

                  </div>
                  

                  </div>


<div class="line_between block" id="coach_message3">




<div class="column">
<div class="row"><h1title>Mon parcours</h1title><i id="icon" class="fa-solid fa-book-open"></i></div>
<h2under2></h2under2>
<img src={carole_pied} id="coach_photo"/>

</div>

      






<div id="coach_description" class="coach_description_viewport">


<div class="flex">
      
      
      

      
      

      


      <div id='box_graph' class="column_items_center">

      <div id="circle"></div>
      <div id="dropbar"></div>
      

      </div>

      
      
      <div class='column'>
      <div class="row">
      <h2title>
      1993
      
      </h2title>
      
      </div>
      <div id='underline2'></div>
      <div id='box_content'>
      <content>
      Retour en France après 5 ans passés aux Etats-Unis, en
tant qu’Ingénieur Réseaux et professeur de français. 
<br/><br/><blue>
Ingénieur Certifié Novell – MIAGe et DEA à
Paris-Dauphine</blue></content>
      </div>


      </div>


              </div>

              <div class="flex">
      
      
      

      
      

      


      <div id='box_graph' class="column_items_center">

      <div id="circle"></div>
      <div id="dropbar"></div>
      

      </div>

      
      
      <div class='column'>
      <div class="row">
      <h2title>
      1995
      
      </h2title>
      
      </div>
      <div id='underline2'></div>
      <div id='box_content'>
      <content>J’entre chez CSC Peat Marwick en tant que
consultante en <blue>Systèmes d’information (SI)</blue><br/><br/>

Spécialisation dans la traduction des besoins des
utilisateurs et la simplification des interfaces</content>
      </div>


      </div>


              </div>


              <div class="flex">
      
      
      

      
      

      


      <div id='box_graph' class="column_items_center">

      <div id="circle"></div>
      <div id="dropbar"></div>
      

      </div>

      
      
      <div class='column'>
      <div class="row">
      <h2title>
      2011
      
      </h2title>
      
      </div>
      <div id='underline2'></div>
      <div id='box_content'>
      <content>J’anime une équipe dédiée à la <blue>Conduite du
changement</blue><br/><br/>

Gestion du changement sur des projets SI
internationaux : <br/><blue>communication, formation, assistance
aux utilisateurs</blue></content>
      </div>


      </div>


              </div>




              <div class="flex">
      
      
      

      
      

      


      <div id='box_graph' class="column_items_center">

      <div id="circle"></div>
      <div id="dropbar"></div>
      

      </div>

      
      
      <div class='column'>
      <div class="row">
      <h2title>
      2015
      
      </h2title>
      
      </div>
      <div id='underline2'></div>
      <div id='box_content'>
      <content>Je quitte CSC et lance une <blue>activité indépendante de conseil
en organisation et de formation</blue><br/><br/>

Plusieurs missions de conseil pour les 200 magasins
d’une enseigne de la Distribution; pour la
communication de plusieurs TPE<br/><br/>

Formatrice Soft Skills et Gestion de projets au <blue>CNAM
et au CESI</blue></content>
      </div>


      </div>


              </div>


              <div class="flex">
      
      
      

      
      

      


      <div id='box_graph' class="column_items_center">

      <div id="circle"></div>
      <div id="dropbar"></div>
      

      </div>

      
      
      <div class='column'>
      <div class="row">
      <h2title>
      2016
      
      </h2title>
      
      </div>
      <div id='underline2'></div>
      <div id='box_content'>
      <content>Je démarre une activité de coaching en solo mais
aussi en collaboration avec Cécile Mellac au sein de
winentretien<br/><br/>

Coaching de Managers chez plusieurs éditeurs de
logiciels : <blue>gestion des priorités, leadership,
communication corporate</blue><br/>

Formalisation de la méthode winentretien de
préparation aux entretiens</content>
      </div>


      </div>


              </div>


              <div class="flex">
      
      
      

      
      

      


      <div id='box_graph' class="column_items_center">

      <div id="circle"></div>
      <div id="dropbar"></div>
      

      </div>

      
      
      <div class='column'>
      
      <h2title>
      2017
      
      </h2title>
      
      
      <div id='underline2'></div>
      <div id='box_content'>
      <content>Participation à la 2de
édition de <blue>« Comment
convaincre en moins
de cinq minutes »</blue>,
Eyrolles</content>
      </div>
      
      
      <img src={livre_eyrolles} className="livre_eyrolles"  />

      </div>


              </div>

              <div class="flex">
      
      
      

      
      

      


      <div id='box_graph' class="column_items_center">

      <div id="circle"></div>
      <div id="dropbar"></div>
      

      </div>

      
      
      <div class='column'>
      <div class="row">
      <h2title>
      2020
      
      </h2title>
      
      </div>
      <div id='underline2'></div>
      <div id='box_content'>
      <content>Je deviens auditrice certifiée sur la norme ISO 9001:2015
et le <blue>référentiel RNQ (Qualiopi)</blue><br/><br/>

Réalisation de +50 audits internes et <blue>audits de
certification</blue> depuis 2020</content>
      </div>


      </div>


              </div>

              <div class="flex">
      
      
      

      
      

      


      <div id='box_graph' class="column_items_center">

      <div id="circle"></div>
      <div id="dropbar"></div>
      

      </div>

      
      
      <div class='column'>
      <div class="row">
      <h2title>
      2021
      
      </h2title>
      
      </div>
      <div id='underline2'></div>
      <div id='box_content'>
      <content>Diplôme de <blue>« Pratiques du coaching »</blue> de l’université
Paris 8<br/><br/>

Rédaction d’un mémoire sur le thème de la <blue>résonance
et des émotions</blue><br/><br/>

Formation à la thérapie d’acceptation et d’engagement
(ACT)</content>
      </div>


      </div>


              </div>

              <div class="flex">
      
      
      

      
      

      


      <div id='box_graph' class="column_items_center">

      <div id="circle"></div>
      <div id="dropbar"></div>
      

      </div>

      
      
      <div class='column'>
      <div class="row">
      <h2title>
      Depuis 2022
      
      </h2title>
      
      </div>
      <div id='underline2'></div>
      <div id='box_content'>
      <content>Mon activité actuelle est centrée sur les <blue>coachings et
les audits qualité en entreprise.</blue><br/><br/>

Dans mes 2 activités, c’est la mise en valeur du
<blue> potentiel humain</blue> et l’intuition de sa <blue>puissance de
changement</blue> qui oriente mes interventions.</content>
      </div>


      </div>


              </div>



</div>








</div>
</div>






      






    

    
    </div>



  );
    
  }
  
  export default Coach;