import React, { Component } from 'react'
import { Switch } from 'antd-mobile'
import {LocationConsumer} from 'context/LocationContext'

export default class More extends Component {
    render() {
        return(
            <LocationConsumer>
                {
                    ({showLocation,changeShow})=>{
                    return(
                        <div>
                            <Switch checked={showLocation} onChange={()=>changeShow()}>

                            </Switch>
                        </div>
                    )  
                    }
                }
            </LocationConsumer>
        )
    }
}
