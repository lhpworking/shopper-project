import { message } from "antd";
import { useMemo } from "react";
import { generatePath, Link } from "react-router-dom";
import { PRODUCT_DETAIL_PATH } from "../constants/path";
import accountServices from "../services/accountService";
import { currency } from "../utils/currency";


export default function ProductCard({ real_price, price, name, brand_name, images, slug, thumbnail_url, _id }) {
    const productDetailPath = useMemo(() =>
        generatePath(PRODUCT_DETAIL_PATH, { slug }), [slug])
    const addWishList = async () => {
        await accountServices.addWishList(_id)
        message.success('Product has been added to your WishList', 1);

    }
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
                    <Link className="card-img-hover" to={ productDetailPath }>
                        <img className="card-img-top card-img-back" src={ images?.[1]?.thumbnail_url || images?.[0]?.thumbnail_url } alt={ name } />
                        <img className="card-img-top card-img-front" src={
                            images?.[0]?.thumbnail_url } alt={ name } />
                    </Link>
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
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button" onClick={ addWishList }>
                                <i className="fe fe-heart" />
                            </button>
                        </span>
                    </div>
                </div>
                {/* Body */ }
                <div className="card-body px-0">
                    {/* Category */ }
                    <div className="font-size-xs">
                        <Link className="text-muted" to={ productDetailPath }>{ brand_name && brand_name }</Link>
                    </div>
                    {/* Title */ }
                    <div className="font-weight-bold">
                        <Link className="text-body" to={ productDetailPath }>
                            { name }
                        </Link>
                    </div>
                    {/* Price */ }
                    <div className="font-weight-bold">
                        <span className="font-size-xs text-gray-350 text-decoration-line-through">{ currency(price) } </span>
                        <br />
                        <span className="text-primary">{ currency(real_price) }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
