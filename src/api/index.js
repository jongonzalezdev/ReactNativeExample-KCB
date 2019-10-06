import axios from 'axios';
import { BASE_URL } from '../config/api';
import qs from 'qs';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-type': 'application/json'},
})

// HOUSES
export const getHouses = () => {
    const url = '/casas';
    return instance.get(url);
}

// CHARACTERS
export const getCharacters = (params) => {
    const paramsStringify = qs.stringify(params, { skipNulls: true });
    const url = `/personajes?${paramsStringify}`;
    return instance.get(url);
};

/*
export const getHouses = () => {
    const url = '/Casas';
    return instance.get(url).then( res => {
        return res
    })
};
*/