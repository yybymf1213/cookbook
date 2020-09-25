import styled from 'styled-components'

const GridContainer = styled.div`
    ul{
        display:flex;
        flex-wrap:wrap;
        li{
            list-style:none;
            width:${(props)=>100 / props.column}%;
            padding:.1rem;
            img{
                width:100%;
                border-radius:${(props)=>props.imgRadius}rem;
            }
            p{
                text-align:center;
                 
            }
        }
        
        .hasmore{
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
`

export {
    GridContainer,
}