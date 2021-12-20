import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:50px;

    >div{
        h1{
            margin-bottom:10px;
        }
    }

    a{
        button{
            padding:10px 15px;
            background-color:#2980b9;
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