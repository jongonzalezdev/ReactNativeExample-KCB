import * as types from './types';
import * as api from '../../api';
import _ from 'lodash';

const LIMIT = 8;
export const setFetching = value => {
    return {
        type: types.CHARACTER_SET_FETCHING,
        value,
    };
};

export const updateList = (list, total) => {
    return {
        type: types.CHARACTERS_UPDATE_LIST,
        list: list,
        total: total,
    };
};

export const updateItem = value => {
    return {
        type: types.CHARACTERS_UPDATE_ITEM,
        value,
    };
};

export const updateOffset = value => {
    return {
        type: types.CHARACTERS_UPDATE_OFFSET,
        value,
    };
};

export const initCharactersList = () => {
    return async dispatch => {
        dispatch(updateList([], 0));
        dispatch(updateOffset(0));
        dispatch(fetchCharactersList());
    };
};

export const updateCharactersListOffset = () => {
    return async (dispatch, getState) => {
        const { offset } = getState().characters;
        const newOffset = offset + LIMIT;
        dispatch(updateOffset(newOffset));
        dispatch(fetchCharactersList());
    };
};

export const fetchCharactersList = () => {
    return async (dispatch, getState) => {
        const house = getState().houses.item;
        if (!house) {
            return;
        }

        try {
            dispatch(setFetching(true));
            const { offset, list } = getState().characters;
            const params = { casa: _.get(house, 'id'), offset, limit: LIMIT };
            const getCharactersRes = await api.getCharacters(params);

            // ALL REDUCER LIST ELEMENTS + NEW LIMIT (8) ELEMENTS
            const newList = [...list, ..._.get(getCharactersRes, 'data.records', [])];
            const total = parseInt(_.get(getCharactersRes, 'data.total', 0));

            dispatch(updateList(newList, total));
        } catch (e) {
            console.log('fetchCharactersList e: ', e.message);
        } finally {
            dispatch(setFetching(false));
        }
    };
};