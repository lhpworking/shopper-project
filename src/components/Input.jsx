import React, { useId } from 'react'
import styled from "styled-components"


const ErrorMessage = styled.p`
    color: red;
`
export default function Input({ type = "text", label, className = "sr-only", placeholder, onChange, error, defaultValue, ...props }) {
    const id = useId()

    return (
        <div className="form-group">
            <label className={ className } htmlFor={ id }>
                { label } *
            </label>
            <input className="form-control form-control-sm" id="loginEmail" type={ type } placeholder={ placeholder } onChange={ onChange } defaultValue={ defaultValue } />
            { error && <ErrorMessage>{ error }</ErrorMessage> }
        </div>
    )
}
