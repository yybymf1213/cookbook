import React, { Component } from 'react'
import HeaderBar from 'components/headerbar/HeaderBar'
import UlContainer from './Sort.style'
import Search from 'components/search/Search'
import Classify from './components/Classify'
import Material from './components/Material'
import {get} from 'api/http'
import {
    Route,
    withRouter,
    Redirect,
    Switch
    
} from 'react-router-dom'

class Sort extends Component {
    state = {
        dir : 'left',
        classifylist : {},
        materiallist : {},
    }
    // 控制分类或样式
    changeSort(str){
        this.setState({
            dir : str
        },()=>{
            if(this.state.dir === 'left'){
                this.props.history.push("/home/sort/classify")
            }else{
                this.props.history.push("/home/sort/material");
            }
        })
    }
    render() {
        return (
            <div>
                <HeaderBar>
                    <UlContainer className={this.state.dir}>
                        <li onClick={()=>this.changeSort('left')} className={this.state.dir === 'left' ? 'active' : ''}>分类</li>
                        <li onClick={()=>this.changeSort('right')} className={this.state.dir === 'right' ? 'active' : ''}>食材</li>
                    </UlContainer>
                </HeaderBar>
                <Search hasBorder={true} 
                inputBg='#efefef'
                containerBg='#fff'
                placeholder="想吃什么，搜这里，如：猪排骨"></Search>
                <Switch>
                    <Route path="/home/sort/classify">
                        <Classify dataview={this.state.classifylist}></Classify>
                    </Route>
                    <Route path="/home/sort/material">
                        <Material dataview={this.state.materiallist}></Material>
                    </Route>
                    <Redirect exact to="/home/sort/classify" from="/home/sort"></Redirect>
                </Switch>
            </div>
        )
    }
    async componentDidMount(){
        let rs = await get('api/categorylist');
        this.setState({
            classifylist : rs.data.category,
            materiallist : rs.data.material,
        })
    }
}

export default withRouter(Sort)
