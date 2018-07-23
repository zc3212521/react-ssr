import React from 'react'
import { connect } from 'react-redux'

import {addNum, removeNum, obj} from '../main/action'

console.log(333, obj, addNum)

@connect(
    state => ({
        num: state.main.groupNum,
        page: state.page1.updateNum
    }),
    { addNum, removeNum }
)
export default class Page1 extends React.Component {
    constructor(props) {
        super(props)
    }

    add = () => {
        console.log(222,this.props)
        this.props.addNum()
    }

    remove = () => {
        this.props.removeNum()
    }
    render() {
        return (
            <div>
                <div>当前组员 {this.props.num}</div>
                <div>分页数字 {this.props.page}</div>
                <input type="button" value='+' onClick={this.add}/>
                <input type="button" value='-' onClick={this.remove}/>
            </div>
        )
    }
}