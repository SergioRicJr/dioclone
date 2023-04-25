import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const Column = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-itens: center;
`

export const BuscarInputContainer = styled.div`
    width: 275px;
    height: 30px;
    background: #202037;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #ffffff;
    margin-height: 12px;
    text-decoration: none;
`

export const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #ffffff;
    margin-height: 12px;
    text-decoration: none;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #FFFFFF;
    margin-right: 12px;
`

export const Input = styled.input`
    background: transparent;
    height: 100%;
    flex: 1;
    border: 0;
    color: #FFFFFF;

    &:focus {
        outline: 0;
        box-shadow: 0;
    }
`

