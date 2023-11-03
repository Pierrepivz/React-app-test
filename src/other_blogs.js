import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function Other_blogs(){

    const [Listset, setDatalist] = useState([]);

    useEffect (() => {

      axios.get(`http://localhost:3001/api/getblogs`)
      .then((response) =>  { 
        
        setDatalist(response.data);}
      );
          
        
        }, []);
        


    return(

        <div class="autre_contenu autre_contenu_box column_items_center">
        <h3title>Plus de contenu : </h3title>
        {Listset.map(value => 
            <div class="home_article"> <div class="article_photo" ><img src={value.image}></img></div> 
            <content1><blue>{value.article_name}</blue><br/></content1>
            <content2>{value.description}</content2>
            
           
            
           
            
            
            
            </div> 
            )
            }

        <br /> <br/><br /> <br/>
        
        
        <br /> <br/><br /> <br/>
    
        
        <br /> <br/><br /> <br/>
        
        
        
        </div>


    );



}
export default Other_blogs;

