
import logo from './images/logow2n.svg';
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
        

      
      
      <Link to='./home'>
        <div class="nav-logo">
        <img src={logo} className="nav-logo" alt="logo" />
            </div>
        </Link>

        <div class="nav-links">

        
        <ul>
        
        <a>La méthode</a>


        </ul>
        
        <ul>
        <Link to='./offre' >

        <a onClick={() => window.scrollTo(0,0)}>L'offre</a>

        <div class="sub-nav">
        
        
        <a onClick={() => window.scrollTo(0,850)}>Réussir ses entretiens</a>
        <br/>
        <a onClick={() => window.scrollTo(0,1800)}>Construire sa visibilité</a>
        <br/>
        <a onClick={() => window.scrollTo(0,1800)}>Évaluer une opportunité</a>
        <br/>
        <a onClick={() => window.scrollTo(0,1800)}>S'adapter au changement</a>
        <br/>
        
        
        <Link to='./Methode'>

        <a>Prendre rdv</a>
        </Link>
        </div>

       </Link>
        </ul>
        
        <ul>
        <a>La coach</a>
        
        </ul>

        <ul>
          <Link to='./Actual'>
        <a >Actualités</a>
          </Link>

          <div class="sub-nav">
        
        <a>dernières actualités</a>
        
        <br/>
        <a>Parcourir</a>
        
        
        

        
        </div>
        
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