import styled from "styled-components";
import {IColumn} from '../feed/types'

export const Container = styled.main`
    max-width: 80%;

    display: flex;
    align-items: start;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 120px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-family: normal;
    font-weight: 700;
    font-size: 32px;
    width: 400px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const ColumnOne = styled.div<IColumn>`
    ${({flex})=> flex };
    padding-right: 20px;
`

export const ColumnTwo = styled.div<IColumn>`
    ${({flex})=> flex};
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-family: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubTitleLogin = styled.p`
    font-family: 'Open Sans';
    font-family: normal;
    font-weight: 400;
    font-size: 18px;
    width: 320px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const CaixaText = styled.p`
    width: 320px;
    margin-top: 20px;
`
