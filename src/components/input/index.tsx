import { Controller } from 'react-hook-form'
import {ErrorText ,IconContainer, InputContainer, InputText} from './styles'
import { IInput } from './types'

//tudo que sobrar de propriedade é jogada para esse rest
export default function Input({leftIcon, name, control, errorMessage, ...rest}: IInput) {
  return (
    <>
    <InputContainer>
        {leftIcon?(<IconContainer>{leftIcon}</IconContainer>): null}
        <Controller
          name={name}
          control={control}
          rules={{required: true}}
          render={({field: {value, onChange}})=> <InputText value={value} onChange={onChange} {...rest}/>}
        />
        {/* <InputText {...rest} ></InputText> */}
    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText>: null}
    </>
  )
}
