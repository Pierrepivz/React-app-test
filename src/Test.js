

import { lazy } from 'react';

import Nav from './Nav/Nav.js';
import Footer from './Footer/Footer.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Offre from './Offre/Offre.js';
import Contact from './Contact/Contact.js';
import Methode from './Rdv/Methode.js';
import Coach from './Coach/Coach.js';
import HomeBlog from './Blog/home_blog.js';
import Contactconfirm from './Contactconfirm.js';
import Blog from './Blog/view_blog.js';
import MethodePage from "./Methode/Methode_page.js";
import Rdvconfirm from './Rdvconfirm.js';
import "./Offre/Offre.css";

const MentionsLegales = lazy(() => import("./Mentions/Mentions_legales.js"));
const Cgv = lazy(() => import("./Mentions/Cgv.js"));
const Homepage = lazy(() => import("./Homepage/Homepage.js"));


function Test() 
{
  
  

  return (
    
    <Router >
    <div className="Test">
      <script src="https://kit.fontawesome.com/c298d004d1.js" crossorigin="anonymous"></script>
      
      

      <Nav />
      
      <Switch>
      <Route exact path='/'>
      
      <Homepage />
      

      </Route>

      <Route exact path='/offre'>
      
      <Offre />

      </Route>

      <Route exact path='/Methode_page'>
      
      <MethodePage/>

      </Route>


      

      

      <Route exact path='/rendez-vous'>
      
      <br /><br /><br /><br /><br />

      <Methode/>

      </Route>

      <Route exact path='/confirmationrdv'>

        <br /> <br /><br /><br /><br /><br /><br />
      
      <Rdvconfirm/>
      
      </Route>

      <Route exact path='/confirmationcontact'>

        <br /> <br /><br /><br /><br /><br /><br />
      
      <Contactconfirm/>
      
      </Route>

      <Route exact path='/Cgv'>
      
      <Cgv />

      </Route>

      <Route exact path='/Mentions'>
      
      <MentionsLegales />

      </Route>


      <Route exact path='/contact'>
      
      <Contact />

      </Route>

      <Route exact path='/coach'>
      
      <Coach />

      </Route>

      <Route path='/blog/*'>
      
      <Blog />

      </Route>

      

      <Route exact path='/blog'>
      
      <HomeBlog />

      </Route>

      </Switch>


      <Footer />
      
    </div>
    </Router>
  );
}

export default Test;
