import { useState, useEffect } from "react";
import React from "react";
import axios from 'axios';
import Blog from './view_blog.js';
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

    axios.get('http://localhost:3001/api/get')
      .then((response) =>  { 
        setDatalist(response.data);}
      );
      
    
    }, []); 
  
  var verif = (Listset.map(value => value.id));
  var last = verif.length - 1;
  var id = verif[last] + 1;
  

  const submit = () => {

    if(window.confirm("voulez vous vraiment ajouter cet article ?")){
  
  
  axios.post('http://localhost:3001/api/insert', {
    id: id,
    article_name: title,
    description: description,
    filter: articlefilter,
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

const updatefunction = (aname) => {

setArticlename(aname);

}
const editfunction = (id) => {
 
  axios.put('http://localhost:3001/api/update', {
    id: id,
    article_name: title,
    description: description,
    filter: articlefilter,
    image: image

});
  
  
  }


const update = (article_name) => {
            
  axios.put('http://localhost:3001/api/update', {

article_name: article_name,
description: "nouvelle desc",

})
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});


  }
  const deletefunction = (article_name) => {
    if(window.confirm("voulez vous vraiment supprimer cet article ? tout son contenu sera également supprimé")){
    axios.delete(`http://localhost:3001/api/delete/${article_name}`);
    axios.delete(`http://localhost:3001/api/deletecontent/${article_name}`);
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
            return elements.filter( card => card.article_name.includes(query) ).filter( card => card.filtre.includes(select));
            
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
                              
                              <content class="note"> Retrouvez toutes nos actualités</content>
    
                              
                  
                              
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
        

        <a href={value[3]}><div class="home_article"> <div class="article_photo" ><img src={value.image}></img></div> 
        <content1>{value.article_name}<br/></content1>
        <content1>{value.description}</content1>
        
       <Link to="/blog" >
        <button class="but" onClick={() => {updatefunction(value.article_name)}}>check</button>
       </Link>
        
        
        
        </div>
        </a>
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