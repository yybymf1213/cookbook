import React, { Component } from 'react'
import {SearchContainer,InputContainer,InputBorderContainer} from './Search.style'



export default class Search extends Component {
    render() {
        let Input = this.props.hasBorder ? InputBorderContainer : InputContainer;
        return (
            <SearchContainer {...this.props}>
                <Input {...this.props}>
                    <i></i>
                    
                    <input type="text" placeholder={this.props.placeholder}/>
                </Input>
            </SearchContainer>
        )
    }
}
