import styled from 'styled-components';

export const Container = styled.div`
    padding:30px 80px;

    h1{
        color:#3F3D56;
    }

    span{
        color:#7f8c8d;
        margin-top:5px;
    }

    table{
        width:100%;
        margin-top:50px;
        

        th{
            font-size:18px;
            color:#3F3D56;
        }

        td{
            padding:15px 0;
            text-align:center;
            color:#7f8c8d;
            border-bottom:1px solid #ddd;

            >a{
                margin-right:3px;
            }

            svg{
                cursor:pointer;

                :last-child{
                    margin-right:0;
                }

                &:hover{
                    filter: brightness(0.9);
                }
            }

            >div{
                border: 1px solid #e74c3c;
                padding:5px 2px;
                border-radius:10px;
                color:#e74c3c;
            }
        }
    }
`;

export const LoadingContainer = styled.div`
    height:100%;
    display: flex;
    justify-content:center;
    align-items:center;
`;

export const SearchInput = styled.div`
    width:100%;
    display: flex;
    align-items:center;
    border:1px solid #ddd;
    padding:10px 15px;
    border-radius:10px;

    input{
        width:100%;
        border:none;
        margin-left:10px;
        outline:none;
    }
`;