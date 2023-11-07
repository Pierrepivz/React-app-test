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
import Persona from "./Persona.js";
import Statistics from "./Statistics.js";
import offre1 from "./images/offre1.jpeg";
import offre2 from "./images/offre2.jpg";





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

                  <br/>
                  <Persona />

                  <Statistics />

                  

                              
                              

                        
                        


                  

                  

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

                              
                              <div class="photo" >
                              <img src={offre1}/>
                              </div>
                                    
                                    
                                    
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

                              
                              <div class="photo">

                                <img src={offre2}/> 

                                    </div> 
                                    
                                    
                                    
                              </div>

                                    <Link to='/offre'>
                                    <a id='bouton' >En savoir +</a>
                                    </Link>

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


    <div class="column_items_center note img_temoignage">
  
    <div class="row">
      <div class="column_items_center">
    <div class="profils column"><img src={img_mathilde}  /></div><br/>

    <h3title>Caroline</h3title>
    <content1><blue>Dirigeante, 2021</blue></content1>
    </div>
    
    <br/>
    <content>" Le coaching avec Carole a été la bouée d’ancrage me permettant
d’avancer un peu mieux et un peu plus sereinement chaque mois.<br/><br/>
Cette expérience de coaching pousse au-delà même après les séances. Merci."</content>
    
</div>
    </div>

    <div class="column_items_center note img_temoignage">
     
    <div class="row"> 

    <div class="column_items_center">  
    <div class="profils column"><img src={img_milena}  /></div><br/>
    <h3title>Milena</h3title>
    <content1><blue>Chargée de partenariats dans le <br/> milieu associatif, 2021</blue></content1>
    </div>
    
    <content>" Carole m'a accompagnée en 2021. <br/>
    Ce coaching a été une merveilleuse expèrience dont j'ai tiré beaucoup d'enseignements. <br/> Elle m'a aidé a prendre confiance en moi au niveau professionnel et à définir davantage mon projet.<br/>
    <br/>Je recommande chaleureusement le coaching avec elle, car c'est une expèrience forcément enrichissante, prodiguée en plus par une belle personne qui comprend ce qui vous bloque et vous aide à construire la carrière dont vous rêvez. "</content>
    
    </div>
    </div>

    <div class="note img_temoignage column_items_center" >
    
    <div class="row">

    <div class="column_items_center">
    <div class="profils column"><img src={img_jade}  /></div>
    <br/>
    <h3title>Jade</h3title>
    <content1><blue>Terminale S, admise BBA EDHEC,<br/> 2023</blue></content1></div>

    

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

                  


                  


            </div>
      );
}

export default Homepage;

