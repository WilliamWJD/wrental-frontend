import styled, { css } from 'styled-components';

interface ContainerProps{
    isActive: boolean
}

export const Container = styled.div<ContainerProps>`
    display: grid;
    grid-template-areas: 'h h'
                         'n m';
    grid-template-columns:200px 1fr;
    grid-template-rows: 100px calc(100vh - 100px);
    background-color: #ccc;

    nav{
        grid-area: n;
        background: #fff;
        border-right:1px solid #F3F3F3;

        display: flex;
        justify-content:center;

        ul{
            margin-top:40px;

            li{
                margin-bottom: 30px;
                color:#2F2E41;
                font-size:18px;
                cursor:pointer;
                padding:10px 10px;
                
                display: flex;
                align-items: center;
                border-radius: 10px;

                >svg{
                    margin-right: 10px;
                }
  
                :first-child{
                    color:#fff;
                    background: #6C63FF;
                }
        
            }

            
            
        }
    }

    main{
        grid-area: m;
        background:#fff;
    }
`;