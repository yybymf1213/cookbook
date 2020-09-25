import React, { Component } from 'react'
import Sortlist from 'components/sortlist/Sortlist'

export default class Classify extends Component {
    render() {
        return (
            <div>
                <Sortlist {...this.props}></Sortlist>
            </div>
        )
    }
}
