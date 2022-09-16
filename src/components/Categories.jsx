import { Link } from "react-router-dom";
import { SHOP_PATH } from "../constants/path";

export default function Categories() {
    return (
        <section section >
            <div className="row no-gutters d-block d-lg-flex flickity flickity-lg-none" data-flickity="{&quot;watchCSS&quot;: true}">
                {/* Item */ }
                <div className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover" style={ { backgroundImage: 'url(https://source.unsplash.com/random/?ipad)' } }>
                    <div className="card bg-dark-5 bg-hover text-white text-center" style={ { minHeight: '470px' } }>
                        <div className="card-body mt-auto mb-n11 py-8">
                            {/* Heading */ }
                            <h1 className="mb-0 font-weight-bolder">
                                Ipad
                            </h1>
                        </div>
                        <div className="card-body mt-auto py-8">
                            {/* Button */ }
                            <Link className="btn btn-white stretched-link" to={ SHOP_PATH }>
                                Shop  <i className="fe fe-arrow-right ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Card */ }
                <div className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover" style={ { backgroundImage: 'url(https://source.unsplash.com/random/?book)' } }>
                    <div className="card bg-dark-5 bg-hover text-white text-center" style={ { minHeight: '470px' } }>
                        <div className="card-body mt-auto mb-n11 py-8">
                            {/* Heading */ }
                            <h1 className="mb-0 font-weight-bolder">
                                Book
                            </h1>
                        </div>
                        <div className="card-body mt-auto py-8">
                            {/* Button */ }
                            <Link className="btn btn-white stretched-link" to={ SHOP_PATH }>
                                Shop <i className="fe fe-arrow-right ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Card */ }
                <div className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover" style={ { backgroundImage: 'url(https://source.unsplash.com/random/?motorbike)' } }>
                    <div className="card bg-dark-5 bg-hover text-white text-center" style={ { minHeight: '470px' } }>
                        <div className="card-body mt-auto mb-n11 py-8">
                            {/* Heading */ }
                            <h1 className="mb-0 font-weight-bolder" >
                                Motorbike
                            </h1>
                        </div>
                        <div className="card-body mt-auto py-8">
                            {/* Button */ }
                            <Link className="btn btn-white stretched-link" to={ SHOP_PATH }>
                                Shop  <i className="fe fe-arrow-right ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
