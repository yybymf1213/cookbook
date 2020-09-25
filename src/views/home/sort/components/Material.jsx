import React, { Component } from 'react'
import Sortlist from 'components/sortlist/Sortlist'

export default class Material extends Component {
    render() {
        return (
            <div>
                <Sortlist {...this.props}></Sortlist>
            </div>
        )
    }
}
