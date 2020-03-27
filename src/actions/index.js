import { ADD_CONCERT } from '../constants/action-types';

export const addConcert = payload => {
    return { type: ADD_CONCERT, payload };
};
