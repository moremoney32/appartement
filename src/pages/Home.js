import React from "react"
import { BackgroundHeader } from '../components/BackgroundHeader.js';
import imgHeader from "../image/imgHeader.png"

 import { arrays} from '../arrays';
 import { Main } from "../components/Main";
 import { useEffect, useState } from "react";

export function Home(){

    const [tableau, setTableau] =  useState(null)

    useEffect(()=>{

setTableau(arrays)

    },[])



    return (

      

        <div className="bloc-page">
            <BackgroundHeader  imgHeader={imgHeader} titre="Chez vous et partout et ailleurs"/>

           
            { tableau && <Main cards={tableau}/>}    
         
                        
        </div>
      

       
    )

    
}