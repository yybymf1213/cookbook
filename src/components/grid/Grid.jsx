import React, { Component } from 'react'
import {GridContainer} from './Grid.style'

export default class Grid extends Component {
    static defaultProps = {
        renderTitle : ()=>{return null},
        imgRadius : 0,
        itemClick : ()=>{},
        list : [],
    }
    render() {
        let Title = this.props.renderTitle;
        return (
            <GridContainer {...this.props}>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <img src={item.img }
                                    onClick={()=>this.props.itemClick()}
                                    alt=""
                                    />
                                    <Title {...item}></Title>
                                </li>
                            )
                        })
                    }
                    {
                        this.props.hasmore ? <li className="hasmore">更多</li> : ''
                    }
                </ul>
            </GridContainer>
        )
    }
}
