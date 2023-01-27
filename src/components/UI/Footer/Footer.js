import "./Footer.css"
import HomeImg from "./Home.png"
import BookmarkImg from "./Bookmark.svg"
import CookingImg from "./Cooking.png"
import GlobeImg from "./Globe.png"
export default function Header( ){
    return ( 
        <div className="footer">
            {/* <img src={GlobeImg} style={{ height:"50px", color:"white", display: "flow" }}/> */}
            <div className="footer-row">
                <div className="footer-col"> 
                    <img src={HomeImg} style={{ height:"30px", color:"white" }}/>
                    <h5 style={{  marginTop: "0px" }}>Home</h5>
                </div>
                <div className="footer-col"> 
                    <img src={GlobeImg} style={{ height:"30px", color:"white" }}/>
                    <h5 style={{  marginTop: "0px" }}>Discover</h5> 
                </div>
                <div className="footer-col"> 
                    <img src={BookmarkImg} style={{ height:"30px", color:"white" }}/>
                    <h5 style={{  marginTop: "0px" }}>Favorites</h5> 
                </div>
                <div className="footer-col"> 
                    <img src={CookingImg} style={{ height:"30px", color:"white" }}/>
                    <h5 style={{  marginTop: "0px" }}>Cart</h5> 
                </div>
            </div>
        </div>
    )
}