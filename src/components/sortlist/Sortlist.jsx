import React, { Component } from 'react'
import SortlistContainer from './Sortlist.style'

export default class Sortlist extends Component {
    state = {
        currentIndex : 0,
        defaultItem : this.props.default,
    }
    menuClick(n,h){
        this.setState({
            currentIndex : n,
            defaultItem : h
        })
    }
    render() {
        let menus = Object.keys(this.props.dataview);
        let key = menus[0] || this.props.default;
        let list = this.props.dataview[key];
        return (
            <SortlistContainer>
                <div>
                    <ul>
                        {
                            menus && menus.map((val,index)=>{
                                return (
                                <li key={index} onClick={()=>this.menuClick(index,val)} className={this.state.currentIndex === index ? 'active' : ''}>{val}</li>
                                )
                            })
                            
                        }
                    </ul>
                </div>

                {/* 右侧——分类详细信息 */}
                <div>
                    <ul>
                        {
                            list && list.map((val,index)=>{
                                return (
                                    <li key={index}>{val}</li>
                                )
                            })
                        }
                    </ul>
                    
                </div>
            </SortlistContainer>
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    // }
}
