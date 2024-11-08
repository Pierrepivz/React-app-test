
import logo from '../images/firstlogo.svg';
import { Link } from "react-router-dom";
import "./Nav.css";
import {Helmet} from "react-helmet";

function Nav() {
  
    
    
      
    return (
      <div className="Nav">
        
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       

      </Helmet>
      
      
      <Link to='./'>
        <a onClick={() => window.scrollTo(0,10)}>
        <div class="row">
        <div class="nav-logo mobile_off">
        <img src={logo} className="nav-logo mobile_off" alt="logo" />
            </div>
            <div class="column_start title_logo">
            <content>win<blue>entretien</blue></content>
            <content2>préparez vous à réussir</content2>

            </div>
            
            
            </div>
            </a>
        </Link>

        <div class="nav-links">

        <ul class="mobile_on" >
        <Link to="./offre" >
        
        <a >L'offre</a>

        </Link>
        


        </ul>

      

        
        <ul>
        <Link to="Methode_page" >
        
        <a >La méthode</a>

        </Link>
        


        </ul>

        <ul class="mobile_on" >
        <Link to="./" >
        
        <img src={logo} class="nav-logo" alt="logo" />

        </Link>
        


        </ul>

        <ul class="mobile_on">
          <Link to='./rendez-vous' onClick={() => window.scrollTo(0,10)}>
        <a >Prendre Rdv</a>
          </Link>

         
        
        </ul>

        <ul >
          <Link to='./Actual' onClick={() => window.scrollTo(0,10)}>
        <a >Le Blog</a>
          </Link>

         
        
        </ul>
        
        <ul id="nav_offre" class="mobile_off" >
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
        
        
        <Link to='./rendez-vous'>

        <a onClick={() => window.scrollTo(0,10)}><italic><blue>Prendre rdv</blue></italic></a>
        </Link>
        </div>
        </ul>
        
        <ul>
        <Link to='./coach' onClick={() => window.scrollTo(0,10)}>
        <a class="mobile_off">La coach</a>
        </Link>
        </ul>

        

       

        <ul>
          <Link to="./contact" onClick={() => window.scrollTo(0,10)}>
        <a class="mobile_off">Contact</a>
        </Link>
        </ul>
        </div>
        
       
      





      </div>
    );
  }
  
  export default Nav;