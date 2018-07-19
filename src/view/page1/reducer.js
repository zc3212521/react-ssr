import { combineReducers } from 'redux'

import type from 'type'

export default combineReducers({
    updateNum: (state=10, action) => {
        console.log(666, state)
        switch (action.type) {
            case type.page1.add_num:
                return state + 1
            case type.page1.remove_num:
                return state - 1
            default:
                return state
        }
    }
})
