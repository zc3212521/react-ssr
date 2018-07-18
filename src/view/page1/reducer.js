import { combineReducer } from 'redux'

import type from 'type'

export default combineReducer({
    updateNum: (state=0, action) => {
        switch (action.type) {
            case type.page1.add_num:
                return state + action.data
            case type.page1.remove_num:
                return state - action.data
            default:
                return state
        }
    }
})
