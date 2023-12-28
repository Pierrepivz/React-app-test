
import emailjs from "emailjs-com";
import { Link  } from "react-router-dom";
import { useState, useCallback } from "react";
import Recaptach from './Recaptcha.js';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import "../globals.css";
import "./contact.css";


function Contact(){

    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
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

<div class='column_items_center'>
        
                              
                              <h1title>Contact</h1title>
                              
                              <h2under2></h2under2>
                              <content class="note"> Vous souhaitez avoir des informations sur mon offre ou me poser une question  ?

N’hésitez pas, et complétez le formulaire de contact. <br/><strong>Je vous réponds sous 24h.</strong>

</content>


    

                              
                              
                        </div>


  <div class="column_items_center">

  <div class="line_between" id="contact_telephone">
  <form onSubmit={sendMessage} class="form_rdv" > 
     
                 


<div class="column_start">
             <h2title>Formulaire de contact</h2title> 
             
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
        
        

        <Recaptach />
        
        <input type="submit" class="disabled btn" onClick={(e) => e.target.reset()} value="Envoyer"></input>
        
        </div>
 
       

</div>



                
                
                
           </div>     
            
                    
    

    

    
    
    
   
    


    
    </form>
    

    <div class="column">
             <h2title>Mes coordonnées</h2title> 
             
                  <h2under2></h2under2>
                  
             <br/>
            <content1 class="contact_info"> 
            Carole PIVIN<br></br><br></br>
            <blue><i class="fa-solid fa-phone" ></i></blue> 06. 51. 43. 26. 77<br></br><br></br>
            <blue><i class="fa-solid fa-envelope" ></i></blue>  contact@winentretien.com
            
            
            </content1>
            
            <br/>

            <h2title>Où me trouver ?</h2title> 
             
             <h2under2></h2under2>
    <div id="mapmessage">
             
    <i class="fa-solid fa-location-dot" ></i><br/>
            <content>A Paris, dans un des nombreux
bureaux <blue>REGUS</blue>, <br/>ou à 15mn de
l’Etoile, dans les Yvelines.<br/><br/>

Les séances peuvent également avoir
lieu <blue>en distanciel.</blue><br/>
Pour un coaching, une 1ère séance en
présentiel est recommandée. 
</content> </div>

       

      </div>


    </div>
     
    
    </div>

    
    
    
    

          
    

    
    </div>



  );
    
  }
  
  export default Contact;