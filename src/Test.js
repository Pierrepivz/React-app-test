import React from "react";
import './Test.css';
import './Test2.css';
import Nav from './Nav.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './Contact.js';
import Homepage from './Homepage.js';
import Footer from './Footer.js';
import Offre from './Offre.js';
import Rdv from './Rdv.js';
import Methode from './Methode.js';
import Coach from './Coach.js';
import Home_Blog from './home_blog.js';
import Rdvconfirm from './Rdvconfirm.js';
import Contactconfirm from './Contactconfirm.js';
import Blog from './view_blog.js';
import { isValue } from "react-calendar/dist/cjs/shared/propTypes";
import "./Offre.css";
import Create_Blog from "./Create_blog.js";
import Admin_blog from "./admin_blogs.js";
import Login from "./login.js";
import Methode_page from "./Methode_page.js";
import Admin_rdv from "./admin_rdv.js";
import Cgv from "./Cgv.js";
import Mentions_legales from "./Mentions_legales.js";
/*





import Rdvconfirm from "./Rdvconfirm";
*/


function Test() 
{
  
  

  return (
    
    <Router>
    <div className="Test">
      <script src="https://kit.fontawesome.com/c298d004d1.js" crossorigin="anonymous"></script>
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

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

      <Route path='/admin_rdv'>

      <Admin_rdv/>

      </Route>

      <Route path='/admin_blog'>

      <Admin_blog />

      </Route>
      
      <Route path='/login'>
      
      <Login />

      </Route>

      <Route path='/create_blog'>
      
      <Create_Blog />

      </Route>

      <Route path='/rdv'>
      
      <Admin_rdv />

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
