import React from 'react'

const {Provider,Consumer:LocationConsumer} = React.createContext()

class LocationProvider extends React.Component{
    constructor(){
        super();
        let tmp = localStorage.getItem('showLocation') ? JSON.parse(localStorage.getItem('showLocation')) : true;
        this.state = {
            showLocation : tmp,
        }
    }
    changeShow(){
        this.setState({
            showLocation : !this.state.showLocation,
        },()=>{
            localStorage.setItem('showLocation',this.state.showLocation)
        })
    }
    render(){
        return(
            <Provider value={{
                showLocation : this.state.showLocation,
                changeShow : ()=>this.changeShow(),
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {
    LocationProvider,
    LocationConsumer,
}