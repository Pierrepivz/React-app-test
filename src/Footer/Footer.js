
import React from "react";
import logo from '../images/firstlogo.svg';
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {

  

  

    return (
      <div className="Footer">
        

      <div class='line_between'>


      <div class="nav-logo">
        <img src={logo} className="nav-logo" alt="logo" />
            </div>


        <div class="line_around">

        <div class="column_start" id="foot_content">
        <ftitle><content>winentretien</content></ftitle>

        
        
        <f2>06 51 43 26 77</f2>
        <f3>carole@winentretien.com</f3>

        </div>

        <div class= "column_start" id="foot_content">
        <ftitle><content>Nous suivre</content></ftitle>

        
        <h2title><a href="https://linkedin.com"><i class="fa-brands fa-linkedin"></i></a></h2title>
        

        </div>

        

        <div class="column_start" id="foot_content">
        <ftitle><content>Mentions légales</content></ftitle>

        <f1>© WINENTRETIEN 2023 TOUS DROITS RÉSERVÉS</f1>
        <Link to="/Mentions" onClick={() => window.scrollTo(0,10)}><f2>MENTIONS LÉGALES</f2></Link>
        <Link to="/Cgv" onClick={() => window.scrollTo(0,10)}><f3>CONDITIONS GENERALES DE VENTES</f3></Link>

        </div>
        
        

        


        </div>
        
       </div>
      





      </div>
    );
  }
  
  export default Footer;