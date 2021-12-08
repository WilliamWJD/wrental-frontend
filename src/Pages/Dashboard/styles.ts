import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-areas: 'h h'
                         'n m';
    grid-template-columns:200px 1fr;
    grid-template-rows: 100px calc(100vh - 100px);
    background-color: #ccc;

    nav{
        grid-area: n;
    }

    main{
        grid-area: m;
    }
`;