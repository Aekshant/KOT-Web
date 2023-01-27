import "./ItemAvtar.css"
import Healthy from "./healthy.jpg"
import Avtar from "./Avtar"

export default function ItemAvtar( ){
    return( 
        <div className="avtar">
            <div className="avtar-col">
            <h4>Eat what makes you happy</h4>
            <div className="avtar-row"> 
                <Avtar name="Healthy"/>
                <Avtar name="Home Style"/>
                <Avtar name="Pizza"/>
                <Avtar name="Chicken"/>
            </div>
            </div>
        </div>
     )
}