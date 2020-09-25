import React, { Component } from 'react'
import Grid from 'components/grid/Grid'
import {get} from 'api/http'
import styled from 'styled-components'

const SubTitle = styled.p`
    font-weight:300;
    color:#666;
`

export default class Top10 extends Component {
    state = {
        datalist : [],
    }
    render() {
        return ( 
            <div>
                <h2>精品好菜</h2>
                <Grid column={2} 
                hasmore={false}
                list={this.state.datalist}
                renderTitle={(item)=>{
                    return(
                        <>
                        <p className="headerTitle">{item.name}</p>
                        <SubTitle className="subTitle">{item.all_click}{item.favorites}</SubTitle>
                        </>
                    )
                }}
                ></Grid>
            </div>
        )
    }

    async componentDidMount(){
        let rs = await get('/api/top10');
        this.setState({
            datalist : rs.data,
        })
    }
}
