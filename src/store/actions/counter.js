import * as actionTypes from './actionTypes'

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