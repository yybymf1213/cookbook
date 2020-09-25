import React, { Component } from 'react'
import HeaderBar from 'components/headerbar/HeaderBar'
import Swiper from './components/Swiper'
import Search from 'components/search/Search'
import HotCate from './components/HotCate'
import Top10 from './components/Top10'

export default class Cookbook extends Component {
    render() {
        return (
            <div>
                <HeaderBar>菜谱大全</HeaderBar>
                <Swiper></Swiper>
                <Search hasBorder={true} 
                inputBg='#ffffff'
                containerBg='#f5f5f5'
                placeholder="想吃什么，搜这里，如：川菜"></Search>
                <HotCate></HotCate>
                <Top10></Top10>
            </div>
        )
    }
}
