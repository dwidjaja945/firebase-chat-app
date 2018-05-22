import types from './types';

export function updateChat( log ){
    return {
        type: types.UPDATE_CHAT_LOG,
        payload: log
    };
}