
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