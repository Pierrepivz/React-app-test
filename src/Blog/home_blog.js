import { useState, useEffect } from "react";
import React from "react";
import axios from 'axios';

import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";



function HomeBlog() {

    
    
    const [filter,setFilter] = useState('');
    const [input,setInput] = useState('');
    const [Listset, setDatalist] = useState([]);
    
    
    const linkurl = (url) => {
    
      

      if(url!=null){
        
        var url_seo = url.split(" ").join("-");
         
        return url_seo;


      }else{
        return "";
      }

    }
    
   
  

    

  useEffect (() => {

    axios.get('https://server-test-3emq.onrender.com/api/getblogs')
      .then((response) =>  { 
        setDatalist(response.data);}
      );
      
    
    }, []); 
    
    
     const getfiltereditems = (query,elements,select) => {
            
        if(!query && !select){
            return elements;
        }else{
            
            
            if(!select){
            return elements.filter( card => card.article_name.includes(query.toUpperCase()));
        }else{
            return elements.filter( card => card.article_name.includes(query.toUpperCase()) ).filter( card => card.filters.includes(select));
            
        }


        }

    }

     const filtereditems = getfiltereditems(input,Listset,filter);

     

  

     

  

    
    return (
      <div className="Page Blog">
      
      
      <Helmet>
        <title>L'actualité sur les concours et les entretiens des écoles</title>
        <meta name="description" content="Retrouvez ici toute l'actualité des concours d'entrée aux écoles postbac, les questions posées aux oraux de motivation, et nos astuces pour ne pas stresser"></meta>
        <link rel="canonical" href="https://www.winentretien.com/blog" />
      </Helmet>
      
                              
                              
                            
                            <div class='column_items_center'>

<h1>Le Blog</h1>
<h2under2></h2under2>

<content class="note">Informations pratiques sur les
concours, présentation de concepts de coaching, ou mon point de vue sur des
sujets du moment : <br/><strong>c’est par ici</strong></content>
    

                              
                              
  

    </div>

                            
                             
                              
                  
                              
                            



                             
                    
                    
                    
                    
                    

<div class="window column">

<div class="column">
  <div class="row">

                        <h1title class="mobile_off">Parcourir</h1title>
                        
                        <i class="fa-solid fa-book fa-2xl" id="icon"></i>
                        </div>
                        <h2under2 class="mobile_off"></h2under2>
                        <br/>
                        
                  </div>
                    <div class="line_between search_bar">
                    <div class="column_start">
                    <h2title>Cherchez un article </h2title><br/>
                    <input type="text" id="search_bar" class="research" placeholder = ".." onChange={(e) => setInput(e.target.value)} ></input>
                    </div>
                    <div class="column_start">
                    <h2title><strong>Filtres</strong></h2title><br/>
                    <select class="filtres research"   onChange={e => setFilter(e.target.value)}>
                    <option></option>
                    <option value="Coaching">Coaching</option>
                    <option value="Entretien">Entretien</option>
                    <option value="Divers">Divers</option>
                    
                    </select>
                    </div>
                    
                    
                     <br/>
                    </div>

                    <div class="blog_list block">
                    
    <div class="line_around" id="articles_select">
   
    
    {filtereditems.map(value => 
    
        
        
        <Link to={`/blog/${linkurl(value.url)}`} >
        
        <div class="home_article column_start" > <div class="blog_select column" ><img src={value.image} alt={value.alt} description={value.alt_description} title={value.alt_titre} width="300px" height="200px" ></img><content1>{value.article_name}</content1></div> 
        
        
        
       
    
       
        
        
        
        </div>
        
        </Link>
       
        
    )}

    
    </div>

    


    </div>
    <div class="block">
       
      

    </div>
    
    </div>
       
    
                        </div>
  
        
      
    );
  }
  
  export default HomeBlog;