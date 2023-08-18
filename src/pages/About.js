import { BackgroundHeader } from "../components/BackgroundHeader.js"
import kalen from "../image/kalen.png"
import { Collapse } from "../components/Collapse.js"
import downstairss from "../image/downstairss.png"
import upDown from "../image/upDown.png"



export function About(){

    const fiabilite = "les annonces postees sur Kasa garantissent une fiabilite totale.Les photos sont conformes aux logements,et toutes les informations sont regulierement verifees par nos equipes."
    
    const respect = "la bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de pertubation du voisinage entrainera une esclusion de notre plate forme"

    const service = "Nos equipes se tiennent a votre distribution pour vous fournir une experience parfaite.N hesitez pas a nous contacter si vous avew la moindre question."

    const securite = "La securite est la priorite de Kasa.Aussi bien pour nos hotes que pour les voyageurs,chaque logement correspond aux criteres de securite etabli par nos services.En laissant une note aussi bien a lhote qu au locataire,cela permet a nos equipes de verifier que les standarts sont bien respectes.Nous organisons egalement des ateliers sur la securite dosmestique pour nos hotes."


    return(

        <div className="about">
            <BackgroundHeader imgHeader={kalen}/>
            <div className="valeur">
            <Collapse title = "Fiabilite" blogs ={fiabilite} bas={downstairss} haut={upDown}/>
            <Collapse title = "Respect"  blogs  ={respect} bas={downstairss} haut={upDown}/>
            <Collapse title = "Service"  blogs  ={service} bas={downstairss} haut={upDown}/>
            <Collapse title = "Securite"  blogs  ={securite} bas={downstairss} haut={upDown}/>
            </div>
        </div>
    )
}