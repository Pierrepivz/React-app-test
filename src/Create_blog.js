
  import { useState, useRef, useEffect } from "react";
  import { Editor } from "@tinymce/tinymce-react";
  import ReactDOM from 'react-dom';
  import axios from "axios";

function Create_Blog(props) {


  const [title,setTitle] = useState('');
  const [links,setLinks] = useState('');
  const [content,setContent] = useState('');
  const [value,setValue] = useState('');
  const editorRef = useRef();
  

  /*initialisation  Axios useEffect : Article.map ( articles title, content ... )
  on récupère l'article visée pour modifier son contenu via les paramètres url  */ 
  
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  const [Article,setArticle] = useState([]);
  
  
  useEffect (() => {

    axios.get(`http://localhost:3001/api/getblogs/${id}`)
    .then((response) =>  { 
      
      setArticle(response.data);}
    );
      
    
    }, []); 
  
  
  
 const initialcontent = Article.map( value => value.content );
 const inittitle = Article.map(value => value.article_name);
 
  



  
/* article content tinymce article g */

  function updatearticle() {

    if(window.confirm("voulez vous enregistrer les modifications ?")){

    axios.put('http://localhost:3001/api/updatearticlecontent', {
  
  article_name: title,
  content: value,
  article: inittitle,
  
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});


}
    

  }


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


<div class="note">
                              
                              <content>  Créer et visualisez votre article ici </content>
                              
                             </div>

                              
                              
  <input type="input" class="textarea" placeholder = "Titre de l'article" onChange={(e) => setTitle(e.target.value)} defaultValue={inittitle}></input>                      
    <h2title>{inittitle}</h2title>
    <h2under2></h2under2>


                              
                              
                              <div class="line_between">
                              
                              
                              
                              
                    

                    
                    
                    </div>
                              
                        </div>


<div class="editor_container">
  <Editor

  onInit={( evt, editor ) => editorRef.current = editor  
  }
  onEditorChange={( nv , editor ) => { setValue(nv); }
 }
 init={{
   
   service_message: false,
   height: "700px",
   apikey: "puk7gawlgq9hjqtznhwcaed6kxviwu5lg09o2v0vbofxarpo",
   plugins:"image",
  
 }}>


</Editor>
</div>





<div class="column_items_center block">
<button class="bouton" onClick={() => updatearticle()}>Update article</button>

                    

   </div>
   


    <div class="block window line_between">

    
    

    

    <div class="column_items_center">

    
    

    

    

    


    </div>

   
    

    


    </div>
      
    </div>
  );
}

export default Create_Blog;