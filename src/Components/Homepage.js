import ShopWomen from "./../assets/shopWomens.jpg"
import ShopMen from "./../assets/shopMens.jpg"
import Header from "./Header"
import {Link} from "react-router-dom"
// import "./Homepage.css"

function HomePage() {
    return (
        <div>
            <Header headerName="WebsiteName"/>
            <div className="main">
                <div
                    style={{backgroundImage: `url(${ShopWomen})`}}
                >
                <Link to="/womenApparels">Shop Womens</Link>
                </div>
                <div
                    style={{backgroundImage: `url(${ShopMen})`}}
                >
                <Link to="/menApparels">Shop Mens</Link>
                </div>    
            </div>
            
        </div>
    )
}

export default HomePage;