import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import { Helmet } from "react-helmet";


const Blog = (props) => {

  
  
  const [title,setTitle] = useState('');
  const [Article,setArticle] = useState([]);
  const [Listset,setList] = useState([]);
  
  
  
  useEffect (() => {
    
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  


    axios.get(`https://server-test-3emq.onrender.com/api/getblogs/${id}`)
    .then((response) =>  { 
      
      setArticle(response.data);}
    );


    axios.get('https://server-test-3emq.onrender.com/api/getblogs')
    .then((response) =>  { 
      
      setList(response.data);}
    );
      
    
    }, []); 

    function change_article(id){
      axios.get(`https://server-test-3emq.onrender.com/api/getblogs/${id}`)
    .then((response) =>  { 
      
      setArticle(response.data);}
    );
    
    window.scrollTo(0,10);
      
    }
    /* 
    
    const queryParameters = new URLSearchParams(window.location.search);
    const article_name = queryParameters.get("article");
     
  
  
  const [Article,setArticle] = useState([]);
  
  
  useEffect (() => {

    axios.get(`http://localhost:3001/api/getarticle/${article_name}`)
    .then((response) =>  { 
      setTitle(article_name);
      setArticle(response.data);}
    );
      
    
    }, []);

  */
  
  
  


  return (
    <div className="Page Blog window">

<Helmet>
       
       <title>{Article.map(value => value.meta_title)}</title>
       <meta name="description" content={Article.map (value => value.meta_description)}></meta>
       

      </Helmet>

<div class='column_items_center'>
                              
   <h1title>{Article.map (value => value.article_name)}</h1title>
   
  
                              <h2under2></h2under2>
                                
                                                
                              
                        </div>

    <div class="block"/>

   
    
    
    
    <div class="row">
   

    
    <div class="article_content">

    {Article.map(value => 

<div class="column">

<h3title><blue>{value.article_name}</blue><br/><br/></h3title>

<div class="column">
<content dangerouslySetInnerHTML={{__html: value.content}}></content>



</div>


    </div>
    
)}
    
    

    </div>

    <div class="autre_contenu column mobile_off" >
        <h2title><blue>Plus de contenu :</blue></h2title>
        {Listset.map(value => 
            <div class="other_blogs_article"> <Link to={`/blog?id=${value.id}`} onClick={() => change_article(value.id)}><div class="article_photo"><img src={value.image} width="200px" height="150px"></img></div> </Link>
            <content1><blue>{value.article_name}</blue><br/></content1>
            
            
           
            
           
            
            
            
            </div> 
            )
            }

        
        
        
        
        </div>

    </div>

   
    

    


    
      
    </div>
  );
}

export default Blog;
/* ligne 101*/