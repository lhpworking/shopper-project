import { Link } from "react-router-dom";
import { ACCOUNT_PAYMENT_EDIT_PATH } from "../../constants/path";

export default function Payment() {
    return (
        <div>
            {/* CONTENT */ }
            <div className="row">
                <div className="col-lg-12 col-md-9 col-lg-8">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            {/* Card */ }
                            <div className="card card-lg bg-light mb-8">
                                <div className="card-body">
                                    {/* Heading */ }
                                    <h6 className="mb-6">
                                        Debit / Credit Card
                                    </h6>
                                    {/* Text */ }
                                    <p className="mb-5">
                                        <strong>Card Number:</strong> <br />
                                        <span className="text-muted">4242 ∙∙∙∙ ∙∙∙∙ 7856 (Mastercard)</span>
                                    </p>
                                    {/* Text */ }
                                    <p className="mb-5">
                                        <strong>Expiry Date:</strong> <br />
                                        <span className="text-muted">Feb 2022</span>
                                    </p>
                                    {/* Text */ }
                                    <p className="mb-0">
                                        <strong>Name on Card:</strong> <br />
                                        <span className="text-muted">Daniel Robinson</span>
                                    </p>
                                    {/* Action */ }
                                    <div className="card-action card-action-right">
                                        {/* Button */ }
                                        <a className="btn btn-xs btn-circle btn-white-primary" href="account-payment-edit.html">
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
                            <Link className="btn btn-block btn-lg btn-outline-border" to={ ACCOUNT_PAYMENT_EDIT_PATH }>
                                Add Payment Method <i className="fe fe-plus" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
