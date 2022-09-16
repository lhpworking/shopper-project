import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import styled from "styled-components"
import { ACCOUNT_PATH } from "../constants/path"
import { fetchLogin } from "../stores/authReducer"
import validate, { minMax, pattern, required } from "../utils/validate"
import Button from "./Button"
import Input from "./Input"


export const MessagesWrap = styled.div`
        background-color: #f5f5f5;
    & > p{
        color:red;
        text-align: center;
        padding: .5rem 0;
    }
`
export default function LogInModal() {
    const [login, setLogin] = useState({})
    const [error, setError] = useState({})
    const [errMessageLogin, setErrMessageLogin] = useState('')
    const dispatch = useDispatch()
    const { user } = useSelector(store => store.user)
    const { loadingLogin } = useSelector(store => store.auth)

    const onLogin = async (ev) => {
        ev.preventDefault()
        const error = validate(login, {
            username: [
                required("Email is required"),
                pattern("email", "Incorrect email format")
            ],
            password: [
                required("Password is required"),
                // pattern("password", "Incorrect password format")
                minMax(6, 32, 'Password must have length between 6 and 32 characters')
            ]
        })
        setError(error)
        if (Object.keys(error).length === 0) {
            setErrMessageLogin('')
            dispatch(fetchLogin({
                data: login,
                error: (error) => {
                    setErrMessageLogin(error.message)
                },
                success: () => {
                    alert("Success!")
                }
            }))
        }
    }
    if (user) {
        return < Navigate to={ ACCOUNT_PATH } />
    }

    return (
        <div className="col-12 col-md-6">
            {/* Card */ }
            <div className="card card-lg mb-10 mb-md-0">
                <div className="card-body">
                    {/* Heading */ }
                    <h6 className="mb-7">Returning Customer</h6>
                    {
                        errMessageLogin && <MessagesWrap>
                            <p>{ errMessageLogin }</p>
                        </MessagesWrap>
                    }
                    {/* Form */ }
                    <form >
                        <div className="row">
                            <div className="col-12">
                                {/* Email */ }
                                <Input
                                    placeholder="Enter your email *"
                                    label="Email"
                                    onChange={ ev => login.username = ev.target.value }
                                    error={ error.username }
                                />
                            </div>
                            <div className="col-12">
                                {/* Password */ }
                                <Input
                                    type="password"
                                    placeholder="Password *"
                                    label="Password"
                                    onChange={ ev => login.password = ev.target.value }
                                    error={ error.password }
                                />
                            </div>
                            <div className="col-12 col-md">
                                {/* Remember */ }
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="loginRemember" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="loginRemember">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-auto">
                                {/* Link */ }
                                <div className="form-group">
                                    <a className="font-size-sm text-reset" data-toggle="modal" href="#modalPasswordReset">Forgot
                                        Password?</a>
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Button */ }
                                <Button handleFunc={ onLogin } type="submit" loading={ loadingLogin }>
                                    Sign in
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
