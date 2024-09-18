import React from "react";
import './Test.css';
import './Test2.css';
import Nav from './Nav/Nav.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './Contact/Contact.js';
import Homepage from './Homepage/Homepage.js';
import Footer from './Footer/Footer.js';
import Offre from './Offre/Offre.js';
import Methode from './Rdv/Methode.js';
import Coach from './Coach/Coach.js';
import Home_Blog from './Blog/home_blog.js';
import Rdvconfirm from './Rdvconfirm.js';
import Contactconfirm from './Contactconfirm.js';
import Blog from './Blog/view_blog.js';
import { isValue } from "react-calendar/dist/cjs/shared/propTypes";
import "./Offre/Offre.css";
import Methode_page from "./Methode/Methode_page.js";
import Cgv from "./Mentions/Cgv.js";
import Mentions_legales from "./Mentions/Mentions_legales.js";



function Test() 
{
  
  

  return (
    
    <Router>
    <div className="Test">
      <script src="https://kit.fontawesome.com/c298d004d1.js" crossorigin="anonymous"></script>
      
      

      <Nav />
      
      <Switch>
      <Route exact path='/'>
      
      <Homepage />

      </Route>

      <Route path='/offre'>
      
      <Offre />

      </Route>

      <Route path='/Methode_page'>
      
      <Methode_page/>

      </Route>


      

      

      <Route path='/Methode'>
      
      <br /><br /><br /><br /><br />

      <Methode/>

      </Route>

      <Route path='/confirmationrdv'>

        <br /> <br /><br /><br /><br /><br /><br />
      
      <Rdvconfirm/>
      
      </Route>

      <Route path='/confirmationcontact'>

        <br /> <br /><br /><br /><br /><br /><br />
      
      <Contactconfirm/>
      
      </Route>

      <Route path='/Cgv'>
      
      <Cgv />

      </Route>

      <Route path='/Mentions'>
      
      <Mentions_legales />

      </Route>


      <Route path='/contact'>
      
      <Contact />

      </Route>

      <Route path='/coach'>
      
      <Coach />

      </Route>

      <Route path='/blog'>
      
      <Blog />

      </Route>

      

      <Route path='/Actual'>
      
      <Home_Blog />

      </Route>

      </Switch>


      <Footer />
      
    </div>
    </Router>
  );
}

export default Test;
