
import logo from './images/firstlogo.svg';
import { Link } from "react-router-dom";

function Nav() {
  /*<div class="sub-nav">
        
        <a>sous-lien 1</a>
        
        
        <a>sous-lien 2</a>
        
        
        <a>sous-lien 3</a>

        
        </div>*/
    /*function scrollto(){
      var position = window.pageYOffset;
      for (var i = position; i < 850; i++){
        setInterval(() => { window.scrollTo(0,i); }, 5000);
         
        dddddd
      
    }
    }*/
    
    
      
    return (
      <div className="Nav">
        

      
      
      <Link to='./'>
        <a onClick={() => window.scrollTo(0,10)}>
        <div class="row">
        <div class="nav-logo">
        <img src={logo} className="nav-logo" alt="logo" />
            </div>
            <div class="column_start title_logo">
            <content>win<blue>entretien</blue></content>
            <content2>préparez vous à réussir</content2>

            </div>
            
            
            </div>
            </a>
        </Link>

        <div class="nav-links">

        
        <ul>
        <Link to="Methode_page">
        
        <a>La méthode</a>

        </Link>
        


        </ul>
        
        <ul>
        <Link to='./offre' >

        <a onClick={() => window.scrollTo(0,10)}>L'offre</a>

        <div class="sub-nav">
        
        
        
        <a onClick={() => window.scrollTo(0,3020)}>Convaincre à l'oral</a>
        <br/>
        <a onClick={() => window.scrollTo(0,3770)}>Être bien dans son poste</a>
        <br/>
        
        
        <Link to='./Methode'>

        <a onClick={() => window.scrollTo(0,10)}><italic><blue>Prendre rdv</blue></italic></a>
        </Link>
        </div>

       </Link>
        </ul>
        
        <ul>
        <Link to='./coach'>
        <a>La coach</a>
        </Link>
        </ul>

        <ul>
          <Link to='./Actual'>
        <a >Actualités</a>
          </Link>

         
        
        </ul>

        <ul>
          <Link to="./contact">
        <a>Contact</a>
        </Link>
        </ul>
        </div>
        
       
      





      </div>
    );
  }
  
  export default Nav;