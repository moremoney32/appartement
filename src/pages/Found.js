import erreur from "../image/erreur.png"
import React from "react"
 import { Link} from "react-router-dom"

export function Found(){

    const error = "Oups!La page que vous demandez n existe pas."
    const accueil = "Retourner sur la page d accueil"

    return(
        <div className="found">

            <img src={erreur} className="erreur"/>
            <h1 className="titrerreur">{error}</h1>
            <Link to="/home" className="retourPage">{accueil}</Link>


           
        </div>
    )
}