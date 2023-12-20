import { useState, useEffect } from "react";
import React from "react";
import axios from 'axios';

import { Link } from "react-router-dom";




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
    
    window.addEventListener("input", search);
    
    function search(){
        
        const cards = document.querySelectorAll(".home_article");
        
       

    }
     const getfiltereditems = (query,elements,select) => {
            
        if(!query && !select){
            return elements;
        }else{
            
            
            if(!select){
            return elements.filter( card => card.article_name.includes(query) );
        }else{
            return elements.filter( card => card.article_name.includes(query) ).filter( card => card.filters.includes(select));
            
        }


        }

    }

     const filtereditems = getfiltereditems(input,Listset,filter);

     

  

     

  

    /*const [filter,Setfilter] = useState('');

      function article_select(e){


      

      }*/
     /* function filter_select(e){

      Setfilter(e.value);


    }*/
    return (
      <div className="Page Blog">

      
      
      
                              
                              
                            
                            <div class='column_items_center'>

<h1title>Le Blog</h1title>
<h2under2></h2under2>

<content class="note">Informations pratiques sur les
concours, présentation de concepts ou mon point de vue sur des
sujets du moment : c’est par ici</content>
    

                              
                              
  

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
                    <div class="search_bar line_between">
                    <div class="column_start">
                    <h2title>Cherchez un article </h2title><br/>
                    <input type="text" id="search_bar" class="research" placeholder = ".." onChange={(e) => setInput(e.target.value)} ></input>
                    </div>
                    <div class="column_start">
                    <h2title><strong>Filtres</strong></h2title><br/>
                    <select class="filtres research"   onChange={e => setFilter(e.target.value)}>
                    <option></option>
                    <option value="écoles">Coaching</option>
                    <option value="emplois" >Entretien</option>
                    <option value="concours">Divers</option>

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