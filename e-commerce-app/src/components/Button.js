import styled from 'styled-components';




export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1rem;
    color: ${props => props.detailsCartBtnBlue ? '#09a' : props.detailsCartBtnGreen ? 'var(--favouriteGreen)' : '#ddd'}
    background: transparent;
    border: 0.05rem solid var(--mainWhite);
    border-color: ${props => props.detailsCartBtnBlue ? '#09a' : props.detailsCartBtnGreen ? 'var(--favouriteGreen)' : 'var(--mainWhite)'};
    border-radius: 0.2rem;
    padding: 0.3rem 0.5rem;
    margin: 0.2rem;
    transition: all 0.5s ease-in-out;
    &:hover {
        background: ${props => props.detailsCartBtnBlue ? '#09a' : '#096'};
        color: #eee;
        letter-spacing: 0.01rem;
    }
    &:focus {
        outline: none;
    }
`;

