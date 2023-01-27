// import "./ItemAvtar.css"
import Healthy from "./healthy.jpg"

export default function Avtar( { name } ){
    return( 
        <div>
            <img src={Healthy}/>
            <h4>{name }</h4>
        </div>
     )
}