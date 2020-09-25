import React, { Component } from 'react'
import styled from 'styled-components'
// import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmapgl';
const LocationContainer = styled.div`
    width:100%;
    height:100%;
    iframe{
        width:100%;
        height:100%;
    }
`

export default class Location extends Component {
    render() {
        return (
            <LocationContainer>
                <iframe src="/location.html" title="location" frameBorder="0"></iframe>
            </LocationContainer>
        )
    }
}
