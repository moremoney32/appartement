import Dow from "../image/Dow.png"
import stair from "../image/stair.png"


export function Collape({title,blogs}){


    function change(){

        const bloc = document.querySelector(".bloc")
       const heTop = document.querySelector(".upDow")
       const top = document.querySelector(".Dow")
       bloc.style.display ="block";
       heTop.style.display="none";
       top.style.display="block";
       

   }
   function rechange(){

       const bloc = document.querySelector(".bloc")
      const top = document.querySelector(".Dow")
      const heTop = document.querySelector(".upDow")
      bloc.style.display ="none";
      heTop.style.display="block";
      top.style.display="none";
      

  }


   return(

                           <div className="description">
                               <div className="sous-description">{title}</div>
                               <img src={stair} className="upDow" onClick ={change}/>
                               <img src={Dow} className="Dow" onClick ={rechange}/>
                               <div className="bloc">{

blogs.map((blog,index)=>{
    return(

        <p key={index}>{blog}</p>
    )
})
                               }</div> 

                           </div>       
          
       
   )
}



