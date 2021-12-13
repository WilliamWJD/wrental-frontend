import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100%;
    /* border:1px solid red; */
    padding:30px 80px;
    display: flex;
    flex-direction: column;
    /* align-items:center; */

    >div{
        display: flex;
        align-items:center;

        svg{
            margin-right:10px;
        }
    }

    h1{
        color:#3F3D56;
    }

    form{
        width:700px;
        max-width:700px;
        margin-top:50px;

        button{
            width:100%;
            height:47px;
            background-color:#04D361;
            color:#fff;
            font-weight: 700;
            border:none;
            border-radius: 8px;
            margin-top:10px;
            transition: filter 0.2s;
            
            &:hover{
                filter: brightness(0.9);
            }
        }
    }
`;

export const InputGroup = styled.div`
    display:flex;
`;
