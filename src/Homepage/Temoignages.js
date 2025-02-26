
import img_jade from '../images/photo_jade.jpg';
import img_milena from '../images/femme_dos.jpg';
import img_mathilde from '../images/photo_mathilde.png';
import Robin from "../images/arthur_robin.jpg";

export default function Temoignages(){

    return(
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
    );


}