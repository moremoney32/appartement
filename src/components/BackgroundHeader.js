/**c
 * composant qui contient les donnees du l en tete de la page la navbar
 * @param {props}image,titre  
 * @returns 
 */

export function BackgroundHeader({imgHeader,titre}){

    return (

       
        <div className="background-calque">
            <img src={imgHeader}/>
            <h1>{titre}</h1>
        </div>
    )
}
