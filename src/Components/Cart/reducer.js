import * as actionTypes from "./actionTypes";
import Clothing from "./../../assets/Clothing.json";

const initialState = {
    womenClothing: Clothing,//{key,name,price}
    cart:[]//{key,name,price,quantity}
}

const CartReducer = (state=initialState, action)=>{

    switch (action.type) {
        case actionTypes.ADD_TO_CART:
        const item = state.womenClothing.find((cloth)=>cloth.id===action.payload.id);

        const inCart = state.cart.find((item)=>item.id===action.payload.id ? true : false);
        return {
            ...state,
            cart: inCart ? state.cart.map((item)=>item.key === action.payload.id ? {...item,qty:item.qty+1} : item):
            [...state.cart,{...item,qty:1}]
        }
        default:
            return state;
    }
}

export default CartReducer;