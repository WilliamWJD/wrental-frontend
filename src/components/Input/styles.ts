import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom:10px;
    display: flex;
    flex-direction:column;

    > span{
        margin-top:5px;
        margin-left:2px;
        font-size:0.8rem;
        color: #e74c3c;
    }

    input{
        width:100%;
        height:47px;
        background-color: #FAFAFC;
        border-radius: 8px;
        border:1px solid #E6E6F0;
        padding: 0 20px;
        font-size:14px;

        ::placeholder{
            color:#9C98A6;
        }
    }
`;