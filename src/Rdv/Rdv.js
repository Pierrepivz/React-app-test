import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../calendar.css';
import '../globals.css';
import moment  from 'moment';




function Rdv() {

  const [email, setEmail] = useState('');
  const [prenom, setPrenom] = useState('');  
  const [nom, setNom] = useState('');
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState('');
  const [index, setIndex] = useState(0);
  const today = new moment().add(3,"month").format('MM/DD/YYYY');
  const maxDate = new Date(today);
  const sqldate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  const insertdate = moment(date);
  var text = document.getElementById('text_recap');
  var btnoff = document.querySelector('.btn');
  var hourcolor = document.querySelectorAll("#hour_id");
  const [Listset, setDatalist] = useState([]);


  useEffect (() => {

    axios.get('https://server-test-3emq.onrender.com/api/getrdv')
      .then((response) =>  { 
        setDatalist(response.data);
    }
      );
    
    
    }, []); 

    const datelist = Listset.map( value => value.date);
    const datatab = Listset.map( value => [{data: value.date , hour: value.heure , dispo: value.dispo}] );
    const tabvaleurs = datatab.flat();
    
    

    for(var i = 0 ; i < datelist.length ; i++){
    
        if(datelist[i] === datelist[i+1]){
             
            datelist.splice(i,1);
           
        
        }
        


    }
  
  function selectcheck(){
    
    if(email  !== '' || prenom  !== '' || nom  !== '' || hour !== ''){
    if(text.classList.contains("none")){
          text.classList.remove("none");
          
        }
    }
    
  }
  
  
  function btncheck(e){
  
    selectcheck();

       
      hourcolor.forEach( (element) => {
        if(element.classList.contains("selected")){
        element.classList.remove("selected");
      }
      });
      if(hour != ''){
      hourcolor[index].classList.add("selected");
    }

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
 
  
  
  

  

    const [rdvdujour, setRdv] = useState([]);

    function available(){


      const tabdispo = ["10 h","12 h","16 h","18 h"];
      const tableau_complet = [];
      const reserved_tab = [];
      
      
      
  
      if(date.getDay() === 0){
  
        setRdv([]);
        return 0;
  
      }
      
  
      /* tableau des créneaux réservés  */
      
      for(var i = 0; i < tabvaleurs.length ; i++){
  
          
        
          const d1 = new Date(tabvaleurs[i]["data"]);
          const d2 = moment(d1).format("YYYY-MM-DD");
          const offdate = insertdate.format("YYYY-MM-DD");
          
  
          if(d2 === offdate){
              
              if(tabvaleurs[i]["dispo"] === 3){
  
              /*reserved_tab = tabdispo;*/
              reserved_tab.push("10 h","12 h","16 h","18 h");
  
  
              }else{
  
              reserved_tab.push(tabvaleurs[i]["hour"]);
  
              /*if(tabvaleurs[i]["dispo"] == 1){
  
                offtab.push(tabvaleurs[i]["hour"]);
  
              }
              if(tabvaleurs[i]["dispo"] == 2){
  
                clienttab.push(tabvaleurs[i]["hour"]);
                
              }*/
              
  
              }
  
  
          }
          
      
      }
      
      /* création du tableau final comprenant les créneaux réservés et disponibles */
  
      
      
      for(var e = 0; e < tabdispo.length ; e++){
      
      if(reserved_tab.includes(tabdispo[e])){

        tableau_complet.push([{status: "date offhour" , hour: tabdispo[e]}]);
  
  /*
        if(clienttab.includes(tabdispo[e])){
  
          tableau_complet.push([{status: "date" , hour: tabdispo[e]}]);
  
        }
        if(offtab.includes(tabdispo[e])){
        
          tableau_complet.push([{status: "date offhour" , hour: tabdispo[e]}]);
  
        }*/
      
        
      
      }else{
      
        tableau_complet.push([{status: "date colored" , hour: tabdispo[e]}]);
      
      }
      }
      
      const tableau_des_rendez_vous = tableau_complet.flat();
      setRdv(tableau_des_rendez_vous);  
  
      
      
    }
    window.addEventListener("click",available);

    const onChange = date => {
  
      
      setDate(date);
      available();
      /* init */
      
  
      
            
    };   
  
  
  
  
  function sendEmail(e) {

      e.preventDefault();
      
      /* enregistrement base de donnée */

      axios.post('https://server-test-3emq.onrender.com/api/insertrdv',{

        prenom: prenom,
        nom: nom,
        email: email,
        date: insertdate.format("YYYY-MM-DD"),
        hour: hour,
        dispo: 2,
         
      
      });
      

      emailjs.sendForm('booking_winent', 'rdv78', e.target, '6nusaoR8fQQLjbcrX')
      .then((result) => {

        window.location = "./confirmationrdv";
           
      }, (error) => {
          
      });
      e.target.reset()

      
  }

  function hourselect(index){

    var tab = ["10 h","12 h","16 h","18 h"];

    setHour(tab[index]);
    setIndex(index);
    
    
    
  };



    return (



      <div class="rdv block ">

     
   <div class="column_start">

    

<div class="column_start">
  <div class="row">
<h2title>Date et Heure</h2title><i class="fa-solid fa-calendar" id="icon"></i></div>

     <h2under2></h2under2></div>
<div class="datetime column_items_center">

<content><Calendar class="calendar" onChange={onChange} value={date} view="month" minDate={new Date(Date.now())} maxDate={maxDate} /></content>



<div class='select column' onClick={(e) => {btncheck(e)}}>

<div class="row">
{rdvdujour.map((data,index) => 
    
    <div class={data.status} key={index} id="hour_id"  onClick={(e) => {hourselect(index)}}>
        <content>{data.hour}</content>
        </div>
        
        )}
</div>


</div>

</div>

</div>
    
<form onSubmit={sendEmail} class="form_rdv"> 

                 
<div class="column">

<div class="column">
<div class="row">
             <h2title>Vos coordonnées</h2title><i class="fa-solid fa-file" id="icon"></i></div>
             
                  <h2under2></h2under2></div>
        
        <div class="content_blue">   

<div class="column_items_center">

        <div class="column_items_center">
                <content>Prénom</content>
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
                <input type="hidden" className="form-control" placeholder="date" name="current" id="input"  value={sqldate} required
                />
        </div>

</div>

                
                
                
           </div>     
            
                    
            
            
            
    

    <div class="column_items_center" id="confirm">

    

    <br/> 
    
    <content id="text_recap" class="none"><content1><orange>Date du rendez-vous : </orange></content1><br/><br/> 
    Vôtre Rdv est fixé au : <br/><content1><blue>{insertdate.format("DD-MM-YYYY")}</blue> à <blue>{hour}</blue></content1>. <br /> <br />Vous allez recevoir un email de <blue>contact@winentretien.com</blue><br/> avec le lien Teams pour notre rdv.
<br/><content1>A très vite !</content1></content>
    
    <br/><br/><br/>
    
    <input type="submit" class="disabled btn" onClick={(e) => e.target.reset()} value="Prendre rendez vous">
      </input>
    <br/>
    </div>

    


    </div>



</form>  
    
    
     
        
        





      </div>
    );
  }
  
  export default Rdv;