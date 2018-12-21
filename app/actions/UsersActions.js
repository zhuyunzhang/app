
'use strict';

import * as types from './actionTypes';
import * as api from '../network/Api';

function setData(type, data) {
	return {
		type,
		data
	};
};

function setSigns(type,data) {
    return{ 
        type,
        data
    }
}

function setProducts(type,data) {
    return{ 
        type,
        data
    }
}
export const UserInfo = (id, params, callback) => {
    return (dispatch, getState) => {
        return (async () => {
            try {
            	dispatch(setData(types.SET_USER_INFO, null));
                var data = await api.UserInfo(10001, params, callback);
                dispatch(setData(types.SET_USER_INFO, data));
            } catch (e) {
                console.log('err ==== ' + JSON.stringify(e));
            }
        })();
    };
};
//GetSignes
export const GetSignes = (id, callback) => {
    return (dispatch, getState) => {
        return (async () => {
            try {
                dispatch(setSigns(types.SET_SIGNS, null));
                var data = await api.GetSignes(id, callback);
                dispatch(setSigns(types.SET_SIGNS, data));
            } catch (e) {
                console.log('err ==== ' + JSON.stringify(e));
            }
        })();
    };
};
//GetProducts

export const GetProducts = (id, callback) => {
    return (dispatch, getState) => {
        return (async () => {
            try {
                dispatch(setProducts(types.SET_PRODUCTS, null));
                var data = await api.GetProducts(id, callback);
                dispatch(setProducts(types.SET_PRODUCTS, data));
            } catch (e) {
                console.log('err ==== ' + JSON.stringify(e));
            }
        })();
    };
};