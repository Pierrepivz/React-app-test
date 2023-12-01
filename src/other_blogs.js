import { useState, useEffect, Link } from "react";
import React from "react";
import axios from "axios";

function Other_blogs(){

    const [Listset, setDatalist] = useState([]);

    useEffect (() => {

      axios.get(`https://server-test-3emq.onrender.com/api/getblogs`)
      .then((response) =>  { 
        
        setDatalist(response.data);}
      );
          
        
        }, []);
        


    return(

        <div class="autre_contenu autre_contenu_box column_items_center">
        <h2title><blue>Plus de contenu :</blue></h2title>
        {Listset.map(value => 
            <div class="other_blogs_article"> <Link to={`/blog?id=${value.id}`} onClick={() => window.scrollTo(0,10)}></Link><a></a><div class="article_photo" ><img src={value.image}></img></div> 
            <content1><blue>{value.article_name}</blue><br/></content1>
            
            
           
            
           
            
            
            
            </div> 
            )
            }

        
        
        
        
        </div>


    );



}
export default Other_blogs;

