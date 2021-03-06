export const INCREMENT = 'INCREMENT'
export const DECREMENET = 'DECREMENET'
export const ADD = 'ADD'
export const SUBTRACT = 'SUBTRACT'
export const STORE_RESULT = 'STORE_RESULT'
export const DELETE_RESULT = 'DELETE_RESULT'

export const increment = () => {
    return {
        type: INCREMENT
    }
};
export const decrement = () => {
    return {
        type: DECREMENET
    }
};
export const add = (value) => {
    return {
        type: ADD,
        val: value
    }
};
export const subtract = (value) => {
    return {
        type: SUBTRACT,
        val: value
    }
};

export const saveResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    }
}

export const storeResult = (result) => {
    return dispatch =>  {
        setTimeout( () => {
            dispatch(saveResult(result))
        }, 2000);
    }
};
export const deleteResult = (resultElId) => {
    return {
        type: DELETE_RESULT,
        result: resultElId
    }
};