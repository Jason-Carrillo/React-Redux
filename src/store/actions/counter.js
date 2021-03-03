import * as actionTypes from './result'

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
};
export const decrement = () => {
    return {
        type: actionTypes.DECREMENET
    }
};
export const add = (value) => {
    return {
        type: actionTypes.ADD,
        val: value
    }
};
export const subtract = (value) => {
    return {
        type: actionTypes.SUBTRACT,
        val: value
    }
};