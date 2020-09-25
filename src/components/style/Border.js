import styled from 'styled-components'

const Border = (Comp)=>{
    //固定写法
    return styled(Comp)`
        position:relative;
        &::before{
            content:"";
            position:absolute;
            top:0;
            left:0;
            border:solid 1px orange;
            height:100%;
            width:100%;
            border-radius:.2rem;
            transform-origin:0 0;
            @media (-webkit-min-device-pixel-ratio: 1.5){
                width:150%;
                height:150%;
                border-radius:.3rem;
                transform:scale(0.667);
            }
            @media (-webkit-min-device-pixel-ratio: 2){
                width:200%;
                height:200%;
                border-radius:.4rem;
                transform:scale(0.5);
            }
            @media (-webkit-min-device-pixel-ratio : 3){
                width:300%;
                height:300%;
                border-radius:.6rem;
                transform:scale(.333);
            }
        }
    `               
}

export default Border;