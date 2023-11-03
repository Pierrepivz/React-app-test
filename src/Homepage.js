import avatar_pro from './images/avatar_pro_v1.svg';
import avatar_etudiant from './images/avatar_etudiant.svg';
import Schema from './Schema';
import { Link } from 'react-router-dom';
import offre_c1 from './images/offre_c1.svg';
import offre_c2 from './images/offre_c2.svg';
import offre_c3 from './images/faire_un_choix.svg';
import offre_c4 from './images/prise_de_poste.svg';
import img_mathilde from './images/photo_mathilde.png';
import img_milena from './images/milena.jpg';
import img_jade from './images/photo_jade.jpg';
import "./globals.css";
import "./homepage.css";





/*<img src={logo} className="win-logo" alt="logo" />*/

function Homepage() {

     

      /*var swipe_left = document.querySelector("#swipe_left");
      var swipe_right = document.querySelector("#swipe_right");
      var temoignage = document.querySelector(".img_temoignage");

      function swipe_right(){
            temoignage.classList.add('.swipe_right');
            
      }
      swipe_left.addEventListener("input", swipe_right);*/



      return (
            <div className="Homepage">
           
                  <div class="background_decoration decoration" id="decoration_home_1_1"></div>
                  <div class="background_decoration decoration" id="decoration_home_1_2"></div>
                  <div class="background_decoration decoration" id="decoration_home_1_3"></div>
                  <div class="background_decoration decoration4" id="decoration_home_4_1"></div>
                  <div class="background_decoration decoration5" id="decoration_home_5_1"></div>
            

                  <div class="Homemain">
                  


                        <div id="main">

                              <htitle>
                                    Atteindre son objectif, <br/>ça s'apprend
      </htitle>

                              <div id='underline2'></div>
                              
                              <hcontent>
                              Depuis 15 ans winentretien accompagne étudiants et
professionnels et les aide à réussir les entretiens de
motivation : <br/><blue>concours d’entrée dans une école, entretien
d’embauche.</blue><br/><br/>
Pour cela, nous proposons une méthode éprouvée qui leur
permet de bien définir leur projet, de mettre des mots
précis sur leur motivation et de s’entraîner.<br/><br/>
Désormais, nous proposons également de vous
accompagner une fois que vous êtes en poste, pour
l’acquisition ou le renforcement de compétences essentielles
comme : être efficace, savoir gérer sa charge de travail, ou
encore bien communiquer.<br/><br/>
Si votre objectif est de développer ces compétences ou
d’autres ‘soft-skills’, <strong>
                                    <orange>nous pouvons vous y aider.</orange>
</strong> <br />
                                <br />
                                    
                              
                                   
                                    
                                    
                                    
                                    <br /><br />
                                    
                                    

      </hcontent>
                                    
                                    <Link to='/offre'>
                                    <a id='bouton' >Mon offre</a>
                                    </Link>
                                    
                                    

                                    
                        </div>
                        
                        
                        <div class="column_items_center">

                        

                        <div id="home_graph">
                        <div class="name_boxes" id="quentin_name">
                              <content>Bruno,<br/></content><content2>Directeur des ventes</content2>
                              </div>
                              <div class="name_boxes" id="jules_name">
                              <content>Jules,<br/></content><content2>Terminale S</content2>
                              </div>

                        

<div id="objectif_jules" class="column_items_center">



<div id="objectif_box" class="column_items_center">
      <content1>CV </content1>
      
      
      <blue><content2>' Avoir
un CV qui retient l’attention '</content2></blue>
</div>
<div id="objectif_box" class="column_items_center">
      <content1>Concours</content1>
      
      <blue><content2>' Réussir les concours<br/> postbac '</content2></blue>
      
</div>
<div id="objectif_box" class="column_items_center">
      <content1>1er job</content1>
      
      <blue><content2>' Réussir l’entretien de motivation '</content2></blue>
</div>




</div>

<div id="objectif_quentin" class="column_items_center">

<div id="objectif_box" class="column_items_center">
      <content1>Efficacité</content1>
      
      
      
      <blue><content2>' Atteindre mes objectifs '</content2></blue>
</div>
<div id="objectif_box" class="column_items_center">
<content1>Leadership</content1>

      <blue><content2>' Générer l'adhésion '</content2></blue>
</div>
<div id="objectif_box" class="column_items_center">
      <content1>Réorientation</content1>
      
      <blue><content2>' Changer de métier '</content2></blue>
</div>



</div>

</div> 
                                    
                        </div>

                  </div>




                  

                  <div class="block column_start margin_left margin_right">

                  <div id="titre_second"class='column_items_center'>
                              <h1title>Taux de réussite 2022 : 95%</h1title>
                              
                              <h2under2></h2under2>
                              
                        </div> 
                        <div class="note">
                              
                              
                              <content> Ce taux est calculé sur l’ensemble des accompagnements réalisés en 2022 pour préparer le concours d’entrée à une école –<blue> postbac,
Bac +2 et au-delà.</blue><br/><br/>
Nous personnalisons la méthode à votre situation personnelle et nous commençons par vous poser <strong>3 questions importantes :</strong> </content></div>                      
                  
                        
<div class='line'>

<div class='column_items_center'>

<div class='content_blue width'>
<orange><h3title>Vous candidatez pour une école ou vous postulez pour un poste ?</h3title></orange>
<br />
<br />


<content500>Ce n’est pas par hasard : vous avez des raisons particulières
et personnelles de le faire.</content500>
<br /><white><content>
Quels sont les mots qui seront les plus efficaces pour convaincre 
un jury ou un recruteur ?</content></white><br /><br />


<orange><h3title>Vous êtes démarché pour un nouveau poste mais vous hésitez ?</h3title></orange><br /><br />
<content500>Vous avez raison. Il est important de prendre la mesure
d’une décision qui peut changer votre vie.</content500><br />
<white><content>
Quelles raisons vous poussent à accepter  ? Et à refuser ?
</content></white>
<br /><br />

<orange><h3title>Promotion, changement d’organisation, de métier : challenge ou stress ?</h3title></orange><br /><br />
<content500>Sans doute les deux à la fois. Evoquer les difficultés que cette transition soulève permet
souvent de les résoudre</content500> <br />

<white><content>A quoi verrez-vous que vous avez trouvé vos marques ?</content></white>


 


</div>
<div class="line">
<a id='bouton' >Ma méthode</a>

</div>     
      </div>                                  

                                    
                                    
      <div class="name_boxes" id="carole_name">
                              <content>Carole,<br/></content><content2>Coach</content2>
                              </div>

      <div class="cible_graph"></div>
     
      </div>

      


      
                              
                              
                              </div>

                              
                              

                        
                        <div class="persona">
                        

                        <div class='column_items_center'>

                              <h1title> Nos axes d'intervention</h1title>
                              
                              
                              <h2under2></h2under2>
                              
                              <div class="note">
                              
                              
                              <content><strong>Etudiant(e)s, professionnel(le)s</strong> en activité, ou en <strong>recherche d’emploi</strong> : <br/>
                                                        notre offre s’adresse à <strong>tous (et à toutes).</strong></content>
                              </div>
                             
                             
      
                        </div>

                        <div class="window">
                        <div class="row">
                         
                        
                        <div id="objectif_persona">

                              <img src={avatar_pro} className="avatars" alt="logo" />

                              
                              <div class="box_content">
                              <content>
                              <strong>Professionnels : <br /></strong>
                              
                              Entretien de <blue>recrutement</blue><br />
                              Prise de <blue>poste</blue><br />

                              <blue>Efficacité</blue><br/>
                              Atteinte des objectifs<br/>
                              Gestion des priorités<br/>
                             <blue>Leadership</blue><br />
                             Engagement <br/>
                             Management d'équipe<br/>
                              <blue>Gestion du stress </blue><br/>
                              <blue>Communication </blue><br/>
                              Prise de parole <br/> Reporting
                              </content>
                              </div>
                        </div>

                        <div id="objectif_persona">
                              
                              <img src={avatar_etudiant} className="avatars" alt="logo" />
                              
                              
                              <div class="box_content">
                              <content>
                              <strong>Étudiants : <br /></strong>
                              Concours des écoles Hôtelières : <br /> 
                              <a href="#"><t_orange>VATEL</t_orange></a><blue>, EHL, Glion, Tunon</blue><br />
                              Concours des écoles d'ingénieurs : <br />
                              <a href="#"><t_orange>Groupe UT </t_orange><blue> -</blue> </a><a href="#"><t_orange>Groupe Insa </t_orange></a><br />
                              Concours des écoles de commerce : <br />
                              <blue><a href="#"><t_orange>EDHEC</t_orange></a> - Sesame - Access</blue>
                              </content>
</div>
                        </div>

                        <div class="column_items_center" id="preparation">


                        <div class='content_blue'>
                              


<content500>
La préparation aux entretiens est notre cœur de métier : elle concerne à la fois les étudiants (concours,
1
er job) et les professionnels (entretien d’embauche, d’évaluation).<br/><br/>
Nous avons renforcé cette offre avec des services de coaching centrés sur <orange>les problématiques les plus
fréquemment rencontrées</orange> une fois en poste – <blue><br/>indiqués en bleu</blue> </content500>
<br /><br />


                        </div>

                        <div class="line">
<a id='bouton' >En savoir +</a>

</div>

                        
</div>
                        
                        </div>





                        </div>

                        </div>


                  

                  <div class="section block">
                        <div class="margin_left">
                        <h1title>Comment ca marche ?</h1title>
                        <div id="underline"></div>
                        </div>
                  </div>
                  <Schema />

                  <div class="section block">
                         <div class="margin_left">
                        <h1title>Mon offre</h1title>
                        <div id="underline"></div>
                        </div>
                  </div>




                  <div class='block window'>

                  <div class="column_items_center">

                  <div class="note"><content>" Conçue par expérience, <strong>adaptée au besoin de chacun,</strong> <br/>elle répond à l’un de ces deux
objectifs – parce qu’ils sont <strong>importants</strong> dans l’exercice de <strong>toute activité professionnelle</strong> " </content><br />
</div></div>
                        



                        <div class='line'>

                              <div class="column_start">

                              <offretitle>Convaincre à l'oral</offretitle>
                              <h2under2></h2under2>
                              
                              

                              <br/>
                              
                              <div class="column_items_center">

                              <div class='home_offre column_items_center'>

                              
                              <div class="photo"></div>
                                    
                                    
                                    
                              </div>

                                    <Link to='/offre'>
                                    <a id='bouton' >En savoir +</a>
                                    </Link>

                              </div>
                              </div>



                              <div class="column_start">

                              <offretitle>Être à l'aise dans son poste</offretitle>
                              <h2under2></h2under2>
                              
                              

                              <br/>
                              
                              <div class="column_items_center">

                              <div class='home_offre column_items_center'>

                              
                              <div class="photo"></div> 
                                    
                                    
                                    
                              </div>

                                    <Link to='/offre'>
                                    <a id='bouton' >En savoir +</a>
                                    </Link>

                              </div>
                              </div>
                              
                                    
                              

                              


                        </div>

                        



                        

                  </div>

                  <div class="section">
                        <div class="margin_left">
                        <h1title>Qui-suis-je ?</h1title>
                        <div id="underline"></div>
                        </div>
                  </div>

            <div class="block">
                  <div class='column_items_center'>
                  <br />
                              <div class="note"><italic><h3title>" Ce que l’on conçoit bien s’énonce clairement.<br/>
Et les mots pour le dire arrivent aisément. " </h3title></italic><br /><br />
<strong><content>- Nicolas Boileau</content></strong></div>
                              
<br />



                        </div>
                  <div class="line" >

                  

                  

                  <div class="column_start" id="coach">
                  <h2title>La Coach : Carole Pivin</h2title>
                  <div id="underline2"></div>

                  

                  <div class="content_blue">
                  <content>
                  Quelques mots pour parler de mon envie de vous accompagner...<br/>

Dans les trois professions que j'exerce depuis plus de 25 ans :  <strong>la formation, le conseil et le coaching</strong>, il y a un point de convergence essentiel qui est la relation à l'autre.<br/><br/>

C'est l'unicité de la rencontre, avec une classe, un groupe de dirigeants ou tout simplement une personnalité unique  - car tous mes clients sont de belles personnes - qui permet de développer une relation singulière, où la qualité de l'attention portée à l'autre permet que surviennent des instants de vérité et de possibilités.  <br/>

La recherche de ces moments suspendus, où la compréhension et l'acceptation surgissent, dans un climat de totale bienveillance : c'est cela que je tente à chaque fois de développer avec vous.<br/><br/>

Par <strong>l'écoute, la reformulation, l'équanimité.</strong><br/><br/>

Par des techniques qui s'appuient sur le pouvoir des mots, des silences et de toutes leurs combinaisons.<br/>  <i class="fa-solid fa-arrow-down" id="icon"></i></content>


</div>
                 <Link to="/coach">
                 <a id='bouton' >En savoir +</a>
                 </Link>
                  </div>

                  
                  

                  <div class="column_start" id="contact">

                  <div id="blue_content">
                        <div id="photo"></div>
                        <div class="photo_avatar"></div>

                  </div>
                  
                 

                  </div>
                  

                  </div>

                 

                  </div>


                  <div class="column_items_center">

                  <div class='column_items_center'>
                              
                              <h2title>Témoignages<blue> <i class="fa-solid fa-users" id="icon"></i></blue></h2title>
                              <h2under></h2under>
                              <h2under2></h2under2>
                              
                              
                        </div>

                  <div class="temoignage_etudiant block">
                   <content1><italic><blue>Jules, Terminale S, Admis VATEL en 2022</blue></italic> </content1>          
                  <img src={avatar_etudiant} className="avatars" alt="logo" />
                  
                              <div class="note"><italic><h3title>"Grâce aux 4 heures de préparation à l'entretien, j'ai pu mettre des mots sur ma motivation et j'ai été admis à VATEL Paris." </h3title></italic><br /><br />
<strong><content></content></strong></div></div>
                              




                        

   
    
    <div class="line_around" id="temoignage">
    
    <div class="swipe_buton" id="swipe_left"><i class="fa-solid fa-chevron-left"></i></div>
    <div class="swipe_buton" id="swipe_right"><i class="fa-solid fa-chevron-right"></i></div>
    <div id="retours_client_viewport">

    <div class="line_around block" id="retours_client">


    <div class="column_items_center note img_temoignage" id="img_1" >
    <div class="profils column"><img src={img_mathilde}  /></div><br/>
    <h3title>Caroline</h3title>
    <content1><blue>Dirigeante, 2021</blue></content1>
    <br/>
    <content>" Le coaching avec Carole a été la bouée d’ancrage me permettant
d’avancer un peu mieux et un peu plus sereinement chaque mois.<br/><br/>
Cette expérience de coaching pousse au-delà même après les séances. Merci."</content>
    

    </div>

    <div class="column_items_center note img_temoignage" >
    <div class="profils column"><img src={img_milena}  /></div><br/>
    <h3title>Milena</h3title>
    <content1><blue>Chargée de partenariats dans le milieu associatif, 2021</blue></content1>
    <br/>
    <content>" Carole m'a accompagnée en 2021. <br/>
    Ce coaching a été une merveilleuse expèrience dont j'ai tiré beaucoup d'enseignements. <br/> Elle m'a aidé a prendre confiance en moi au niveau professionnel et à définir davantage mon projet.<br/>
    <br/>Je recommande chaleureusement le coaching avec elle, car c'est une expèrience forcément enrichissante, prodiguée en plus par une belle personne qui comprend ce qui vous bloque et vous aide à construire la carrière dont vous rêvez. "</content>
    

    </div>

    <div class="note img_temoignage column_items_center" >
    <div class="profils column"><img src={img_jade}  /><br/></div>
    <h3title>Jade</h3title>
    <content1><blue>Terminale S, admise BBA EDHEC, 2023</blue></content1>
    <br/>

    <content>Le coaching avec Carole à été d’une grande aide pour moi et 
          s’est révélé très efficace. <br/>Carole m’a permis de prendre conscience 
          de mes points forts et également de mes points d’amélioration. <br/><br/>
          Je suis convaincue que grâce à son coaching,
           j’ai pu obtenir l’école que je souhaitais rejoindre.</content>
    
    </div>
   







    </div>

    </div>

    
    </div>


    </div>

                  


                  


            </div>
      );
}

export default Homepage;

