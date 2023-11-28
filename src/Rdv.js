import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';
import './globals.css';
import { Link } from "react-router-dom";

/*import Axios from "Axios";*/


function Rdv() {

  const [email, setEmail] = useState('');
  const [prenom, setPrenom] = useState('');  
  const [nom, setNom] = useState('');
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState('');
  const current = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  const tabfinal = ["9 : 30","10 : 00","10 : 00","11 : 00","11 : 30","12 : 00","12 : 30","13 : 00","13 : 00","13 : 30","14 : 00"];
  var text = document.getElementById('text_recap');
  var btnoff = document.querySelector('.btn');
  const [Listset, setDatalist] = useState([]);


  useEffect (() => {

    axios.get('https://server-test-3emq.onrender.com/api/getrdv')
      .then((response) =>  { 
        setDatalist(response.data);
    }
      );
    
    
    }, []); 
  
  function selectcheck(){
    
    if(email  !== '' && prenom  !== '' && nom  !== '' && hour !== ''){
    if(text.classList.contains("none"))
          text.classList.add("display");
    }
  
  }
  function dateselect(e){
    setHour(e);
    var date = document.querySelector('.date');
    date.classList.remove("colored");
    date.classList.add("selectcolor");
  }
  
  function btncheck(e){
  
    selectcheck();

      if(email  !== '' && prenom  !== '' && nom  !== '' && hour !== ''){
          
          btnoff.classList.remove("disabled");
          btnoff.classList.add("able");
          
          

  
      }else{

          
          btnoff.classList.add("disabled");
          btnoff.classList.remove("able");
          
      }

  }
  window.addEventListener("click", btncheck);
  window.addEventListener("input", btncheck);

  
  
  

  const onChange = date => {

    setDate(date);   
  };
  
  
  
  function sendEmail(e) {

      e.preventDefault();

      

      emailjs.sendForm('booking_winent', 'rdv78', e.target, '6nusaoR8fQQLjbcrX')
      .then((result) => {
          window.location = "./confirmationrdv"; 
      }, (error) => {
          
      });
      e.target.reset()

      
  }

  function hourselect(value,dispo,index){

    setHour(value);
     /*
    if(dispo == "date offhour"){
   
    setDispoH(["bouton_on","bouton_off","indisponible"])}else{
    
    setDispoH(["bouton_off","bouton_on","disponible"]);

    };*/
    
    
    
    
  };



    return (



      <div class="rdv block">
      
      <div class="background_decoration decoration4" id="decoration_rdv_5_3"></div>
      <div class="background_decoration decoration4" id="decoration_rdv_5_4"></div>
      <div class="background_decoration decoration5" ></div>
      

  <div class="line_around">

  

  




     
   <div class="column_start">

    

<div class="column_start">
<h2title>Date et Heure</h2title><i class="fa-solid fa-calendar" id="icon"></i>

     <h2under2></h2under2></div>
<div class="datetime column_items_center">

<content><Calendar class="calendar" onChange={onChange} value={date} view="week"/></content>



<div class='select column' value="yooooooo" onClick={(e) => {btncheck(e)}}>

{Listset.map((data,index) => 
    
    <div class={data.status} key={index}  onClick={(e) => {hourselect(e.target.innerHTML,data.status,index)}}>
        <content>{data.hour}</content>
        </div>
        
        )}



</div>

</div>

</div>
    
<form onSubmit={sendEmail} class="form_rdv"> 

                 
<div class="column_start">

<div class="column_start">
             <h2title>Vos coordonnées</h2title><i class="fa-solid fa-file" id="icon"></i>
             
                  <h2under2></h2under2></div>
        
        <div class="content_blue">   

<div class="column_items_center">

        <div class="column_items_center">
                <content>Prenom</content>
                <input type="text" className="form-control" placeholder="prenom" name="prenom" id="input" value={prenom} required
                onChange={(e) => setPrenom(e.target.value)}/>
                <content>Nom</content>
                <input type="text" className="form-control" placeholder="nom" name="nom" id="input" value={nom} required
                onChange={(e) => setNom(e.target.value)}/>
                <content>Email</content>
                <input type="email" className="form-control" placeholder="Email Address" name="email" id="input" value={email} required
                onChange={(e) => setEmail(e.target.value)}/> 

        </div>

        <div class="column_start">
                <input type="hidden" className="form-control" placeholder="hour" name="hour" id="input"  value={hour} required
                />
                <input type="hidden" className="form-control" placeholder="date" name="current" id="input"  value={current} required
                />
        </div>

</div>

                
                
                
           </div>     
            
                    
            
            
            
    

    <div class="column_items_center" id="confirm">

    

    <br/> 
    
    <content id="text_recap" class="none"><content1><orange>Date du rendez-vous : </orange></content1><br/><br/> 
    Vous avez un rdv de 30mn gratuit et sans obligation le : <blue>{current}</blue> à <blue>{hour}</blue>. <br /> <br />Vous allez recevoir un email de <t_orange>carole@winentretien.com</t_orange><br/> avec le lien Teams pour notre rdv.
<br/><content1>A très vite !</content1></content>
    
    <br/><br/><br/>
    
    <input type="submit" class="disabled btn" onClick={(e) => e.target.reset()} value="Prendre rendez vous"></input>
    <br/>
    </div>
    </div>



</form>  
    
    
    </div> 
        
        





      </div>
    );
  }
  
  export default Rdv;