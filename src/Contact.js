
import emailjs from "emailjs-com";
import { useState } from "react";
import Recaptach from './Recaptcha.js';
import img_map from "./images/img_map.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import "./globals.css";
import cabane from "./images/cabane.jpg";


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

           
           
<div class="decoration4"></div>
<div class="decoration5"></div>
           

<div id="titre_second"class='column_items_center'>
        
                              
                              <h1title>Contact</h1title>
                              
                              <h2under2></h2under2>
                              <content class="note"> Vous souhaitez avoir des informations sur mon offre ou me poser une question  ?

Alors n’hésitez pas, et complétez le formulaire de contact. <br/><strong>Je vous réponds sous 24h.</strong>

</content>
    

                              
                              
                        </div>


  <div class="column_items_center margin_left block">

  <div class="row">
  <form onSubmit={sendMessage} class="form_rdv" > 
     
                 


<div class="column_start">
             <h2title>Formulaire de contact</h2title> 
             
                  <h2under2></h2under2></div>
        
        <div class="formulaire_contact" >   

<div class="column_items_center">
        
       
        <div class="column_start">
                <br/>
                <content>* Prénom : <br/></content>
                <input type="text" className="form-control" placeholder="Prenom" name="prenom" id="input" value={prenom} required
                onChange={(e) => setPrenom(e.target.value)}/>
                <content>* Nom : <br/></content>
                <input type="text" className="form-control" placeholder="Nom" name="nom" id="input" value={nom} required
                onChange={(e) => setNom(e.target.value)}/>
                

        </div>

        <div class="column_start">
        <content>* Email : <br/></content>
                <input type="email" className="form-control" placeholder="Email" name="email" id="input" value={email} required
                onChange={(e) => setEmail(e.target.value)}/>
        
        </div>

        <Recaptach />
        

        <div class="column_items_center">

        <content><italic>Votre message : </italic><br/><br/></content>
                <textarea  id="message" placeholder="" name="message" value={message} required
                onChange={(e) => setMessage(e.target.value)}/>  <br/>
        
        <input type="submit" class="disabled btn" onClick={(e) => e.target.reset()} value="Envoyer"></input>

        
        
        </div>

       

</div>



                
                
                
           </div>     
            
                    
    

    

    
    
    
   
    


    
    </form>
    

    <div class="margin_left column_start">
             <h2title>Mes coordonnées</h2title> 
             
                  <h2under2></h2under2>
                  
             <br/>
            <content1> Carole PIVIN</content1><br></br>
            <content><blue> email :</blue> carole@winentretien.com</content> 
            <br/>

    
    <div id="mapmessage">
             
    <i class="fa-solid fa-location-dot" ></i><br/>
            <content><italic> <strong>Les séances ont lieu soit en distanciel, soit
en présentiel. </strong><br/><br/>
En présentiel, nous nous retrouvons soit dans ma

cabane à l’Ouest de Paris – à 15 mn de l’Etoile – <br/>soit
dans un des nombreux bureaux Regus à Paris.<br/><br/></italic>
Opéra, Gare de Lyon, les Halles ...<br/><br/>
Pour un coaching, il est conseillé d'effectuer<br/>
la 1ère séance en présentiel.</content> </div>

       

      </div>


    </div>
     
    
    </div>

    
    
    
    

          
    

    
    </div>



  );
    
  }
  
  export default Contact;