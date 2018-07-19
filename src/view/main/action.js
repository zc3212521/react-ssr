import type from 'type'

export const addNum = () => dispatch => {
    dispatch({
        type: type.page1.add_num,
    })
}

export const removeNum = () => dispatch => {
    dispatch({
        type: type.page1.remove_num,
    })
}
