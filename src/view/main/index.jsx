import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getGroupNum } from './action'

@connect(
    state => ({
        groupNum: state.main.groupNum
    }),
    { getGroupNum }
)
export default class App extends React.Component {
    render() {
        return (
            <div>
                <div>小组成员 {this.props.groupNum} 人</div>
                <Link to="/page1">详情页</Link>
            </div>

        )
    }
}