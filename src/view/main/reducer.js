import { combineReducers } from 'redux'
import type from 'type'

export default combineReducers({
    groupNum: (state=1, action) => {
        switch (action.type) {
            case type.main.group_num:
                return action.data
            default:
                return state
        }
    }
})