import { useState, useEffect } from "react";
import React from "react";
import axios from 'axios';

export default function Hourlist(props){


    const [email, setEmail] = useState('');
  const [prenom, setPrenom] = useState('');  
  const [nom, setNom] = useState('');
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState('');
  const current = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
  const sqldate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  const [Listset, setDatalist] = useState([]);
  const [rdvlist, setrdvlist] = useState([]);
  

    const [rdvdaylist, setdayrdvlist] = useState([]);
    const [rdvhourlist, setrdvhourlist] = useState([]);
    
    
    useEffect (() => {
/*
        axios.get(`http://localhost:3001/api/getrdv/${props.date}`)
          .then((response) =>  { 
            setdayrdvlist(response.data);
        }
          );

        setrdvhourlist(rdvdaylist.map(value => value.heure));
        
        */

          

        
          
        
        }, []); 




    return(   <div>


        <div class='select column' value="yooooooo" >
    <h1>{props.date[0]}</h1>
        <div class="hourlistselection">
            {props.date.map(value => 
        
            <buton class="date colored">
                {value}
                </buton>)}
        
        <buton  class="date colored" ><content>10 h 00</content></buton>
        <buton  class="date colored" onClick={(e) => setHour('10:30')}><content>10 h 30</content></buton>
        <buton  class="date colored" onClick={(e) => setHour('11:00')}><content>11 h 00</content></buton>
        </div>
        
        
        
        </div>
        
        
        
        
        </div>);






}











