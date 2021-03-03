import * as actionTypes from '../actions/actionTypes'

import { updateObject } from '../utility'

const initialState = {
    results: []
}

const deleteResult = (state, action) => {

}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        
        case actionTypes.STORE_RESULT: 
        return updateObject(state, { results: state.results.concat({id: new Date() , value: state.counter})})
        case actionTypes.DELETE_RESULT: 
        // const id = 2;
        // const newArray = [...state.results];
        // newArray.results.splice(id, 1)


        const updatedArray = state.results.filter((result, index) => result.id !== action.resultElId)
        return updateObject(state, {results: updatedArray})
    }
    return state;

}

export default reducer;