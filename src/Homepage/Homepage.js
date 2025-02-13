

 
import { lazy } from 'react';

import { Link } from 'react-router-dom';










import offre1 from "../images/mirabeau.jpg";
import offre2 from "../images/bienposte.jpeg";
import Robin from "../images/arthur_robin.jpg";


import { Helmet } from "react-helmet";
import img_jade from '../images/photo_jade.jpg';
import img_milena from '../images/femme_dos.jpg';
import img_mathilde from '../images/photo_mathilde.png';
const Schema = lazy(() => import('../Schema/Schema.js'));
const Persona = lazy(() => import('./Persona.js'));
const Statistics = lazy(() => import('./Statistics.js'));



lazy(() => import("../globals.css"));
lazy(() => import("./homepage.css"));




function Homepage(){

     

      



      return (
            <div className="Homepage">
           
           <Helmet>
       
       <title>Winentretien : La préparation sur mesure</title>
       <meta name="description" content="Winentretien Paris vous forme à la réussite de votre projet professionnel, pour toutes les étapes de votre carrière, des études jusqu'a la reconversion professionnelle."></meta>
       <link rel="canonical" href="https://www.winentretien.com/" />

      </Helmet>
          

                  <div class="Homemain">
                  


                        <div class="column" id="main">

                              <htitle>
                                    Atteindre son objectif, <br/>ça s'apprend
      </htitle>

                              <div class='underline2'></div>
                              
                              <hcontent>
                              Depuis 15 ans, <blue>win</blue><strong>entretien</strong> permet à des étudiants et
des professionnels de réussir leur <strong>entretien de
motivation :</strong> <br/><br/><blue><h3title>Concours d’entrée dans une école</h3title><br/><br/>

<h3title>Entretien d’embauche</h3title></blue><br/><br/>
Une fois en poste, nous vous proposons maintenant
des <strong>services de coaching</strong> orientés vers les difficultés de
communication ou de management que vous pouvez
rencontrer. <br/>Avec un objectif précis :
<br/><br/>
<strong>
                              <orange><h3title>Être bien dans son poste</h3title></orange>
</strong>                        

      </hcontent>
                                    
                                    <Link to='/offre' onClick={() => window.scrollTo(0,10)}>
                                    <button id='bouton' >Mon offre</button>
                                    </Link>
                                    
                        </div>
                        
                        
                        

                        

                        <div id="home_graph" >
                        

                        

<div id="objectif_jules" class="column_items_center">



<div id="objectif_box" class="column_items_center">
      <content1>CV </content1>
      
      
      <blue><content2><italic> Avoir
un CV qui retient l’attention </italic></content2></blue>
</div>
<div id="objectif_box" class="column_items_center">
      <content1>Concours</content1>
      
      <blue><content2><italic> Réussir les concours<br/> postbac </italic></content2></blue>
      
</div>
<div id="objectif_box" class="column_items_center">
      <content1>1er job</content1>
      
      <blue><content2><italic> Réussir mes
entretiens <br/>et décrocher un 1er job </italic></content2></blue>
</div>




</div>

<div id="objectif_quentin" class="column_items_center">

<div id="objectif_box" class="column_items_center">
      <content1>Efficacité</content1>
      
      
      
      <blue><content2><italic> Devenir plus efficace dans<br/> l'organisation de mon travail </italic></content2></blue>
</div>
<div id="objectif_box" class="column_items_center">
<content1>Leadership</content1>

      <blue><content2><italic> Générer l’adhésion et<br/> la cohésion au
sein de mon équipe </italic></content2></blue>
</div>
<div id="objectif_box" class="column_items_center">
      <content1>Réorientation</content1>
      
      <blue><content2><italic> Réussir mon changement <br/>d'organisation ou de métier </italic></content2></blue>
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

                  <div class="note"><content> Conçue par expérience, <strong>adaptée au besoin de chacun,</strong> <br/>elle répond à l’un de ces deux
objectifs – parce qu’ils sont <strong>importants</strong> dans l’exercice de <strong>toute activité professionnelle</strong>  </content><br />
</div></div>
                        



                        <div class='line' id="offre_mobile">

                              <div class="column_start sub-offre-mobile">

                              <offretitle>Convaincre à l'oral</offretitle>
                              <h2under2></h2under2>
                              
                              

                              <br/>
                              
                              <div class="column_items_center">

                              <div class='home_offre column_items_center'>

                              
                              <div class="photo">
                              <img src={offre1} alt=""/>
                              </div>
                                    
                                    
                                    
                              </div>

                                    <Link to='/offre' onClick={() => window.scrollTo(0,10)}>
                                    <button id='bouton' >En savoir +</button>
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

                                <img src={offre2} alt=""/> 

                                    </div> 
                                    
                                    
                                    
                              </div>

                                    <Link to='/offre' onClick={() => window.scrollTo(0,10)}>
                                    <button id='bouton' >En savoir +</button>
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

                  

                  <div class="section mobile_off">
                        <div class="margin_left">
                        <h1title>Témoignages</h1title>
                        <div id="underline"></div>
                        </div>
                  </div>

            <div class="block column_items_center window">
                  
                  
                  
            <div class="column_items_center first_temoignage">
  
  <div class="row">
    <div class="column_items_center">
  <div class="profils column"><img src={Robin} alt="" /></div><br/>

  <h3title>Robin</h3title>
  <content1><blue>Terminale S, admis VATEL Paris 2023 </blue></content1>
  </div>
  
  <br/>
  <content><blue> Avec les 4 heures de préparation à l’entretien,
j’ai pu mettre des mots sur les raisons pour
lesquelles j’ai choisi de travailler dans
l’hôtellerie.<br/><br/>

La séance d’entraînement m’a permis d’être
moins stressé et au final j’ai été admis à Vatel
Paris.</blue></content>
  
</div>
  </div>
                 
<br/><br/>
                  


                  

                  

                  
                              




                        

   
    
    <div class="row" id="temoignage">
    
    <div class="swipe_buton" id="swipe_left"><i class="fa-solid fa-chevron-left"></i></div>
    <div class="swipe_buton" id="swipe_right"><i class="fa-solid fa-chevron-right"></i></div>
    <div id="retours_client_viewport">

    <div class="row block" id="retours_client">


    <div class="column_items_center note img_temoignage">
  
    <div class="row">
      <div class="column_items_center">
    <div class="profils column"><img src={img_mathilde}  alt=""/></div><br/>

    <h3title>Caroline</h3title>
    <content1><blue>Dirigeante, 2022</blue></content1>
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
    <div class="profils column"><img src={img_milena}  alt=""/></div><br/>
    <h3title>Milena</h3title>
    <content1><blue>Chargée de partenariats dans le <br/> milieu associatif, 2022</blue></content1>
    </div>
    
    <content>" Carole m'a accompagnée en 2021. <br/>
    Ce coaching a été une merveilleuse expèrience dont j'ai tiré beaucoup d'enseignements. <br/><br/> Elle m'a aidé a prendre confiance en moi au niveau professionnel et à définir davantage mon projet.
    "</content>
    
    </div>
    </div>

    <div class="note img_temoignage column_items_center" >
    
    <div class="row">

    <div class="column_items_center">
    <div class="profils column"><img src={img_jade}  alt=""/></div>
    <br/>
    <h3title>Jade</h3title>
    <content1><blue>Terminale S, admise BBA EDHEC,<br/> 2023</blue></content1></div>

    

    <content>Le coaching avec Carole a été d’une grande aide pour moi et 
          s’est révélé très efficace. <br/>Carole m’a permis de prendre conscience 
          de mes points forts et de mes points d’amélioration. <br/><br/>
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

