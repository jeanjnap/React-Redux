const INITIAL_STATE = {
    text: '',
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'setText': return { ...state, text: action.payload };

        default:
            break;
    }
    return state;
};