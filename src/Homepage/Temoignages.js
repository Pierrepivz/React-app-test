
import img_jade from '../images/photo_jade.jpg';
import img_milena from '../images/femme_dos.jpg';
import img_mathilde from '../images/photo_mathilde.png';


export default function Temoignages(){
 

    return(
        <div class="block column_items_center window">
                  
                  
                  
            <div class="column_items_center">

            <h2>Témoignages</h2>
    <h2under></h2under>
  
  
  </div>
               
<br/><br/>
                  


<div class="temoignage_block" >

<div class="img_temoignage column_items_center" >
    
    


    <div class="profils column"><img src={img_jade}  alt=""/></div>
    <br/>
    <h3title>Jade</h3title>
    <content1><blue>Terminale S, admise BBA EDHEC,<br/> 2023</blue></content1>
    
    <content>Le coaching avec Carole a été d’une grande aide pour moi et 
          s’est révélé très efficace. <br/>Carole m’a permis de prendre conscience 
          de mes points forts et de mes points d’amélioration. <br/><br/>
          Je suis convaincue que grâce à son coaching,
           j’ai pu obtenir l’école que je souhaitais rejoindre.</content>



    

    
           
    
    </div>


    <div class="img_temoignage column_items_center" >
    
    

    
    <div class="profils column"><img src={img_mathilde}  alt=""/></div>
    <br/>
    <h3title>Caroline</h3title>
    <content1><blue>Dirigeante, 2022</blue></content1>
    
    <content>" Le coaching avec Carole a été la bouée d’ancrage me permettant
d’avancer un peu mieux et un peu plus sereinement chaque mois.<br/><br/>
Cette expérience de coaching pousse au-delà même après les séances. Merci."</content> 
    
    </div>


    <div class="img_temoignage column_items_center" >
    
    

    
    <div class="profils column"><img src={img_milena}  alt=""/></div>
    <br/>
    <h3title>Milena</h3title>
    <content1><blue>Chargée de partenariats dans le <br/> milieu associatif, 2022</blue></content1>
    
    <content>" Carole m'a accompagnée en 2021. <br/>
    Ce coaching a été une merveilleuse expèrience dont j'ai tiré beaucoup d'enseignements. <br/><br/> Elle m'a aidé a prendre confiance en moi au niveau professionnel et à définir davantage mon projet.
    "</content>
    
    </div>


  </div>              

                  

                  
                              




                        

   
    
    


    </div>
    );


}