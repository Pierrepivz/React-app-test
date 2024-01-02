
import { Link } from "react-router-dom";

function Statistics() {



    return(
        <div class="column_start margin_left margin_right">

                  <div id="titre_second"class='column_items_center'>
                              <h1title>Taux de réussite 2023 : 98%</h1title>
                              
                              <h2under2></h2under2>
                              
                        </div> 
                        <div class="note">
                              
                              
                              <content> Ce taux est calculé sur <strong>l’ensemble des accompagnements réalisés en 2023</strong> pour préparer le concours d’entrée à une école –<br/><blue> postbac,
Bac +1 et au-delà.</blue><br/>
Nous personnalisons la méthode à votre situation personnelle et 
nous commençons par vous poser <strong>3 questions importantes :</strong> </content></div>                      
                  
                        
<div class='line' id="statistics_methode">

<div class='column_items_center'>

<div class='content_blue'>
<h3title><white>Vous candidatez pour une école hôtelière, une école
d’ingénieurs, ou une école de commerce :</white></h3title>
<br />
<br />


<content500>Le choix de la filière d’orientation après le Bac est important et
souvent difficile.</content500>
<br /><content>
<orange>Quelles sont vos raisons personnelles d’avoir choisi cette filière ?</orange></content><br /><br />


<h3title><white>Votre 1er choix d’école :</white></h3title><br /><br />
<content500>Vous êtes attiré(e) par une école pour certaines raisons évidentes
mais pour être admis vous devrez aller plus loin : savoir expliquer
pourquoi cette école plutôt qu’une autre.</content500><br />
<content><orange>
Comment allez-vous justifier votre candidature ?</orange>
</content>
<br /><br />

<h3title><white>Si vous êtes pris :</white></h3title><br /><br />
<content500>Le rôle du jury est aussi d’anticiper de quelle manière vous
pouvez contribuer à faire de leur école un lieu attractif,
bienveillant, dynamique.</content500> <br />

<content><orange>Pourquoi vous ?</orange></content><br/><br/>

<content><strong><blue>win</blue>entretien</strong> vous accompagne tout au long des étapes de la
préparation de votre entretien de motivation</content>


 


</div>
<div class="line">
<Link to="/Methode_page" onClick={() => window.scrollTo(0,10)}>
<a id='bouton' >Ma méthode</a>
</Link>
</div>     
      </div>                                  

                                    
                                    
      

      <div class="cible_graph"></div>
     
      </div>

      


      
                              
                              
                              </div>
    );
}
export default Statistics;