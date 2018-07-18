import type from 'type'

const changeNum = (data) => ({
    type: type.page1.updateNum,
    data: data
})

export const uodateNum = () => (dispatch) => {
    dispatch(changeNum(1))
}