import styled from 'styled-components';

export const Container = styled.table`
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

        svg{
            cursor:pointer;
            margin-right:3px;

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
`;