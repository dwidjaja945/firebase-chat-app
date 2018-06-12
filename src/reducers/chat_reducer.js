import types from '../actions/types';

const DEFAULT_STATE = {
    log: {},
    name: ''
};

export default ( state = DEFAULT_STATE ,  action ) => {
    switch( action.type ) {
        case types.UPDATE_CHAT_LOG:
            return {...state, log: action.chatLog, name: action.name}
        default:
            return state;

    }
}; 