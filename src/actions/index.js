import { ADD_CONCERT } from '../constants/action-types';

export function addConcert(payload) {
    return { type: ADD_CONCERT, payload };
}
