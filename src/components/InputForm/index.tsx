import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react"
import { FieldError } from "react-hook-form";

import { Container } from './styles';

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    error?: FieldError
}

const InputForm: ForwardRefRenderFunction<HTMLInputElement, InputFormProps> = ({ name, label, error, ...rest }, ref) => {
    return (
        <Container>
            <input name={name} ref={ref} {...rest} />
            {!!error && (
                <span>{error.message}</span>
            )}
        </Container>
    )
}

export const Input = forwardRef(InputForm)