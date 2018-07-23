import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Button } from 'antd-mobile'

import { getGroupNum } from './action'

@connect(
    state => ({
        groupNum: state.main.groupNum
    }),
    { getGroupNum }
)
export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    goAjax = () => {

    }

    render() {
        return (
            <div>
                <div>小组成员 {this.props.groupNum} 人</div>
                <Link to="/page1">详情页</Link>
                <Button onClick={this.goAjax}>发送清气</Button>

            </div>

        )
    }
}