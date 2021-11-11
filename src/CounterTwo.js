import store from './store';
import CustomButton from './CustomButton';

function CounterTwo(){
    // const Increase=()=>{
    //     store.dispatch({type:'INCREMENT'})
    // }
    const Decrease=()=>{
        store.dispatch({type:'DECREMENT'})
    }
    // const Reset=()=>{
    //     store.dispatch({type:'RESET'})
    // }

    return (
        <div>
            {/* <button onClick={Increase}>Increase</button> */}
            <CustomButton action={Decrease} buttonName='DECREASE' compName='CustomButton'/>
            {/* <button onClick={Reset}>Reset</button> */}
        </div>
    )
}

export default CounterTwo;