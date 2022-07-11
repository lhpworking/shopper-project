
export default function ProductCard({ price, price_usd, name, brand_name, thumbnail_url }) {
    return (
        <div className="col-6 col-md-4">
            {/* Card */ }
            <div className="card mb-7">
                {/* Badge */ }
                <div className="badge badge-dark card-badge card-badge-left text-uppercase">
                    Sale
                </div>
                {/* Image */ }
                <div className="card-img">
                    {/* Image */ }
                    <a className="card-img-hover" href="product.html">
                        <img className="card-img-top card-img-back" src={ thumbnail_url } alt="..." />
                        <img className="card-img-top card-img-front" src={ thumbnail_url } alt="..." />
                    </a>
                    {/* Actions */ }
                    <div className="card-actions">
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                                <i className="fe fe-eye" />
                            </button>
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-shopping-cart" />
                            </button>
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-heart" />
                            </button>
                        </span>
                    </div>
                </div>
                {/* Body */ }
                <div className="card-body px-0">
                    {/* Category */ }
                    <div className="font-size-xs">
                        <a className="text-muted" href="shop.html">{ brand_name }</a>
                    </div>
                    {/* Title */ }
                    <div className="font-weight-bold">
                        <a className="text-body" href="product.html">
                            { name }
                        </a>
                    </div>
                    {/* Price */ }
                    <div className="font-weight-bold">
                        <span className="font-size-xs text-gray-350 text-decoration-line-through">{ price } vnd</span>
                        <br />
                        <span className="text-primary">${ price_usd }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
