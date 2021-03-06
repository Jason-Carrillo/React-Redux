import * as actionTypes from './actionTypes'
import { updateObject } from '../utility'

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
}

export const storeResult = (result) => {
    return (dispatch, getState) =>  {
        setTimeout( () => {
            // const oldCounter = getState().ctr.counter;
            dispatch(saveResult(result))
        }, 2000);
    }
};
export const deleteResult = (resultElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        result: resultElId
    }
};