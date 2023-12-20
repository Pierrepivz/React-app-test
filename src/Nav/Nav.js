
import logo from '../images/firstlogo.svg';
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  
    
    
      
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
        
        <ul id="nav_offre" >
        <Link to='./offre' >

        <a  onClick={() => window.scrollTo(0,10)}>L'offre</a>
        
        

       </Link>
       <div class="sub-nav">
        
        
       <Link to='./offre' >
        <a onClick={() => window.scrollTo(0,310)}>Convaincre à l'oral</a>
        <br/><br/>
        <a onClick={() => window.scrollTo(0,1720)}>Être bien dans son poste</a>
        </Link>
        <br/>
        
        
        <Link to='./Methode'>

        <a onClick={() => window.scrollTo(0,10)}><italic><blue>Prendre rdv</blue></italic></a>
        </Link>
        </div>
        </ul>
        
        <ul>
        <Link to='./coach'>
        <a>La coach</a>
        </Link>
        </ul>

        <ul>
          <Link to='./Actual'>
        <a >Le Blog</a>
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