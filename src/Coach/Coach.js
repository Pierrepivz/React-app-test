import "./Coach.css";
import livre_eyrolles from "../images/photo_eyrolles.jpeg";
import { Link } from "react-router-dom";
import photo_carole from "../images/photo_carole_face.JPG";
import carole_pied from "../images/photo_carole_pied.JPG";
import winentretien from "../images/winentretien_team.jpg";
import {Helmet} from "react-helmet";
function Coach(){

   



  return(

   <div className="Contact Page">


<Helmet>
       
       <title>Présentation et parcours coach de winentretien carole pivin</title>
       <meta name="description" content="Le parcours de la coach de winentretien : une formation scientifique, 25 années de conseil et formation, 7 années de coaching aux étudiants et professionnels"></meta>
       <link rel="canonical" href="https://www.winentretien.com/Coach" alt=""/>
      </Helmet>



<div id="titre_second"class='column_items_center'>
                              
                              <h1>La Coach</h1>
                              
                              <h2under2></h2under2>

                              
                              
                        </div>

<div class="window column block">

<div class="row space_between" id="coach_block_1" >

                  

                  

                  <div class="column_start" id="coach_message1">
                  <h2><h2title>La Coach : Carole Pivin</h2title></h2>
                  <div class="underline2"></div>

                  

                  <div class="content_blue">
                  <content>
                  <strong>Mon activité de coach en préparation aux entretiens de motivation est née de mon expérience
de consultante et d’enseignante en universités.</strong><br/><br/>

                   
J’ai constaté la difficulté de la plupart des lycéens et jeunes étudiants <blue>à parler d’eux-mêmes</blue>, à mettre
des mots sur leur parcours et les raisons de leur orientation.
Pour certains même, leur difficulté à choisir une orientation et à aborder sereinement l’entrée dans
les études supérieures.<br/><br/>
Ma formation de coach professionnelle, et mon expérience sur l’accompagnement de mes clients,
m’ont donné des outils qui sont à l’origine d’une méthode qui a de multiples applications :<br/><br/><strong> - validation
d’une orientation,<br/><br/> - rédaction d’un argumentaire pour une lettre <br/>ou un oral de motivation,<br/><br/> - coaching
professionnel.</strong><br/><br/>
Chaque accompagnement est unique mais guidé par quelques constantes, comme l’écoute, la
recherche de vos qualités et compétences, et le désir de vous faire réussir.<br/>
<blue>Avec un impératif : <strong>le respect de votre zone de confort.</strong> </blue>


  <i class="fa-solid fa-angle-right 2xl" id="icon"></i></content>


</div>
                
                  </div>

                  
                  

                  <div class="column_items_center" id="coach_message2">

                        
                        
                              <img class="photo_box" src={photo_carole} alt=""/>
                        
                        

                        <div class="mobile_off">
                  
<br/><br/>
<Link to='./Methode_Page' onClick={() => window.scrollTo(0,10)}><button id="bouton"><content>Ma méthode</content></button></Link>


</div>

                  
                  
                 

                  </div>
                  

                  </div>


<div class="line_between block mobile_off" id="coach_message3">




<div class="column">
<div class="row"><h2><h1title>Mon parcours</h1title></h2><i id="icon" class="fa-solid fa-book-open"></i></div>
<h2under2></h2under2>
<img src={carole_pied} id="coach_photo" alt=""/>

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
      Avant 1995
      
      </h2title>
      
      </div>
      <div id='underline2'></div>
      <div id='box_content'>
      <content>
      Après des études scientifiques, je pratique l’informatique
à ses débuts. Je travaille pendant 5 ans aux Etats Unis, en
tant qu’ingénieur réseaux, tout en donnant des cours de
français à l’université.
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
      <content>J’entre dans un cabinet de conseil américain en tant que
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
      <content>Je me lance dans une <blue>activité indépendante de conseil
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
      
      
      <img src={livre_eyrolles} className="livre_eyrolles" alt="" />

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
      <content>Mon activité actuelle est centrée sur les <blue>préparations aux entretiens, les coachings</blue> et les
audits qualité.<br/><br/>
Dans les 2 premières activités, c’est la mise en valeur du
<blue> potentiel de chacun</blue>, <blue>l’intuition</blue> de sa capacité
naturelle à se dépasser, qui orientent mes
interventions.<br/><br/>

</content>
      </div>


      </div>


              </div>



</div>








</div>

<div class="row space_between block" id="coach_block_2" >

                  

                  

                  <div class="column_start" id="coach_message1">

                  <h2><h2title>Au sujet de winentretien</h2title></h2>
                  <div class="underline2"></div>

                  

                  <div class="content_blue">
                  <content>
                  winentretien a été créée en 2007 par Cécile Mellac, sur la base du constat que de bons candidats
échouent aux concours d'entrée aux grandes écoles parce qu'ils ont une note éliminatoire à leurs
entretiens de motivation.<br/><br/>
<strong>Acquérir une aisance à l’oral, savoir pitcher, décrypter les attentes d’un jury, seront à la base de la
création de winentretien.</strong><br/><br/>
Plus de 600 étudiants ont été préparés à réussir leur entretien de motivation afin d’intégrer de
nombreuses Écoles et formations sélectives - Écoles de Commerce, Écoles d'Ingénieurs, Sciences Po,
Écoles hôtelières, Mastères spécialisés.<br/>

<h2><h2title>Aujourd'hui, qu’est-ce qui a changé ?</h2title></h2>

Les écoles, les universités, les recruteurs affectent un rôle essentiel dans leur processus d'intégration
au potentiel relationnel et créatif des candidats, et à leur aptitude à réussir dans ce qu'ils
entreprennent.<br/><br/>
Charge à ceux-ci d'argumenter et de légitimer leurs réponses à des questions cherchant à discerner
ce potentiel en eux, en proposant une candidature authentique, originale et attractive.<br/><br/>
Savoir communiquer sa singularité et sa valeur ajoutée de manière authentique, se positionner de
façon juste, comprendre les attentes de son interlocuteur, sont encore plus nécessaires aujourd'hui
dans des parcours professionnels très concurrentiels.<br/>
<blue>Vous aider à acquérir ces compétences reste le cœur de métier de winentretien</blue>

</content>


</div>
                
                  </div>

                  
                  

                  <div class="column_items_center" id="coach_message2">

                        
                        
                              <img class="photo_box mobile_off" src={winentretien} alt=""/>
                        
                        

                        <div class="column_items_center">
                  <br/><br/><br/>
<Link to='./offre' onClick={() => window.scrollTo(0,10)}><button id="bouton"><content>Mon offre</content></button></Link>


</div>

                  
                  
                 

                  </div>
                  

                  </div>

</div>






      






    

    
    </div>



  );
    
  }
  
  export default Coach;