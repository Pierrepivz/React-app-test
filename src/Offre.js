import offre_c1 from './images/offre_c1.svg';
import offre_c2 from './images/offre_c2.svg';
import offre_c3 from './images/offre_c3.svg';
import offre_c4 from './images/offre_c4.svg';
import avatar_pro from './images/avatar_pro_v1.svg';
import avatar_etudiant from './images/avatar_etudiant.svg';
import { Link } from 'react-router-dom';

/*<img src={logo} className="win-logo" alt="logo" />*/

function Offre() {

      
      
      

      return (
            <div className="Offre">

<div id="titre_second"class='column_items_center'>
                              
                              
                              <h1title>Mon offre</h1title>
                              <h2under></h2under>
                              <h2under2></h2under2>
                              <div class="note column_items_center">
                              
       
                              
                              <content> Elle a été conçue pour accompagner <strong>les moments clés de chacun dans son évolution professionnelle,</strong> depuis la sortie des études et la recherche d’un 1er job, jusqu’aux multiples rebondissements de la fin de carrière, en passant <strong>par ces moments décisifs</strong> que sont un changement de responsabilités, d’entreprise, ou un désir de réorientation.</content></div>
                              
                        </div> 

                        <div class="column_items_center block">
                              
                              
                        <div class="line_around" id="offre_box">

<div class="column_items_center">

<content><blue>CV et profil</blue></content>
<div class="pre_offre_icon" >  <img src={offre_c1}  />  </div>
            
            
</div>

<div class="column_items_center">

<content><blue>Réussir un entretien</blue></content>
<div class="pre_offre_icon" >  <img src={offre_c2}  />  </div>
            
            
</div>

<div class="column_items_center">

<content><blue>Prise de poste</blue></content>
<div class="pre_offre_icon" >  <img src={offre_c3}  />  </div>
            
           
</div>

<div class="column_items_center">

<content><blue>Faire un choix</blue></content>
<div class="pre_offre_icon" >  <img src={offre_c4}  />  </div>
</div>

</div>


<br/><br/><br/><br/>
</div>

                        <div class="section block">
                        <div class="margin_left">
                        <h2title>Quelle offre pour moi ?</h2title>
                        <div id="underline"></div>
                        </div>
                  </div>

                        <div class="margin_left margin_right column_start">
                        
                        
                        
                        

                        <div class="column_items_center block">

                        <div class='column_items_center'>
                  <br />
                              <div class="note"><content>" Chez <blue>win</blue><strong>entretien</strong> nous faisons du sur-mesure - votre situation est particulière - mais en partant d'une approche standard (ma Méthode). 
Le tableau qui suit illustre comment nos 4 offres peuvent répondre, isolées ou combinées, à des situations <strong>professionnelles particulières et fréquemment rencontrées. </strong>" </content>
</div>
                              




                        </div>      




    <div id="tab" class="block row">

    <div class="column" > 


    <h3title class="tab_title"><blue></blue></h3title>

    <div class="tab_col column_items_center">

     <content1><img src={avatar_etudiant} className="avatars" alt="logo" />Je suis etudiant :<br/> <div class="underline"></div></content1>
     <content1><img src={avatar_pro} className="avatars" alt="logo" /><content>Je suis <br/></content> professionnel :<br/><div class="underline"></div></content1>

    </div>
    </div>

     


    

    <div class="column"> 

    <content2 class="tab_title"><blue>Passer un concours, trouver un stage <i class="fa-solid fa-arrow-right"></i></blue></content2>

    <div class="tab_col2 column">
     
     <div class="flex">
           
      
     <img src={offre_c2} class="tab_offre_icon" /> 
     
     <img src={offre_c1} class="tab_offre_icon" /> 
     </div>

     <div class="column">
     
     
     </div>

     

     

    </div>
    
    </div> 

    <div class="column"> 

    <content class="tab_title"><blue>S'adapter à un nouveau poste <i class="fa-solid fa-arrow-right"></i></blue></content>

    <div class="tab_col2 column">
    <div class="flex">

           <img src={offre_c4} class="tab_offre_icon" id="prise_de_poste" ></img>
           <div class="offre_note">
           <content>Mon 1er CDI... je dois vite faire mes preuves</content>
           </div>
      
           </div>
    

    <div class="flex">
     
    <img src={offre_c4} class="tab_offre_icon" id="prise_de_poste" /> 
    <div class="offre_note">
           <content>DRH, 1200 salariés : je suis sous l'eau </content>
           </div>

     </div>

     
     
     
     

    </div>
    
    </div>

    <div class="column"> 

    <content class="tab_title"><blue>Partir ou rester où je suis <i class="fa-solid fa-arrow-right"></i></blue></content>

    <div class="tab_col2 column">
     
    <div class="column">
     
     
     </div>
    

    <div class="flex">
     
    <img src={offre_c3} class="tab_offre_icon" /> 

    </div>

     
     

    

    </div>
    
    </div>

    <div class="column"> 

    <content class="tab_title"><blue>Changer <br/>d'orientation <i class="fa-solid fa-arrow-right"></i></blue></content>

    <div class="tab_col2 column">
    <div class="flex">

           <img src={offre_c1} class="tab_offre_icon" /> 

           </div>
    

    <div class="flex">
     
    <img src={offre_c1} class="tab_offre_icon" /> 

     </div>

     
     
     
     

    </div>
    
    </div>

    <div class="column"> 

    <content class="tab_title"><blue>Passer un entretien de recrutement <i class="fa-solid fa-arrow-right"></i></blue></content>

    <div class="tab_col2 column">
    <div class="column">

           
           </div>
    <div class="column_items_center">
           <img src={offre_c3} class="tab_offre_icon" />
    <div class="flex">
     
     
    <img src={offre_c1} class="tab_offre_icon" /> 
    <img src={offre_c2} class="tab_offre_icon" /> 

     </div>
</div>
     
     
     
     

    </div>
    
    </div>


    </div>
    

    
    </div>

                        <br/>
                        <br />
                        
                        

            <div class="detail_offre column">
            
            <div class="row">
            <div class="column_start">
                  <h2title>CV et Profil</h2title>
                  <h2under2></h2under2>
            </div>
            <div class="offre_icon_small" ><img src={offre_c1}  /></div>
            </div>
             

            <div class="line_between">
                      
                      
                      <div class="content_blue colmun_items_center">
                        <div class="line_between">
                        <div class="back_white">
                        
                        <div class="column">
                       <h3title>Mots-clés <i class="fa-solid fa-key"></i></h3title>
                      
                      <div class="column_items_center">
                      <content500><blue>
                      CV <br/> Lettre de motivation <br/>LinkedIn</blue>
                      </content500><br /></div>
                        </div></div>
                        <div class="column">
                       <h3title><orange>Dans quels cas ?</orange></h3title>
                      
                      <content500>Je n’ai pas de CV / il n’est pas à jour<br />

                      Je veux créer ma page LinkedIn<br />

                      Je dois rédiger une lettre de motivation<br />
                     
                      </content500>
                        </div>
                        <div class="column">
                        <orange><h3title>Mon conseil</h3title></orange>
                      
                      <content500>Envoyer votre CV à un recruteur, c’est une manière de
dire:<br/> « Je suis la personne que vous cherchez ».<br/><br/>
<strong>Adaptez votre CV à chaque fois que vous <br/>l’envoyez à un
nouveau recruteur</strong>


                     
                      </content500>
                        </div>
                        </div>
                        <br/>
                      
                      
                      
                      
                      
                      
                      
                      

                      <orange><h3title>Ce que nous allons faire ensemble :</h3title></orange>
                      <br />
            <content500>- Faire la liste de vos connaissances, compétences,
                   et des expériences qui vous ont permis d’être là où vous êtes maintenant.<br/>

- Apprendre à les faire figurer (ou pas) sur votre CV ou votre Profil selon le contexte<br/>

- Réaliser au moins 1 CV en réponse à une offre d’emploi<br/>
                      </content500>

                      
                     


                      </div>
                      
            
            

            </div>

            <br />
            <br />

            <div class="column_items_center note"><content>
            <h2title> Vos livrables à la fin de notre travail </h2title>
 <i class="fa-solid fa-arrow-down" id="icon"></i></content><br />
 <blue><h3title> - Un modèle de CV (ou de Lettre de Motivation)</h3title></blue><br />
<blue><h3title> - La compétence nécessaire pour l’adapter
</h3title></blue><br/>
<blue><h3title> - La compétence nécessaire pour l’adapter
</h3title></blue><br /><br />
<Link to='/Methode'>
                                    <a id='bouton' onClick = {() => window.scrollTo(0,0)}>prendre rendez-vous</a>
                                    </Link><br />

</div>


            </div>

            
            






            <div class="detail_offre column">
            
            <div class="row">
            <div class="column_start">
                  <h2title>Réussir un entretien</h2title>
                  <h2under2></h2under2>
            </div>
            <div class="offre_icon_small" ><img src={offre_c1}  /></div>
            </div>
             

            <div class="line_between">
                      
                      
                      <div class="content_blue colmun_items_center">
                        <div class="line_between">
                        <div class="back_white">
                        
                        <div class="column">
                       <h3title>Mots-clés <i class="fa-solid fa-key"></i></h3title>
                      
                      <div class="column_items_center">
                      <content500><blue>
                      Entretiens écoles<br/> Entretien d'embauche <br/>Entretien de motivation</blue>
                      </content500><br /></div>
                        </div></div>
                        <div class="column">
                       <h3title><orange>Dans quels cas ?</orange></h3title>
                      
                      <content500>Je passe le concours d’entrée à :<br/> EDHEC 
/ VATEL / UTC / INSA<br/> (expérience sur
+20 écoles)
<br />
<br />Je passe un <strong>entretien d’embauche</strong>
                     
                      </content500>
                        </div>
                        <div class="column">
                        <orange><h3title>Mon conseil</h3title></orange>
                      
                      <content500>Un entretien est une rencontre.<br/>

Il vous faut convaincre et séduire à la fois.<br/>
<strong>
Soyez authentique et montrez votre envie d’être
choisi</strong><br/>

                     
                      </content500>
                        </div>
                        </div>
                        <br/>
                      
                      
                      
                      
                      
                      
                      
                      

                      <orange><h3title>Ce que nous allons faire ensemble :</h3title></orange>
                      <br />
            <content500>- Écrire le pitch de votre parcours en mettant en évidence votre désir de réussir cet entretien (ou ce concours) <br/>
            - Écrire vos réponses aux questions les plus fréquentes<br/>
            - Simuler votre entretien <br/>
                      </content500>

                      
                     


                      </div>
                      
            
            

            </div>

            <br />
            <br />

            <div class="column_items_center note"><content>
            <h2title> Vos livrables à la fin de notre travail </h2title>
 <i class="fa-solid fa-arrow-down" id="icon"></i></content><br />
 <blue><h3title> - Un ensemble de textes de réponses aux questions probables</h3title></blue><br />
<blue><h3title> - Un enregistrement d'une simulation d'entretien
</h3title></blue><br/>
<blue><h3title> - Une meilleure compréhension de votre motivation à réussir
</h3title></blue><br /><br />
<Link to='/Methode'>
                                    <a id='bouton' onClick = {() => window.scrollTo(0,0)}>prendre rendez-vous</a>
                                    </Link><br />

</div>


            </div>




            <div class="detail_offre column">
            
            <div class="row">
            <div class="column_start">
                  <h2title>Prise de poste</h2title>
                  <h2under2></h2under2>
            </div>
            <div class="offre_icon_small" ><img src={offre_c1}  /></div>
            </div>
             

            <div class="line_between">
                      
                      
                      <div class="content_blue colmun_items_center">
                        <div class="line_between">
                        <div class="back_white">
                        
                        <div class="column">
                       <h3title>Mots-clés <i class="fa-solid fa-key"></i></h3title>
                      
                      <div class="column_items_center">
                      <content500><blue>
                      Charge de travail importante <br/> Gestion du stress et des priorités <br/></blue>
                      </content500><br /></div>
                        </div></div>
                        <div class="column">
                       <h3title><orange>Dans quels cas ?</orange></h3title>
                      
                      <content500>Je démarre un nouveau poste<br />
                      
                      Je vis une réorganisation en interne<br />
                      
                      Je suis en surcharge de travail<br />
                      
                      </content500>
                        </div>
                        <div class="column">
                        <orange><h3title>Mon conseil</h3title></orange>
                      
                      <content500>Changer de poste c'est faire face à une <br/>situation nouvelle et apprendre à s'y adapter <br/><br/>
                      <blue>Apprenez votre nouvel environnement et donnez<br/> vous le temps de réussir.</blue>


                     
                      </content500>
                        </div>
                        </div>
                        <br/>
                      
                      
                      
                      
                      
                      
                      
                      

                      <orange><h3title>Ce que nous allons faire ensemble :</h3title></orange>
                      <br />
            <content500>- Examiner les problèmes tels qu'ils se présentent - objectivement <br/>

- Formulez vos objectifs SMART<br/>

- Questionner ensemble les moyens d'atteindre vos objectifs<br/>
                      </content500>

                      
                     


                      </div>
                      
            
            

            </div>

            <br />
            <br />

            <div class="column_items_center note"><content>
            <h2title> Vos livrables à la fin de notre travail </h2title>
 <i class="fa-solid fa-arrow-down" id="icon"></i></content><br />
 <blue><h3title> - Des outils de priorisation, gestion du temps, clarification des objectifs</h3title></blue><br />
<blue><h3title> - Une meilleure compréhension de ce qui est important pour vous dans ce poste
</h3title></blue><br/>
<blue><h3title> - Une confiance renforcée en votre capacité à réussir
</h3title></blue><br /><br />
<Link to='/Methode'>
                                    <a id='bouton' onClick = {() => window.scrollTo(0,0)}>prendre rendez-vous</a>
                                    </Link><br />

</div>


            </div>



            <div class="detail_offre column">
            
            <div class="row">
            <div class="column_start">
                  <h2title>Faire un choix</h2title>
                  <h2under2></h2under2>
            </div>
            <div class="offre_icon_small" ><img src={offre_c1}  /></div>
            </div>
             

            <div class="line_between">
                      
                      
                      <div class="content_blue colmun_items_center">
                        <div class="line_between">
                        <div class="back_white">
                        
                        <div class="column">
                       <h3title>Mots-clés <i class="fa-solid fa-key"></i></h3title>
                      
                      <div class="column_items_center">
                      <content500><blue>
                       Opportunité <br/> Désir <br/> Démotivation </blue>
                      </content500><br /></div>
                        </div></div>
                        <div class="column">
                       <h3title><orange>Dans quels cas ?</orange></h3title>
                      
                      <content500>Je suis démarché<br />

                      J'envisage de démissionner<br />

                      J'aimerais changer (de métier, de poste, d'entreprise...)<br />
                     
                      </content500>
                        </div>
                        <div class="column">
                        <orange><h3title>Mon conseil</h3title></orange>
                      
                      <content500>Ne vous contentez pas de faire la liste <br/>des arguments pour et des arguments contre<br/><br/>
<strong>Imaginez vous en train de vivre les deux alternives <br/>qui s'offrent à vous</strong>


                     
                      </content500>
                        </div>
                        </div>
                        <br/>
                      
                      
                      
                      
                      
                      
                      
                      

                      <orange><h3title>Ce que nous allons faire ensemble :</h3title></orange>
                      <br />
            <content500>- Comprendre quel est votre mécanisme de décision<br/>

- Utiliser les techniques de projections pour imaginer les implications de l'une ou l'autre décision<br/>


                      </content500>

                      
                     


                      </div>
                      
            
            

            </div>

            <br />
            <br />

            <div class="column_items_center note"><content>
            <h2title> Vos livrables à la fin de notre travail </h2title>
 <i class="fa-solid fa-arrow-down" id="icon"></i></content><br />
 <blue><h3title> - Une meilleure connaissances des implications des deux alternatives</h3title></blue><br />
<blue><h3title> - Une meilleure compréhension <blue>de ce qui est important pour vous</blue>, au moment précis de faire ce choix
</h3title></blue><br/>
<blue><h3title> - <blue>Des outils personnels</blue> pour vous aider à prendre une décision
</h3title></blue><br /><br />
<Link to='/Methode'>
                                    <a id='bouton' onClick = {() => window.scrollTo(0,0)}>prendre rendez-vous</a>
                                    </Link><br />

</div>


            </div>





            


            


            

                        </div>
                        
                        
                        
            


            </div>
      );
}

export default Offre;