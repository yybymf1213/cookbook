import React, { Component } from 'react'
import './HeaderBar.style.css'

export default class HeaderBar extends Component {
    render() {
        return (
            <div className="headerbar">
                {
                    this.props.children
                }
            </div>
        )
    }
}
