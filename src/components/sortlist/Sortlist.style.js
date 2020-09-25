import styled from 'styled-components'

const SortlistContainer = styled.div`
    display:flex;
    div:first-child{
        width:1.85rem;
        background:#f3f3f3;
        ul{
            min-height:10.5rem;
            li{
                line-height:.9rem;
                text-align:center;

            }
            .active{
                background:#fff;
                color:#c7835c;
                position:relative;
                &::before{
                    content:"";
                    position:absolute;
                    bottom:0;
                    width:.56rem;
                    left:.6rem;
                    height:.02rem;
                    background:orange;
                    pointer-events:none;
                }
            }
        }
    }
    div:last-child{
        flex:1;
        background:#fff;
        ul{
            display:flex;
            flex-wrap:wrap;
            li{
                list-style:none;
                width:33%;
                height:.85rem;
                line-height:.85rem;
                text-align:center;
            }
        }
    }

`

export default SortlistContainer