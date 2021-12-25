import React, { Component } from 'react'

import {  NavBar, Icon } from 'antd-mobile';
import './index.css'
export class Citylist extends Component {
    render() {
        return (
            <div className="barWrapper">
                 <NavBar
                  className="newBar"
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => this.props.history.go(-1)}>
                 
                     城市选择
                  </NavBar>
            </div>
        )
    }
}

export default Citylist
