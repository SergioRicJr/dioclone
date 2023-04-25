import styled from "styled-components";
import { IColumn } from "./types";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Title = styled.h2`
    font-family: 'Open Sans';
    font-family: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleHighlight = styled.span`
    color: #E4105D;
`

export const TextContent = styled.p`
    font-family: 'Open-Sans';
    font-family: normal;
    font-weight: 400;
    font-size: 16px;
    width: 420px;
    margin-bottom: 20px;
    line-height: 22px;

    color: #FFFFFF;
`

//define o valor do flex como o flex passado como atributo da tag
export const Column = styled.div<IColumn>`
    flex: ${({flex})=> flex};
    padding-right: 70px;
`

export const ColumnMy = styled.div<IColumn>`
    flex: ${({flex})=> flex};
`