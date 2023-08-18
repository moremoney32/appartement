
/***
 * 
 * composant qui parle des etoiles de la page
 * @param ({rates})arrays
 */
import starRed from "../image/starRed.png" 
 import starGrey from "../image/starGrey.png" 

export function Stars({rates}){

    const stars = [1,2,3,4,5]
    return (
        <div className="stard">{

            stars.map((star,index)=>{
                if(rates>=star){
                    return <img src={starRed} className="starRed" key ={index}/>
                }
                 else{
                     return <img src={starGrey} className="starGrey" key ={index}/>
                 }
                }   )
        }
        </div>

    )


}