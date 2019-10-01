import * as types from './types';
import * as api from '../../api';
import _ from 'lodash';

// Acción pura de Redux
export const setFetching = (value) => {
    return {
        type: types.HOUSES_SET_FETCHING,
        value: value
    };
};

export const updateList = (value) => {
    return {
        type: types.HOUSES_UPDATE_LIST,
        value: value
    };
};

export const updateItem = (value) => {
    return {
        type: types.HOUSES_UPDATE_ITEM,
        value: value
    };
};

// Acción de Redux-thunk
export const fetchHousesList = () => {
    return async (dispatch, getState) => {
        try {
            // GET HOUSES LIST FROM API
            dispatch(setFetching(true));
            const getHouses = await api.getHouses();
            const houses = _.get(getHouses, 'data.records', []);

            // DISPATCH ACTION TO UPDATE VALUE IN REDUCER
            dispatch(updateList(houses));
        } catch(e) {
            console.log('fetchHousesList err: ', e.message);
        } finally {
            dispatch(setFetching(false));
        }
    }
}