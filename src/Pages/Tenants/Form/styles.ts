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
        width:100%;
               
    }
`;

export const InputGroup = styled.div`
    display:flex;
`;

export const HeaderForm = styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:50px; 

    >div{
        display: flex;
        align-items:center;
    }

    button{
            padding:10px 15px;
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
`;
