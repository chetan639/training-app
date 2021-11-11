import store from "./store"
import CustomButton from "./CustomButton"

function Counter(){
    const Increase=()=>{
        store.dispatch({type:'INCREMENT'})
    }
    // const Decrease=()=>{
    //     store.dispatch({type:'DECREMENT'})
    // }
    // const Reset=()=>{
    //     store.dispatch({type:'RESET'})
    // }

    return (
        <div>
            <CustomButton action={Increase} buttonName='INCREASE' compName='CustomButton'/>
            {/* <button onClick={Decrease}>Decrease</button>
            <button onClick={Reset}>Reset</button> */}
        </div>
    )
}

export default Counter;