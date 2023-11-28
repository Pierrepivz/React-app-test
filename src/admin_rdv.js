import { useState, useEffect } from "react";
import React from "react";
import axios from 'axios';

import "./rdv.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';
import './globals.css';
import Hourlist from './Hourlist.js';


/*import Axios from "Axios";*/


export default function Admin_rdv(){
  
  const tabfinal = ["9 : 30","10 : 00","10 : 00","11 : 00","11 : 30","12 : 00","12 : 30","13 : 00","13 : 00","13 : 30","14 : 00"];
  const [email, setEmail] = useState('');
  const [prenom, setPrenom] = useState('');  
  const [nom, setNom] = useState('');
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState('');
  const sqldate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  const [Listset, setDatalist] = useState([]);
  
  

  
 
  
      useEffect (() => {

        axios.get('http://localhost:3001/api/getrdv')
          .then((response) =>  { 
            setDatalist(response.data);
        }
          );

        
 
        /*for(var i = 0; i < 3; i++){*/
            
            
        /*}*/
        
        
        }, []); 
    
     

    
    
    const datelist = Listset.map( value => value.date )
    
    const datatab = Listset.map( value => [{data: value.date , hour: value.heure}] );
    const tabvaleurs = datatab.flat();

    for(var i=0 ; i < datelist.length ; i++){
    
        if(datelist[i] == datelist[i+1]){
             
            datelist.splice(i,1);
           
        
        }
        


    }


    
    
    
   

   
  


  
  
  
  function selectcheck(){
    
    if(email  !== '' && prenom  !== '' && nom  !== '' && hour !== ''){
    /*if(text.classList.contains("none"))
          text.classList.add("display");*/
    }
  
  }
  function dateselect(e){


    
    var date = document.querySelector('.date');
    date.classList.remove("colored");
    date.classList.add("selectcolor");
  }
  
  

  
  
  const [rdvdujour, setRdv] = useState(tabfinal);

  const onChange = date => {

    

    /* init */
    const tabdispo = ["10","12","16","18"];
    const tableau_complet = [];
    const reserved_tab = [];
    const clienttab = [];
    const offtab = [];
    setDate(date);
    

    if(date.getDay() == 0){

      setRdv([]);
      return 0;

    }
    

    /* tableau des créneaux réservés  */
    
    for(var i = 0; i < tabvaleurs.length ; i++){

        
      
        const d1 = new Date(tabvaleurs[i]["data"]);
        const d2 = `${d1.getFullYear()}-${d1.getMonth()+1}-${d1.getDate()}`;


        if(d2 == sqldate){

            if(tabvaleurs[i]["dispo"] == 3){

              offtab = tabdispo;


            }else{

            reserved_tab.push(tabvaleurs[i]["hour"]);

            if(tabvaleurs[i]["dispo"] == 1){

              offtab.push(tabvaleurs[i]["hour"]);

            }
            if(tabvaleurs[i]["dispo"] == 2){

              clienttab.push(tabvaleurs[i]["hour"]);
              
            }

            }


        }
        
    
    }
    
    /* création du tableau final comprenant les créneaux réservés et disponibles */

    
    
    for(var e = 0; e < tabdispo.length ; e++){
    
    if(reserved_tab.includes(tabdispo[e])){


      if(clienttab.includes(tabdispo[e])){

        tableau_complet.push([{status: "date" , hour: tabdispo[e]}]);

      }
      if(offtab.includes(tabdispo[e])){
      
        tableau_complet.push([{status: "date offhour" , hour: tabdispo[e]}]);

      }
    
      
    
    }else{
    
      tableau_complet.push([{status: "date colored" , hour: tabdispo[e]}]);
    
    }
    }
    
    const tableau_des_rendez_vous = tableau_complet.flat();
    setRdv(tableau_des_rendez_vous);  

    /* check journée non disponibles */

    if(datelist.includes(sqldate)){
    
     /* setDispoJ(["bouton_on","bouton_off","indisponible"])}else{
      
      setDispoJ(["bouton_off","bouton_on","disponible"]);*/
  
      };
          
  };

  function hourselect(value){

    

    setHour(value);
    
    
    
  };

  
  
  
 
  
  
  
  


    return (



      <div class="rdv block">
      <div class="background_decoration decoration4"></div>
      <div class="background_decoration decoration5" id="decoration_rdv_5_1"></div>
      <div class="background_decoration decoration4" id="decoration_rdv_5_2"></div>
      <div class="background_decoration decoration4" id="decoration_rdv_5_3"></div>
      <div class="background_decoration decoration4" id="decoration_rdv_5_4"></div>
      <div class="background_decoration decoration5" ></div>
      <div class="background_decoration decoration3" id="decoration_rdv_3"></div>
      <div class="background_decoration decoration" id="decoration_rdv_1"></div>

      <div id="titre_second"class='column_items_center block'>
                              
                              <h1title>Prendre rendez-vous</h1title>
                              <h2under></h2under>
                              <h2under2></h2under2>
                              <div class="note column_items_center">
                              
       
                              
                              <content> N'hésitez pas à prendre rendez-vous afin de m'exposer en<strong> 30 minutes </strong>votre situation professionnelle, et les raisons qui vous amènent à vouloir être accompagné(e).

C'est <strong>entièrement gratuit et sans aucun engagement</strong> de part et d'autre !    </content></div>
                              
                        </div>

  <div class="column Page window">

  
    <h2title>{sqldate} - </h2title>
    <h2title>{hour}</h2title><br/><br/>
<div class="manage_dispo"><buton id="bouton"><content>Disponible</content></buton></div>



   
   



     
   <div class="column_start Page">

   

<div class="column_start">
<h2title>Date et Heure</h2title><i class="fa-solid fa-calendar" id="icon"></i>

     <h2under2></h2under2></div>
<div class="datetime column_items_center">


<content><Calendar class="calendar" onChange={onChange} value={date} view="week"/></content>



<div class='select column' value="yooooooo" >

<div class="hourlistselection">
    {rdvdujour.map((data,index) => 
    
    <div class="date colored" key={index}  onClick={(e) => {hourselect(e.target.innerHTML)}}>
        {data}
        </div>
        
        )}


</div>



</div>

</div>

</div>
    
 

                 
<div class="booked_rdv">

{Listset.map( value => <content class="rdvlist">
    
{value.prenom}<br/>
{value.nom}<br/>
{value.email}<br/>
{value.date.slice(0,10)}<br/>
{value.heure}
<br/><br/>


</content>)}
        
             
            
                    
            
            
            
    
     
    
    </div>


    



  
    
    
    </div> 
        
        





      </div>
    );
  }
  
  