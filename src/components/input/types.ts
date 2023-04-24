import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";


export interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
    leftIcon?: React.ReactNode,
    name: string,
    control: any,
    errorMessage: string | undefined
}