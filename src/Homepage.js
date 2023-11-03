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
                              Depuis 15 ans, winentretien permet à des étudiants et
des professionnels de réussir leur entretien de
motivation : <br/><br/><blue><h3title>Concours d’entrée dans une école</h3title><br/><br/>

<h3title>Entretien d’embauche</h3title></blue><br/><br/>
Une fois en poste, nous vous proposons maintenant
des services de coaching orientés vers les difficultés de
communication ou de management que vous pouvez
rencontrer. Avec un objectif précis :
<br/><br/>
<strong>
                              <orange><h3title>Être bien dans son poste</h3title></orange>
</strong>                        

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
                              <h1title>Taux de réussite 2022 : 98%</h1title>
                              
                              <h2under2></h2under2>
                              
                        </div> 
                        <div class="note">
                              
                              
                              <content> Ce taux est calculé sur <strong>l’ensemble des accompagnements</strong> réalisés en 2022 pour préparer le concours d’entrée à une école –<blue> postbac,
Bac +2 et au-delà.</blue><br/><br/>
Nous personnalisons la méthode à votre situation personnelle et 
nous commençons par vous poser <strong>3 questions importantes :</strong> </content></div>                      
                  
                        
<div class='line'>

<div class='column_items_center'>

<div class='content_blue width'>
<orange><h3title>Vous candidatez pour une école hôtelière, une école
d’ingénieurs, ou une école de commerce :</h3title></orange>
<br />
<br />


<content500>Le choix de la filière d’orientation après le Bac est important et
souvent difficile.</content500>
<br /><white><content>
Quelles sont vos raisons personnelles d’avoir choisi cette filière ?</content></white><br /><br />


<orange><h3title>Votre 1er choix d’école :</h3title></orange><br /><br />
<content500>Vous êtes attiré(e) par une école pour certaines raisons évidentes
mais pour être admis vous devrez aller plus loin : savoir expliquer
pourquoi cette école plutôt qu’une autre.</content500><br />
<white><content>
Comment allez-vous justifier votre candidature ?
</content></white>
<br /><br />

<orange><h3title>Si vous êtes pris :</h3title></orange><br /><br />
<content500>Le rôle du jury est aussi d’anticiper de quelle manière vous
pouvez contribuer à faire de leur école un lieu attractif,
bienveillant, dynamique.</content500> <br />

<white><content>Pourquoi vous ?</content></white><br/><br/>

<content><strong><blue>Win</blue>entretien</strong> vous accompagne tout au long des étapes de la
préparation de votre entretien de motivation</content>


 


</div>
<div class="line">
<a id='bouton' >Ma méthode</a>

</div>     
      </div>                                  

                                    
                                    
      <div class="name_boxes" id="carole_name">
                              <content>Carole,<br/></content><content2>La Coach</content2>
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
                              <italic>- Atteinte des objectifs</italic><br/>
                              <italic>- Gestion des priorités</italic><br/>
                             <blue>Leadership</blue><br />
                             <italic>- Engagement </italic><br/>
                             <italic>- Management d'équipe</italic><br/>
                              <blue>Gestion du stress </blue><br/>
                              <blue>Communication </blue><br/>
                              <italic>- Prise de parole </italic><br/><italic> - Reporting</italic>
                              </content>
                              </div>
                        </div>

                        <div id="objectif_persona">
                              
                              <img src={avatar_etudiant} className="avatars" alt="logo" />
                              
                              
                              <div class="box_content">
                              <content>
                              <strong>Étudiants : <br /></strong>
                              Concours des écoles Hôtelières : <br /> 
                              <a href="#"><t_orange>VATEL</t_orange></a><strong>, EHL, Glion, Tunon</strong><br />
                              Concours des écoles d'ingénieurs : <br />
                              <a href="#"><t_orange>Groupe UT </t_orange> - </a><a href="#"><t_orange>Groupe Insa </t_orange></a><br />
                              Concours des écoles de commerce : <br />
                              <strong><a href="#">EDHEC</a> - Sesame - Access</strong>
                              </content>
</div>
                        </div>

                        <div class="column_items_center" id="preparation">


                        <div class='content_blue'>
                              


<content500>
La préparation aux entretiens est notre <strong>cœur de métier</strong>: elle concerne à la fois les étudiants (concours,
1er job) et les professionnels (entretien d’embauche, d’évaluation).<br/><br/>
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
                        <h1title>L'offre</h1title>
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
                        <h1title>Témoignages</h1title>
                        <div id="underline"></div>
                        </div>
                  </div>

            <div class="block">
                  <div class='column_items_center'>
                  <br />
                              
                              
<br />



                        </div>
                  

                 

                  </div>


                  <div class="column_items_center">

                  

                  
                              




                        

   
    
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

