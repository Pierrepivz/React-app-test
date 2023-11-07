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





function Persona(){

    return(

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

    );

    


}
export default Persona;




