import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px;
    background: #fff;
    border-radius: 5px;

    &:not(:last-of-type) {
        margin-bottom: 50px;
    }
`;

export const Ships = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

export const Ship = styled.li`
    height: 150px;
    width: 280px;
    background: url(${ props => props.bg });
    background-size: cover;
    border-radius: 5px;

    &:not(:last-of-type) {
        margin-right: 10px;
    }
`;