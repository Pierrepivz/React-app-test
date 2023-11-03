import { useState, useEffect } from "react";
import React from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



function Admin_blog() {

  
    const [article_name,setArticlename] = useState('');
    const [filter,setFilter] = useState('');
    const [input,setInput] = useState('');
    const [Listset, setDatalist] = useState([]);
    const [description,setDescription] = useState('');
    const [title,setTitle] = useState('');
    const [articlefilter,setArticleFilter] = useState('');
    const [image,setImage] = useState('');
    
    

  useEffect (() => {

    axios.get('http://localhost:3001/api/getblogs')
      .then((response) =>  { 
        setDatalist(response.data);}
      );
      
    
    }, []); 
  
  var verif = (Listset.map(value => value.id));
  var last = verif.length - 1;
  var id = verif[last] + 1;
  

  const submit = () => {

    if(window.confirm("voulez vous vraiment ajouter cet article ?")){
  
  
  axios.post('http://localhost:3001/api/insertblog', {
    
    article_name: title,
    filters: articlefilter,
    image: image

  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  window.location.reload();
}
  
}


const editfunction = (id) => {
 /*
  axios.put('http://localhost:3001/api/updatearticlecontent', {
    id: id,
    article_name: title,
    description: description,
    filter: articlefilter,
    image: image

});*/
  
  
  }





  const deletefunction = (id) => {
    if(window.confirm("voulez vous vraiment supprimer cet article ? tout son contenu sera également supprimé")){
    axios.delete(`http://localhost:3001/api/deletearticle/${id}`);
    window.location.reload();}

  }
  
    
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
                              
                              
                            <div class="line_between">
                              
                              <div class="column_items_center">
                              
                              <content class="note"> Création, suppression et édition des articles</content>
    <h1>{articlefilter}</h1>
                              <div class="line_around">
                              <input type="text" class="textarea" placeholder = "Titre de l'article" onChange={(e) => setTitle(e.target.value)} ></input>
      
      <br/>
      <input type="text" class="textarea" placeholder = "lien de l'image" onChange={(e) => setImage(e.target.value)} ></input>
      <select class="filtres"  class="research" onChange={e => setArticleFilter(e.target.value)}>
                    <option></option>
                    <option value="écoles">Concours</option>
                    <option value="emplois" >Entretiens</option>
                    <option value="concours">Coaching</option>

                    </select>
  
        <button class="but" onClick={submit}>Ajouter un article</button>
        <br/><br/><br/><br/>
                              </div>

                  
                              
                             </div>



                             
                    
                    </div>
                    
                    
                    </div>

<div class="window column">
                    <div class="search_bar line_between">
                    <div class="column_start">
                    <h2title>Cherchez un article </h2title><br/>
                    <input type="text" id="search_bar" class="research" placeholder = ".." onChange={(e) => setInput(e.target.value)} ></input>
                    </div>
                    <div class="column_start">
                    <content2><blue>Filtres</blue></content2><br/>
                    <select class="filtres"  class="research" onChange={e => setFilter(e.target.value)}>
                    <option></option>
                    <option value="écoles">écoles</option>
                    <option value="emplois" >emplois</option>
                    <option value="concours">concours</option>

                    </select>
                    </div>
                    
                    
                     <br/>
                    </div>

                    <div class="blog_list column block">
                    
    <div class="line_around" id="articles_select">
   
    
    {filtereditems.map(value => 
    <div class="column_start">
        
        <content1>{value.article_name}</content1>
        <div class="home_article column_start"> <div class="article_photo" ><img src={value.image}></img></div> 
        
<div class="column">
        <button class="but" onClick={() => {deletefunction(value.id)}}>Delete</button>
        
<a href={`/Create_blog?id=${value.id}`}>
        <button class="but" >edit</button>
        </a>
        </div>
        
        </div>
        
        
        
        
        
        </div>
        
    )}

    
    </div>

    


    </div>
    
    
    </div>
       
    
                        </div>
  
        
      
    );
  }
  
  export default Admin_blog;