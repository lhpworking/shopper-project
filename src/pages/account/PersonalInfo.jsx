import { DatePicker, message } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input";
import { userService } from "../../services/userService";
import { getUserInfo } from "../../stores/userReducer";
import validate, { minMax, required } from "../../utils/validate";

export default function PersonalInfo() {
    const { user } = useSelector(store => store.user)
    const [form] = useState(user)
    const [error, setError] = useState({})
    const dispatch = useDispatch()
    const updateUser = (e) => {
        e.preventDefault()
        const rule = {
            name: [
                required()
            ]
        }
        if (form.oldPassword) {
            rule.oldPassword = [
                required(),
                minMax(6, 32)
            ]
            rule.newPassword = [
                required(),
                minMax(6, 32),
                () => {
                    form.oldPassword === form.newPassword ? "Your new password is the same old password" : undefined
                }
            ]
        }
        const error = validate(form, rule)
        setError(error)

        if (Object.keys(error).length === 0) {
            const res = userService.updateUser(form);
            console.log(res);
            if (res.updateCount) {
                console.log(res.updateCount);
                message.success("Update successfully")
                dispatch(getUserInfo())
            }
        } 
    }
    return (
        <div>
            {/* CONTENT */ }
            <div className="row">
                <div className="col-lg-12 col-md-9 col-lg-8 ">
                    {/* Form */ }
                    <form onSubmit={ updateUser }>
                        <div className="row">
                            <div className="col-12">
                                {/* Email */ }
                                <Input
                                    className=""
                                    label="Full name "
                                    placeholder="Full name *"
                                    error={ error.name }
                                    onChange={ ev => form.name = ev.target.value }
                                    defaultValue={ form.name }
                                />
                            </div>
                            <div className="col-12">
                                {/* Email */ }
                                <Input
                                    className=""
                                    label="Email "
                                    placeholder="Email *"
                                    error={ error.email }
                                    onChange={ ev => form.email = ev.target.value }
                                    defaultValue={ form.email }
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                {/* Password */ }
                                <Input
                                    type="password"
                                    className=""
                                    label="Current Password "
                                    placeholder="Current Password *"
                                    error={ error.oldPassword }
                                    onChange={ ev => form.oldPassword = ev.target.value }
                                    defaultValue={ form.oldPassword }
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                {/* Password */ }
                                <Input
                                    type="password"
                                    className=""
                                    label="New Password "
                                    placeholder="New Password *"
                                    error={ error.newPassword }
                                    onChange={ ev => form.newPassword = ev.target.value }
                                    defaultValue={ form.newPassword }
                                />
                            </div>
                            <div className="col-12 col-lg-6">
                                {/* Birthday */ }
                                <div className="form-group ">
                                    {/* Label */ }
                                    <label>Date of Birth</label>
                                    {/* Inputs */ }
                                    <DatePicker className="form-control" size="large" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                {/* Gender */ }
                                <div className="form-group mb-8">
                                    <label>Gender</label>
                                    <div className="btn-group-toggle" data-toggle="buttons">
                                        <label className={ `btn btn-sm btn-outline-border ${user.gender === 'male' ? 'active' : ''}` }>
                                            <input type="radio" name="gender" checked={ user.gender === 'male' ? 1 : 0 } /> Male
                                        </label>
                                        <label className={ `btn btn-sm btn-outline-border ${user.gender === 'female' ? 'active' : ''}` } >
                                            <input type="radio" name="gender" checked={ user.gender === 'female' ? 1 : 0 } /> Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Button */ }
                                <button className="btn btn-dark" type="submit">Save Changes</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
