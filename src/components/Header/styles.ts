import styled  from "styled-components";

export const Container = styled.header`
    grid-area: h;
    background-color:#fff;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    height:100%;
    justify-content: space-between;
    margin: 0 40px;
`;

export const Logo = styled.div`
    display: flex;

    svg{
        margin-right:10px;
    }

    span{
        font-family: 'Sansita Swashed', sans-serif;
        font-size: 30px;
        color:#6C63FF;
    }

    strong{
        font-family: 'Sansita', sans-serif;
        font-size: 30px;
        color:#3F3D56;
    }
`;

export const Profile = styled.div`
    display:flex;
    align-items: center;
    cursor: pointer;

    img{
        width:66px;
        height:66px;
        border-radius: 50%;
        border:1px solid #6C63FF;
    }

    >div{
        display: flex;
        flex-direction: column;
        margin-right: 10px;

        strong{
            font-weight: 700;
            font-size:18px;
        }

        span{
            font-size:13px;
            color:#7F8C8D;
        }
    }
`;