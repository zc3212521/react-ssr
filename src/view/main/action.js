import type from 'type'

const groupNum = (data) => ({
    type: type.main.group_num,
    data: data
})

const getGroupNum = () => (dispatch) => {
    dispatch(groupNum(10))
}

export default {
    getGroupNum
}