import React from 'react'
import { connect } from 'react-redux'

import { updateNum } from './action'

@connect(
    state => ({
        num: state.main.groupNum,
    }),
    { updateNum }
)
export default class Page1 extends React.Component {
    render() {
        return (
            <div>当前组员 </div>

        )
    }
}