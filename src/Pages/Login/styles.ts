import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    height:100vh;
    background-color: #ECF0F1;

    display:flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width:100%;
    max-width:1184px;
    margin:20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img{
        width:543px;
        height:490px;
    }

    @media(max-width: 1044px){
        align-items: center;

        img{
            width:443px;
            height:390px;
            margin-right:50px;
        }
    }

    @media(max-width: 904px){
        flex-direction: column;

        img{
            display:none;
        }
    }
`;

export const Form = styled.form`
    width: 100%;
    max-width: 409px;
    display:flex;
    flex-direction: column;
    background-color:#fff;
    border-radius: 20px;
    padding: 60px 40px;

    box-shadow: 9px 10px 5px -7px rgba(215,215,215,0.75);
    -webkit-box-shadow: 9px 10px 5px -7px rgba(215,215,215,0.75);
    -moz-box-shadow: 9px 10px 5px -7px rgba(215,215,215,0.75);

    h1{
        font-size:28px;
        color:#2F2E41;
        line-height: 30px;
        margin-bottom:52px;
        font-family: 'Ubuntu';
    }

    input{
        width:100%;
        height:47px;
        background-color: #FAFAFC;
        border-radius: 8px;
        border:1px solid #E6E6F0;
        margin-bottom:10px;
        padding: 0 20px;
        font-size:14px;

        ::placeholder{
            color:#9C98A6;
        }
    }

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

    a{
        margin-top:12px;
        font-size:14px;
        font-weight: 700;
        color:#6C63FF;
        align-self: center;
    }
`;

