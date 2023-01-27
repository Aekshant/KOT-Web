import "./Header.css"
import Avtar from "./Profile.png"

export default function Header( ){
    return( <div className="header">
       <div className="header-row">
            <div className="header-col">
                <h5>Welcome</h5>
                <h2>Aekshant</h2>
            </div>
            <div className="header-col4">
                <img src={Avtar} />
            </div>
       </div>
    </div>
 )
}