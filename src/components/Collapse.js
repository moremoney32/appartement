/****
 * 
 * composant collapse qui permet de deouler comme une liste
 * @param{string,array,img}title,text,bas,haut
 */
 import {useState} from "react";
export function Collapse({title,blogs,bas,haut}){

    
    const [showed, setShowed] = useState(false);
 
   console.log(blogs)

    return(
        
                            <div className="description">
                                <div className="sous-description">{title}</div>
                                <img src={bas} className="upDown" style={showed ? { display: "none" } : { display: "block" }}  onClick={(e) => setShowed(true)}/>
                                <img src={haut} className="Down" style={showed ? { display: "block" } : { display: "none" }} onClick={(e) => setShowed(false)}/>
                                <div className="bloc-description"  style={showed ? { display: "block" } : { display: "none" }}>{Array.isArray(blogs) ?
                                             blogs.map((blog,index)=>{
                                                return(
                                            
                                                    <p key={index}>{blog}</p>
                                                )
                                            })
                                :  <span>{blogs}</span>}</div> 

                            </div> 
                            
                         
                            
           
        
    )
}
 