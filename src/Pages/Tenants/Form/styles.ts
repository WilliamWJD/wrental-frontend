import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100%;
    /* border:1px solid red; */
    padding:80px;
    display: flex;
    flex-direction: column;
    align-items:center;
`;

export const InputGroup = styled.div`
    display:flex;
`;

export const Content = styled.div`
    width:100%;
    max-width:1280px;
    display: flex;
    flex-direction:column;
    background: #FCFCFC;

    form{
        width:100%;
        padding:40px;

        button{
            padding:10px 15px;
            background-color:#27ae60;
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

export const HeaderContent = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    padding:20px 30px;
    border-bottom:2px solid #6C63FF;

    svg{
        margin-right:10px;
    }

    h1{
        color:#3F3D56;
        font-size:20px;
    }

   
`;
