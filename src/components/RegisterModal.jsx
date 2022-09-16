import { message } from "antd"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchRegister } from "../stores/authReducer"
import validate, { minMax, pattern, required } from "../utils/validate"
import Button from "./Button"
import Input from "./Input"
import { MessagesWrap } from "./LogInModal"

export default function RegisterModal() {
    const [register, setRegister] = useState({})
    const [error, setError] = useState({})
    const [messageErrRes, setMessageErrRes] = useState('')
    const dispatch = useDispatch()
    const { loadingRegister } = useSelector(store => store.auth)

    const onRegister = (e) => {
        e.preventDefault()

        const error = validate(register, {
            name: [
                required(" Name is required")
            ],
            username: [
                required("Email is required"),
                pattern("email", "Incorrect email format")

            ],
            password: [
                required("Password is required"),
                minMax(6, 32, "Password must have length between 6 and 32 characters")

            ],
            confirmPassword: [
                {
                    confirm: 'password',
                    message: "Wrong password"
                }

            ]

        })
        setError(error)
        if (Object.keys(error).length === 0) {
            setMessageErrRes('')
            dispatch(fetchRegister({
                data: register,
                success: () => {
                    message.success("success", 1)
                    // dispatch(fetchLogin({
                    //     data: {
                    //         username: register.username,
                    //         password: register.password

                    //     }
                    // }))
                },
                error: (err) => {
                    setMessageErrRes(err.error)
                }
            }))
        }
    }
    return (
        <div className="col-12 col-md-6">
            {/* Card */ }
            <div className="card card-lg">
                <div className="card-body">
                    {/* Heading */ }
                    <h6 className="mb-7">New Customer</h6>
                    {
                        messageErrRes && <MessagesWrap >
                            <p>{ messageErrRes }</p>
                        </MessagesWrap>
                    }

                    {/* Form */ }
                    <form onSubmit={ onRegister }>
                        <div className="row">
                            <div className="col-12">
                                {/* Email */ }
                                <Input
                                    label="Name *"
                                    placeholder="Name *"
                                    onChange={ e => register.name = e.target.value }
                                    error={ error.name }

                                />
                            </div>
                            <div className="col-12">
                                {/* Email */ }
                                <Input
                                    label="Email *"
                                    placeholder="Email *"
                                    onChange={ e => register.username = e.target.value }
                                    error={ error.username }

                                />
                            </div>
                            <div className="col-12 col-md-6">
                                {/* Password */ }
                                <Input
                                    label="Password *"
                                    placeholder="Password *"
                                    type="password"
                                    onChange={ e => register.password = e.target.value }
                                    error={ error.password }

                                />
                            </div>
                            <div className="col-12 col-md-6">
                                {/* Password */ }
                                <Input
                                    label="Confirm Password *"
                                    placeholder="Confirm Password *"
                                    type="password"
                                    onChange={ e => register.confirmPassword = e.target.value }
                                    error={ error.confirmPassword }

                                />
                            </div>
                            <div className="col-12 col-md-auto">
                                {/* Link */ }
                                <div className="form-group font-size-sm text-muted">
                                    By registering your details, you agree with our Terms &amp; Conditions,
                                    and Privacy and Cookie Policy.
                                </div>
                            </div>
                            <div className="col-12 col-md">
                                {/* Newsletter */ }
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="registerNewsletter" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="registerNewsletter">
                                            Sign me up for the Newsletter!
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Button */ }
                                <Button loading={ loadingRegister } handleFunc={ onRegister } type="submit">
                                    Register
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
