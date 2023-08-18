/***
 * composant qui contient les donnees du l en tete de chaque page la navbar
 * @param {img}image
 */
 import React from "react"
 import { NavLink} from "react-router-dom"
 import '../css/index.css';
 import { useLocation} from 'react-router-dom';

export function NavHeader({logos}){



    const location = useLocation();


    return(

        <div className="sous-header">
           
                <img src ={logos} alt="logos"/>
            
                <div className="nav">
             
               <NavLink to="/home"className={window.location.pathname==="/home"?'navaccueil' : "navpropos"}>Accueil</NavLink>
                  <NavLink to="/about" className={window.location.pathname==="/about"?'navaccueil' : "navpropos"} >A Propos</NavLink>
               
                </div>

             
             
         </div>
        )
      
}
