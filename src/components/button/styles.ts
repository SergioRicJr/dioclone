import styled, { css } from "styled-components";
//css vem do styled components
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 70%;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }

    
    ${
        //da pra passar funcoes dentro da template string, usando props nessa
        // (props)=> 
        //se essa condição for atendida, esse css vai ser aplicado
        //obs: & se refere ao proprio elemento
        ({variant}) => variant !== 'primary' && css`
            min-width: 167px;
            height: 33px;

            background: #E41050;

            &::after{
                content: '';
                position: absolute;
                border: 1px solid #E41050;
                top: -5px;
                left: -6px;
                width: calc(100% + 10px);
                height: calc(100% + 10px );
                border-radius: 22px;
            }
        `
    }
`