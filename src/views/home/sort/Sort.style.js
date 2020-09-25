import styled from 'styled-components'

const UlContainer = styled.ul`
    width:2.85rem;
    height:.6rem;
    border-radius:.3rem;
    font-size:.3rem;
    display:flex;
    justify-content:center;
    align-items:center;
    border:solid .01rem #fff;
    margin:.08rem;
    position:relative;
    li{
        list-style:none;
        flex:1;
        color:#fff;
        z-index:1;
    }
    .active{
        color:#ee7432;
    }
    &::before{
        content:"";
        left:0;
        top:0;
        width:50%;
        height:100%;
        background:#fff;
        border-radius:.3rem;
        position:absolute;
        transition:all .3s;
    }
    &.left::before{
        transform:translateX(0);
    }
    &.right::before{
        transform:translateX(100%);
    }

`

export default UlContainer