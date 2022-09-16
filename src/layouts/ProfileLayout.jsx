import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import NavAccount from '../components/NavAccount'
import { AUTH_PATH } from '../constants/path'

export default function ProfileLayout() {
    const { user } = useSelector(store => store.user)
    if (!user) return <Navigate to={ AUTH_PATH } />

   
    return (
        <div>
            {/* BREADCRUMB */ }
            <nav className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Breadcrumb */ }
                            <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
                                <li className="breadcrumb-item">
                                    <a className="text-gray-400" href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item active">
                                    My Account
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </nav>
            {/* CONTENT */ }
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            {/* Heading */ }
                            <h3 className="mb-10">My Account</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            {/* Nav */ }
                            <NavAccount />
                        </div>
                        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
