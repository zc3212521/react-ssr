import { combineReducers } from 'redux'
import type from 'type'

export default combineReducers({
    groupNum: (state=1, action) => {
        switch (action.type) {
            case type.main.group_num:
                return action.data
            case type.page1.add_num:
                return state + 1
            case type.page1.remove_num:
                return state - 1
            default:
                return state
        }
    }
})