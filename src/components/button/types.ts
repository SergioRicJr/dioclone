import React from "react"

interface IButton {
    title?: string,
    variant?: string,
    onClick?: () => void,
    children: React.ReactNode,
    type?: string
}

interface IButtonStyled {
    variant: string
}

export {IButton, IButtonStyled}