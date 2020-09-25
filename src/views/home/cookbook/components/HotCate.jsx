import React, { Component } from 'react'
import Grid from 'components/grid/Grid'
import {get} from 'api/http'
import {withRouter} from 'react-router-dom'

class HotCate extends Component {
    state = {
        datalist : [],
    }
    render() {
        return (
            <div>
                <Grid
                itemClick={()=>{this.props.history.push('/list')}}
                hasmore={true} 
                list={this.state.datalist} 
                imgRadius={0.08} 
                column={4}
                renderTitle={(item)=>{
                    // console.log(item);
                    return <p>{item.title}</p>
                }}
                ></Grid>
            </div>
        )
    }
    async componentDidMount(){
        let rs = await get('/api/hotcat');
        // console.log(rs);
        this.setState({
            datalist : rs.data,
        })
    }
}

export default withRouter(HotCate)