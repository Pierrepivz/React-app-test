import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Helmet } from "react-helmet";


const Blog = (props) => {

  
  
  
  const [Article,setArticle] = useState([]);
  const [Listset,setList] = useState([]);
  const [canocical_url,setCanonical] = useState("");
  


  const linkurl = (url) => {

    var url_seo = url.split(" ").join("-");

    if(url != null){
      
      
       
      return url_seo;


    }else{
      return "";
    }

  }
  
  
  useEffect (() => {
   

  const URLtest = window.location.href;
    var article_url = URLtest.split("/blog/")[1].split("-");
    var url = article_url.join(" ");
    setCanonical(`https://www.winentretien.com/blog/${URLtest.split("/blog/")[1]}`);
    


    axios.get(`https://server-test-3emq.onrender.com/api/getblogsbyurl/${url}`)
    .then((response) =>  { 
      
      setArticle(response.data);}
    );


    axios.get('https://server-test-3emq.onrender.com/api/getblogs')
    .then((response) =>  { 
      
      setList(response.data);}
    );
      
    
    }, []); 
 
function article_redirect(url){

    

  window.location.href = `/blog/${linkurl(url)}`;

}

    
    
    
  


  return (
    <div className="Page Blog window">

<Helmet>
       
       <title>{Article.map(value => value.meta_title).toString()}</title>
       <meta name="description" content={Article.map(value => value.meta_description).toString()}></meta>
       <link rel="canonical" href={canocical_url} />
       

      </Helmet>

<div class='column_items_center'>
  
                              
   <h1><h1title>{Article.map (value => value.article_name)}</h1title></h1>
   
  
                              <h2under2></h2under2>
                                
                                                
                              
                        </div>

    <div class="block"/>

   
    
    
    
    <div class="row">
   

    
    <div class="article_content">

    {Article.map(value => 





<div class="column">
<content dangerouslySetInnerHTML={{__html: value.content}}></content>



</div>


    
    
)}
    
    

    </div>

    <div class="autre_contenu column mobile_off" >
        <h2title><blue>Plus de contenu :</blue></h2title>
        {Listset.slice(0,4).map(value => 
        
            <div class="other_blogs_article"> <div class="article_photo"><img src={value.image} alt={value.alt} description={value.alt_description} title={value.alt_titre} width="200px" height="150px" onClick={() => article_redirect(value.url)}></img></div> 
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
