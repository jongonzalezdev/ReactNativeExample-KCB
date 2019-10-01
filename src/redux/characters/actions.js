import * as types from './types';
import * as api from '../../api';

export const setFetching = (value) => {
    return {
        type: types.CHARACTERS_SET_FETCHING,
        value: value
    };
};

export const updateList = (list, total) => {
    return {
        type: types.CHARACTERS_UPDATE_LIST,
        list: list,
        total: total
    };
};

export const updateItem = (value) => {
    return {
        type: types.CHARACTERS_UPDATE_ITEM,
        value: value
    };
};

export const updateOffset = value => {
    return {
        type: types.CHARACTERS_UPDATE_OFFSET,
        value
    };
};

export const fetchCharactersList = () => {
    return async (dispatch, getState) => {
        const house = getState().house.item;
        if (!house) {
            return;
        }
        try {
            dispatch(setFetching(true));
            //const getCharacters = await api.
        } catch (e) {
            console.log('fetchCharactersList err: ', e.message);
        } finally {
            dispatch(setFetching(false));
        }
    }
}