import store from "../store";

function Product(props){

    const addToCart=(idValue)=>{
        store.dispatch({type:'ADD_TO_CART',})
    }

    return (
        <div>
            <li>{props.productName}<button>Add to Cart</button></li>
        </div>
    )
}

export default Product;