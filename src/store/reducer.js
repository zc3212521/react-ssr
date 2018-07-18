import { combineReducers } from 'redux'
import main from '../view/main/reducer'
import page1 from '../view/page1/reducer'

export default combineReducers({
    main,
    page1,
})