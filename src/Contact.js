
import emailjs from "emailjs-com";
import { useState } from "react";
import Recaptach from './Recaptcha.js';
import img_map from "./images/img_map.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import "./globals.css";

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

           
           <div class="decoration"></div>
<div class="decoration2"></div>
<div class="decoration3"></div>
<div class="decoration4"></div>
<div class="decoration5"></div>
           

<div id="titre_second"class='column_items_center'>
        
                              
                              <h1title>Contact</h1title>
                              
                              <h2under2></h2under2>
                              <content class="note"> Vous souhaitez avoir des informations sur mon offre ou me poser une question  ?

Alors n’hésitez pas, et complétez le formulaire de contact :

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
        <content>Téléphone : <br/></content>
                <input type="tel" className="form-control" placeholder="Téléphone" name="tel" id="input" value={tel} required
                onChange={(e) => setTel(e.target.value)}/>
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
             <h2title>Où nous trouver ?</h2title> 
             
                  <h2under2></h2under2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83997.91599575017!2d2.2775578595247836!3d48.85945224507882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671ef6ff7f46f%3A0x50b82c368941a90!2s5e%20Arrondissement%2C%2075005%20Paris!5e0!3m2!1sfr!2sfr!4v1688041214845!5m2!1sfr!2sfr" width="350" height="240" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div id="mapmessage">
    <i class="fa-solid fa-location-dot" ></i><br/>
            <content><italic>Vous pouvez nous trouver <br/>à Paris ou au Vésinet.</italic></content> </div>
      </div>


    </div>
     
    
    </div>

    
    
    
    

          
    

    
    </div>



  );
    
  }
  
  export default Contact;