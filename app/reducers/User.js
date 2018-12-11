//
// Author: leafsoar
// Date: 2016-07-09 11:10:09
// 

'use strict';

import * as types from '../actions/actionTypes';

const initialState = {
	user_info: null
};

export default function user(state = initialState, action = {}) {
	// console.log(`reducers project: ${action.type}`);
	switch(action.type) {
	case types.SET_USER_INFO:
		return Object.assign(
            {}, state,
            {user_info: action.data}
        );
	default:
		return state;
	}
}
