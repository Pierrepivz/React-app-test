import { useState, useEffect } from "react";
import React from "react";
import axios from 'axios';

import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";



function Home_Blog() {

    
    const [article_name,setArticlename] = useState('');
    const [filter,setFilter] = useState('');
    const [input,setInput] = useState('');
    const [Listset, setDatalist] = useState([]);
    const [description,setDescription] = useState('');
    const [title,setTitle] = useState('');
    const [articlefilter,setArticleFilter] = useState('');
    const [image,setImage] = useState('');

    

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
        <title>L'actualité sur les concours, les entretiens et les méthodes de coaching</title>
        <meta name="description" content="J'aborde dans ce blog les points importants à mes yeux pour mener à bien son projet professionnel"></meta>
      </Helmet>
      
                              
                              
                            
                            <div class='column_items_center'>

<h1title>Le Blog</h1title>
<h2under2></h2under2>

<content class="note">Informations pratiques sur les
concours, présentation de concepts de coaching, ou mon point de vue sur des
sujets du moment : <br/><strong>c’est par ici</strong></content>
    

                              
                              
  

    </div>

                            
                             
                              
                  
                              
                            



                             
                    
                    
                    
                    
                    

<div class="window column">

<div class="column">
  <div class="row">

                        <h1title>Parcourir</h1title>
                        
                        <i class="fa-solid fa-book fa-2xl" id="icon"></i>
                        </div>
                        <h2under2></h2under2>
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
    <div class="column_start">
        
        
        <Link to={`/blog?id=${value.id}`} onClick={() => window.scrollTo(0,10)}>
        
        
        
  
        
        <div class="home_article column_start"> <div class="blog_select" ><img src={value.image} width="300px" height="200px"></img></div> 
        <content1>{value.article_name}<br/></content1>
        
        
       
        
       
        
        
        
        </div>
        
        </Link>
        </div>
        
    )}

    
    </div>

    


    </div>
    <div class="block">
       
      

    </div>
    
    </div>
       
    
                        </div>
  
        
      
    );
  }
  
  export default Home_Blog;