import * as actionTypes from '../store/actions/actions'

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({},state);
            newState.counter = state.counter + 1
            return newState
        case actionTypes.DECREMENET:
        return {
            ...state, 
            counter: state.counter - 1
        }
        case actionTypes.ADD:
        return {
            ...state,
            counter: state.counter + action.val
        }
        case actionTypes.SUBTRACT:
        return {
            ...state,
            counter: state.counter - action.val
        }
        case actionTypes.STORE_RESULT: 
        return {
            ...state,
            results: state.results.concat({id: new Date() , value: state.counter})
        }
        case actionTypes.DELETE_RESULT: 
        // const id = 2;
        // const newArray = [...state.results];
        // newArray.results.splice(id, 1)


        const updatedArray = state.results.filter((result, index) => result.id !== action.resultElId)
        return {
            ...state,
            results: updatedArray
        }
    }
    return state;

}

export default reducer;