let initialState = {
    count:0
}

function CounterReducer(state=initialState,action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,//current state
                count : state.count + 1
            }
            
        case 'loginSuccess':
            return {
                ...state,//current state
                loginSuccess : true
            }

        case 'loginFail':
            return {
                ...state,//current state
                loginSuccess : false
            }
        default:
            return state
    }
    
}

export default CounterReducer;