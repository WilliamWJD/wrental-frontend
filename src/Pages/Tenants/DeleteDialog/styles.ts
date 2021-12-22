import styled from 'styled-components';

export const Content = styled.div``

export const HeaderModal= styled.div`
    border-bottom:1px solid #ddd;
    margin-bottom:15px;
    h1{
        font-size:25px;
        color:#3F3D56;
        margin-bottom:10px;
    }
`

export const ContentModal= styled.div`
    p{
        color:#7f8c8d;

        strong{
            font-weight: bold;
        }
    }
`

export const OptionsModal = styled.div`
    margin-top:20px;
    display:flex;
    justify-content: right;

    button{
        padding:10px 15px;
        color:#fff;
        font-weight: 700;
        border:none;
        border-radius: 5px;
        transition: filter 0.2s;
        
        &:hover{
            filter: brightness(0.9);
        }
    }

    .buttonYes{
        background-color:#27ae60;
        margin-right:5px;
    }

    .buttonNo{
        background-color:#e74c3c;
    }
`
