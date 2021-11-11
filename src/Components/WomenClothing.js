import Header from "./Header";
import {connect} from "react-redux"
import Product from "./Product"
import store from "./../store";
// import Clothing from "./../assets/Clothing.json"


function WomenClothing({womenClothing}) {
    return (
        <div>
            <Header className="header" headerName="Women Apparel"/>
            <ul>
                {womenClothing.map((cloth)=>{
                    return <Product key={cloth.id} productName={cloth.name}/>
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        womenClothing : state.shop.womenClothing
    };
};

export default connect(mapStateToProps)(WomenClothing);