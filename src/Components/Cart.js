import {connect} from "react-redux";
import { useState,useEffect } from "react";
const Cart=({cart})=>{
    return (
        <div>
            Your Cart:[]
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        cart : state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart);