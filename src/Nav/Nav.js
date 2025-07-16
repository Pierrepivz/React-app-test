
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
      
      
      <Link to="../">
        <button onClick={() => window.scrollTo(0,10)}>
        <div class="row">
        <div class="nav-logo mobile_off">
        <img src={logo} className="nav-logo mobile_off" alt="logo" />
            </div>
            <div class="column_start title_logo">
            <content>win<blue>entretien</blue></content>
            <content2>préparez vous à réussir</content2>

            </div>
            
            
            </div>
            </button>
        </Link>

        <div class="nav-links">

        <ul class="mobile_on" >
        <Link to="../offre" >
        
        <button >L'offre</button>

        </Link>
        


        </ul>

      

        
        <ul>
        <Link to="../Methode_page" >
        
        <button >La méthode</button>

        </Link>
        


        </ul>

        <ul class="mobile_on" >
        <Link to="../" >
        
        <img src={logo} class="nav-logo" alt="logo" />

        </Link>
        


        </ul>

        <ul class="mobile_on">
          <Link to="../rendez-vous" onClick={() => window.scrollTo(0,10)}>
        <button >Prendre Rdv</button>
          </Link>

         
        
        </ul>

        <ul >
          <Link to="../blog" onClick={() => window.scrollTo(0,10)}>
        <button >Le Blog</button>
          </Link>

         
        
        </ul>
        
        <ul id="nav_offre" class="mobile_off" >


        <Link to='../offre' >

        <button onClick={() => window.scrollTo(0,10)}>L'offre</button>
        
        

       </Link>

       
       <div class="sub-nav">
       <Link to="../offre" >
         <br/> 
         <button >L'Offre</button></Link>
        
       <Link to="../offre" >
         <br/> 
         <button >Coaching étudiants</button></Link>
         <br/>
         <Link to="../offre" >
        <button >Entretiens étudiants</button></Link>
        <br/>
        <Link to="../offre" >
        <button >Entretiens professionnels</button></Link>
        <br/>
        
        
        <br/>
        
        
        <Link to="../rendez-vous">

        <button onClick={() => window.scrollTo(0,10)}><italic><blue>Prendre rdv</blue></italic></button>
        </Link>
        </div>
        </ul>
        
        <ul>
        <Link to="../coach" onClick={() => window.scrollTo(0,10)}>
        <button class="mobile_off">La coach</button>
        </Link>
        </ul>

        

       

        <ul>
          <Link to="../contact" onClick={() => window.scrollTo(0,10)}>
        <button class="mobile_off">Contact</button>
        </Link>
        </ul>

        
        
        </div>
        
       
      





      </div>
    );
  }
  
  export default Nav;