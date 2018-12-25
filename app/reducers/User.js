//
// Author: leafsoar
// Date: 2016-07-09 11:10:09
// 

'use strict';

import * as types from '../actions/actionTypes';

const initialState = {
	signs_info:null,
	user_info: null,
	products_info:null,
	wallet_list:null,
	wallet_info:null,


};

export default function user(state = initialState, action = {}) {
	// console.log(`reducers project: ${action.type}`);SET_PRODUCTS   SET_WALLET_LIST SET_WALLET_INFO
	switch(action.type) {
	case types.SET_USER_INFO:
		return Object.assign(
            {}, state,
            {user_info: action.data}
        );
	case types.SET_SIGNS:
		return Object.assign(
            {}, state,
            {signs_info: action.data}
        );
    case types.SET_PRODUCTS:
		return Object.assign(
            {}, state,
            {products_info: action.data}
        );	
    case types.SET_WALLET_LIST:
		return Object.assign(
            {}, state,
            {wallet_list: action.data}
        );
    case types.SET_WALLET_INFO:
		return Object.assign(
            {}, state,
            {wallet_info: action.data}
        );
	default:
		return state;
	}
}
