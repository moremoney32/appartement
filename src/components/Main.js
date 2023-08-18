/****
 * composant qui gere le cadre des logements sur la page d accueil
 * @params ({cards})tableau
 */
 import React from "react"
 import { Link} from "react-router-dom"
 import '../css/index.css';

export function Main({cards}){


    return (

        <div className="main">
          
            {

           cards.map((card)=>{
            
               return (
            
                    <div className="card" key ={card.id}>
                       
                      
                     <Link to={`/cards/${card.id}`}><img src ={card.cover} className="cardImg"/></Link>
                      
                    
                             <span>{card.title}</span>
                             
                    </div>
               
               )
               
            })
             }
           
           
        </div>

    )
            }
