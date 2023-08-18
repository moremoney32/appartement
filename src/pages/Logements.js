import { useParams } from "react-router-dom"
import { Ligtbox } from "../components/Ligtbox.js"
import {Stars} from "../components/Stars.js"
import { Collapse } from "../components/Collapse.js"
//import { Collape } from "../components/Collape.js"
import downstairss from "../image/downstairss.png"
import upDown from "../image/upDown.png"
import{Found} from "./Found.js"
import { Link} from "react-router-dom"

import { arrays } from "../arrays"


export function Logements(){


    const {id} = useParams()

    const str = window.location.pathname 
const c =str.substr(7, 14)
    
    const uniqueCard = arrays.find(array => array.id === id)
   
    if(uniqueCard){

    const {pictures,title,host,location,tags,rating,equipments,description} = uniqueCard 
    
    
    return (

         <div className="parent-slider">
           < Ligtbox sliders ={pictures}/>
           <div className="information-content">
                <div className="information-profil">
                    <span>{title}</span>
                    <span>{location}</span>
                </div>
                <div className="information-picture">
                    <span>{host.name}</span>
                    <img src={host.picture}/>

                </div>
            </div>
            <div className="circle-star">
                <div className="circle">{
                    tags.map((tag,index)=>{
                        return(

                            <span key={index}>{tag}</span>
                        )
                    })

                }
                
                
                </div>
                <Stars rates={rating}/>
            </div>
            <div className="collapse">
                <Collapse title = "Description" blogs={description} bas={downstairss} haut={upDown}/>
                <Collapse title = "Equipments" blogs={equipments}  bas={downstairss} haut={upDown}/>
             </div>
               
        </div> 
    ) 
    }else{
           
         return <Found/>
     }

}
 