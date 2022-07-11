import { Link } from "react-router-dom";
import NavAccount from "../../components/NavAccount";
import { ACCOUNT_ADDRESS_EDIT_PATH } from "../../constants/path";

export default function Address() {
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
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    {/* Card */ }
                                    <div className="card card-lg bg-light mb-8">
                                        <div className="card-body">
                                            {/* Heading */ }
                                            <h6 className="mb-6">
                                                Shipping Address
                                            </h6>
                                            {/* Text */ }
                                            <p className="text-muted mb-0">
                                                Daniel Robinson <br />
                                                3997 Raccoon Run <br />
                                                Kingston <br />
                                                45644 <br />
                                                United States <br />
                                                6146389574
                                            </p>
                                            {/* Action */ }
                                            <div className="card-action card-action-right">
                                                {/* Button */ }
                                                <a className="btn btn-xs btn-circle btn-white-primary" href="account-address-edit.html">
                                                    <i className="fe fe-edit-2" />
                                                </a>
                                                {/* Button */ }
                                                <button className="btn btn-xs btn-circle btn-white-primary">
                                                    <i className="fe fe-x" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    {/* Card */ }
                                    <div className="card card-lg bg-light mb-8">
                                        <div className="card-body">
                                            {/* Heading */ }
                                            <h6 className="mb-6">
                                                Billing Address
                                            </h6>
                                            {/* Text */ }
                                            <p className="text-muted mb-0">
                                                Daniel Robinson <br />
                                                3997 Raccoon Run <br />
                                                Kingston <br />
                                                45644 <br />
                                                United States <br />
                                                6146389574
                                            </p>
                                            {/* Action */ }
                                            <div className="card-action card-action-right">
                                                {/* Button */ }
                                                <a className="btn btn-xs btn-circle btn-white-primary" href="account-address-edit.html">
                                                    <i className="fe fe-edit-2" />
                                                </a>
                                                {/* Button */ }
                                                <button className="btn btn-xs btn-circle btn-white-primary">
                                                    <i className="fe fe-x" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* Button */ }
                                    <Link className="btn btn-block btn-lg btn-outline-border" to={ ACCOUNT_ADDRESS_EDIT_PATH }>
                                        Add Address <i className="fe fe-plus" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
