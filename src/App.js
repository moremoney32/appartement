

import React from "react"

import { Home } from "./pages/Home.js";
import logokasa from "./image/logokasa.jpg";
import footerlogo from "./image/footerlogo.png";
import { NavHeader } from "./components/NavHeader";
import { Logements } from './pages/Logements.js';
import { About} from './pages/About.js';
import { Found} from './pages/Found.js';
import { Footer } from './components/Footer.js';
import './css/index.css';
import { BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";


 export function App() {

    return (
      <Router>
      <div className="App">
      
        <NavHeader logos ={logokasa}/>          
              
             <Switch>
             <Route exact path={"/home"}>
                <Home/>
              </Route>
              
              <Route exact path="/cards/:id">
                  <Logements/>
              </Route>
              <Route exact path={"/about"}>
                <About/>
              </Route>
              <Route  path={"*"}>
                <Found/>
              </Route>
             
              <Redirect to="*"/>
             </Switch> 
            
       
      </div>
      <Footer  footerlogo={footerlogo}/>  
      </Router>
    );
  }
 
 