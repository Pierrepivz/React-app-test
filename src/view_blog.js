import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Other_blogs from "./other_blogs.js";

const Blog = (props) => {

  const html = "<h1>ok ok</h1>";
   
    const [title,setTitle] = useState('');
    const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  const [Article,setArticle] = useState([]);
  
  
  useEffect (() => {

    axios.get(`http://localhost:3001/api/getblogs/${id}`)
    .then((response) =>  { 
      
      setArticle(response.data);}
    );
      
    
    }, []); 
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
    <div className="Page Blog">

<div class='column_items_center'>
                              
   {Article.map (value => value.article_name)}
  <h1title>{title}</h1title>
  <h2under></h2under>
                              <h2under2></h2under2>
                                
                                                
                              
                        </div>

    <div class="block window line_between">

   
    
    <div class="article">
    
    <div dangerouslySetinnerHtml={{__html: html}}/>
    <h2under2></h2under2>

    
    <div class="article_content column_start">

    {Article.map(value => 

<div class="column_start">

<h3title><blue>{value.article_name}</blue><br/><br/></h3title>

<div class="column_start">
<content dangerouslySetInnerHTML={{__html: value.content}}></content>



</div>


    </div>
    
)}
    
    

    

    
    

<div class="article_reco">
  {Article.map( value =>
<content>{value.links} </content>
)}
</div>


    
    
    

    </div>

    </div>

    <Other_blogs/>
    

    


    </div>
      
    </div>
  );
}

export default Blog;