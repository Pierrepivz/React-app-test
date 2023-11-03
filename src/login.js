import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

export default function Login() {

    

    const [login,setLogin] = useState('');
    const [password,setPassword] = useState('');
    const [Listset, setDatalist] = useState([]);
    
    
  
    /*useEffect (() => {

        axios.get(`http://localhost:3001/api/getlogin/${id}`)
          .then((response) =>  { 
            setDatalist(response.data);}
          );
          
        
        }, []); */

        const connect = () => {

          
          axios.post('http://localhost:3001/api/login', {
            
            login: login,
            password: password,
            
        
          })
          .then(function (response) {
            console.log(response);

          })
          .catch(function (error) {
            console.log(error);
          });
        
          
        
          
        }


    return( <div class="Page Block">
            <div class="column_items_center">
             <div class="content_blue">
             <div class="column_start">

                <br/>
                <content>* Login : <br/></content>
                <input type="text" className="form-control" placeholder="login"  id="input" value={login} required
                onChange={(e) => setLogin(e.target.value)}/>
                <content>* Password : <br/></content>
                <input type="text" className="form-control" placeholder="password"  id="input" value={password} required
                onChange={(e) => setPassword(e.target.value)}/>
                      
        
        </div>
             </div>
             
             <button id="bouton" onClick={ () => connect() }>Se connecter</button>
             
             </div>
    </div>
    )
                  
}