import { useEffect, useRef, InputHTMLAttributes } from 'react'
import { useField } from '@unform/core'

import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props

export default function Input({ name, label, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <Container>
        <input
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />
        {error && <span>{error}</span>}
      </Container>

    </>
  )
}