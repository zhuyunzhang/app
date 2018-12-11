
'use strict';

import * as types from './actionTypes';
import * as api from '../network/Api';

function setData(type, data) {
	return {
		type,
		data
	};
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
