const initialState = true

const myReducer = (state = initialState, action) => {

    if (action.type === 'TOGGLE') {
        return !state;
    }
    return state;
}
export default myReducer;