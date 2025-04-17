
import emailjs from "emailjs-com";
import { useState } from "react";
import "../globals.css";
import "./contact.css";
import {Helmet} from "react-helmet";


function Contact(){

    const [email, setEmail] = useState('');
    const [prenom, setPrenom] = useState('');  
    const [nom, setNom] = useState('');
    const [message, setMessage] = useState('');

    
    
    

  function sendMessage(e) {
    e.preventDefault();

    emailjs.sendForm('booking_winent', 'contact_template', e.target, '6nusaoR8fQQLjbcrX')
    .then((result) => {
    
        window.location = "./confirmationcontact";
    }, (error) => {
        
    });
    e.target.reset()

    
       }

       

       var btnoff = document.querySelector('.btn');
       function btncheck(){
        if(email  === '' || prenom  === '' || nom  === '' || message  === '' ){

            btnoff.classList.add("disabled");
            btnoff.classList.remove("able");
          
        }else{

            btnoff.classList.remove("disabled");
            btnoff.classList.add("able");
        }

    }
    window.addEventListener("input", btncheck);


    



  return(

   <div className="Contact Page">

<Helmet>
       
       <title>Les coordonnées et la messagerie de la coach Carole Pivin</title>
       <meta name="description" content="Contacter Carole Pivin par téléphone ou par mail ; préparation aux entretiens de motivation et coaching en présentiel en région parisienne, ou en distanciel"></meta>
       

       <link rel="canonical" href="https://www.winentretien.com/contact" />
      </Helmet>

<div class='column_items_center' id="title">
        
                              
                              <h1>Contact</h1>
                              
                              <h2under2></h2under2>
                              <content class="note"> 
                              <blue>Je vous réponds sous 24h.</blue><br/>
                              Vous souhaitez avoir des informations sur mon offre ou me poser une question  ?<br/>

N’hésitez pas, et complétez le formulaire de contact. <br/>

</content>


    

                              
                              
                        </div>


  <div class="column_items_center">

  <div class="line_between" id="contact_telephone">
  <form onSubmit={sendMessage} class="form_rdv" > 
     
                 


<div class="column_start">
<h2><h2title>Me contacter</h2title> </h2>
             
                  <h2under2></h2under2></div>
        
        <div class="formulaire_contact" >   

<div class="column_items_center">
        
       
        <div class="wrap">
                <br/>
                <content class="column">* Prénom : <br/>
                <input type="text" className="form-control" placeholder="Prenom" name="prenom" id="input" value={prenom} required
                onChange={(e) => setPrenom(e.target.value)}/></content>
                
                <content class="column">* Nom : <br/>
                <input type="text" className="form-control" placeholder="Nom" name="nom" id="input" value={nom} required
                onChange={(e) => setNom(e.target.value)}/></content>

                <content class="column">* Email : <br/>
                <input type="email" className="form-control" placeholder="Email" name="email" id="input"  value={email} required
                onChange={(e) => setEmail(e.target.value)}/></content>


                

        </div>

        
        
        
        

       
        

        <div class="column_items_center">

        <content><italic>Votre message : </italic><br/><br/></content>
                <textarea  id="message" placeholder="" name="message" value={message} required
                onChange={(e) => setMessage(e.target.value)}/>  
        
        

        
        
        <input type="submit" class="disabled btn" onClick={(e) => e.target.reset()} value="Envoyer"></input>
        
        </div>
 
       

</div>



                
                
                
           </div>     
            
                    
    

    

    
    
    
   
    


    
    </form>
    

    <div class="column">

             

             <h2><h2title>Mes coordonnées</h2title></h2> 
             
                  <h2under2></h2under2>
                  
             <br/>
            <content1 class="contact_info"> 
            Carole PIVIN<br></br><br></br>
            <blue><i class="fa-solid fa-phone" ></i></blue> 06. 51. 43. 26. 77<br></br><br></br>
            <blue><i class="fa-solid fa-envelope" ></i></blue>  carole@winentretien.com
            
            
            </content1>
            
            <br/>

            <h2><h2title>Où me trouver ?</h2title></h2> 
             
             <h2under2></h2under2>
    <div id="mapmessage">
             
    <i class="fa-solid fa-location-dot" ></i><br/>
            <content>A Paris, dans un des nombreux
bureaux <blue>REGUS</blue>, <br/>ou à 15mn de
l’Etoile, dans les Yvelines.<br/><br/>

Les séances ont lieu en distanciel ou en présentiel. 
</content> </div>

<br/>

<h2><h2title>Mes prix</h2title> </h2>
             
                  <h2under2></h2under2>

<div class="contact_info">
  <content>
<blue>Tarif horaire : </blue> 95 € <br/><br/>
<blue>Forfait 4 heures :</blue> 350 € <br/><br/>

</content>
             </div>

       

      </div>


    </div>
     
    
    </div>

    
    
    
    

          
    

    
    </div>



  );
    
  }
  
  export default Contact;