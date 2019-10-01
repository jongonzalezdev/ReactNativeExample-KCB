import * as types from './types';

export const setFetching = (value) => {
    return {
        type: types.HOUSES_UPDATE_FETCHING,
        value: value
    };
};