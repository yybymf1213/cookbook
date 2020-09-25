import styled from 'styled-components'
import searchIcon from 'assets/images/search.png'
import Border from 'components/style/Border'

const SearchContainer = styled.div`
    height : 1.3rem;
    background:${(props)=>props.containerBg};
    display:flex;
    justify-content:center;
    align-items:center;


`
const InputContainer = styled.div`
    width:90%;
    height : .83rem;
    border-radius : .2rem;
    display:flex;
    background:${(props)=>props.inputBg};
    justify-content:center;
    align-items:center;
        i{
            width:.3rem;
            height:.3rem;
            background:url(${searchIcon});
            background-size:cover;
            display:inline-block;
        }
        input{
            border:none; 
            width:65%;
            height:98%;
            z-index:100;
            background:${(props)=>props.inputBg};
            &::placeholder{
                color:#666;
            }
        }
`
const InputBorderContainer = Border(InputContainer);

export {
    SearchContainer,
    InputContainer,
    InputBorderContainer
}