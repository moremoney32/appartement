/****
 * 
 * composant qui gere le slider de la page logement
 * @param ({sliders})tableau
 */
import '../css/ligtbox.css';
import left from "../image/left.svg";
import right from "../image/right.svg";
import {  useState } from "react";

export function Ligtbox({sliders}){

    const [currentIndex, setCurrentIndex] =  useState(0)

    function preview(){

        setCurrentIndex(currentIndex === 0 ? sliders.length-1:currentIndex - 1) 

    }
  
   function next () {
       
       setCurrentIndex(currentIndex ===sliders.length-1? 0:currentIndex + 1) 
       

    }



    return (

        <div className="slider"> 
          <div className='icons'>

                  {sliders.length > 1 ? <img src={left} className="left" onClick={preview} />:''}
                  {sliders.length > 1 ?   <img src={right} className="right" onClick={next} />:''}
                        </div>
          
            {

        sliders.map((slide,index)=>{
         

               return (
            
                    <div className={index===currentIndex ?"slideActive":"slide"}  key={index}>
                    
                        {index===currentIndex && (<img src={slide} className="carD"  />)}
                        
                   
                     </div>
               
               )

               
            })
             }
             <div className="sliderNumber">
                         {currentIndex + 1}/{sliders.length}
                          </div>
           
           
        </div>

    )
            }
           
            
