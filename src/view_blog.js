import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function Blog(props) {

  
    const [description,setDescription] = useState('');
    const [soustitre,setSoustitre] = useState('');
    const [title,setTitle] = useState('');
    const [notetitle,setNotetitle] = useState('');
    const [notetext,setNotetext] = useState('');
    const [links,setLinks] = useState('');
    
  
  
  
  const [Article,setArticle] = useState([]);
  
  
  useEffect (() => {

    axios.get('http://localhost:3001/api/getarticle')
      .then((response) =>  { 
        setArticle(response.data);}
      );
      
    
    }, []);

  
  
  
  
  var textareas = document.querySelectorAll(".textarea");
  var edit = document.querySelector(".edit");

  function edit_mode(){
    
    for (var i = 0; i < textareas.length; i++){
       
      if(textareas[i].classList.contains("none")){

        textareas[i].classList.remove("none");


        edit.classList.remove("fa-eye-slash");
        edit.classList.add("fa-eye");

        
      }else{
      
      textareas[i].classList.add("none");
      
      edit.classList.remove("fa-eye");
      edit.classList.add("fa-eye-slash");
      
           
           }
    }
    
  }


  return (
    <div className="Page Blog">

<div class='column_items_center'>
                              

                              <h1title>{title}</h1title>
                              <h2under2></h2under2>
                              
                              <div class="line_between">
                              
                              
                              
                              <div class="note column_items_center">
                              
                              <content>  Créer et visualisez votre article ici </content>
                              
                             </div>
                    

                    
                    
                    </div>
                              
                        </div>

    <div class="block window line_between">

    <div class="swipe_buton" onClick={edit_mode}><i class="fa-solid fa-eye edit"></i></div>
    
    <div class="article">
    
    <h2title>{props.article_name}</h2title>
    <h2under2></h2under2>

    
    <div class="article_content column_start">

    {props.map(value => 

<div class="column_start">

<h3title><blue>{value.sous_titre}</blue><br/><br/></h3title>

<div class="article_paragraph column_start">
<content>{value.content}<br/><br/></content>



</div>

<div class="article_note">
    <h3title><strong><blue>{value.note_title}<br/></blue></strong></h3title>
    
    <content1>{value.note_text}</content1>
    </div>
    </div>
    
)}
    
    

    

    

    <div class="article_reco">
    <h3title>liens utiles</h3title><br/><br/>
    <content>{links}<input type="text" class="textarea" placeholder = "liens utiles" onChange={(e) => setLinks(e.target.value)} ></input> </content>

    </div>
    

    </div>

    </div>
    

    <div class="autre_contenu autre_contenu_box column_items_center">
    <h3title>Plus de contenu : </h3title>
    <br /> <br/><br /> <br/>
    
    
    <br /> <br/><br /> <br/>

    
    <br /> <br/><br /> <br/>
    
    
    
    </div>


    </div>
      
    </div>
  );
}

export default Blog;