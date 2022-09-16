import { Skeleton } from "antd";
import { Link } from "react-router-dom";
import { SHOP_PATH } from "../constants/path";
import { useData } from "../hooks/useData";
import { productServices } from "../services/productServices";
import ProductCard from "./ProductCard";

export default function TopSellers() {
    const { data: products, loading } = useData(() => productServices.getProducts(), [])

    return (
        <section section className="py-12" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                        {/* Heading */ }
                        <h2 className="mb-4 text-center">Top month Sellers</h2>
                        {/* Nav */ }
                        {/* <div className="nav justify-content-center mb-10">
                            <a className="nav-link active" href="#topSellersTab" data-toggle="tab">Women</a>
                            <a className="nav-link" href="#topSellersTab" data-toggle="tab">Men</a>
                            <a className="nav-link" href="#topSellersTab" data-toggle="tab">Kids</a>
                        </div> */}
                    </div>
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="topSellersTab">
                        <div className="row">
                            {
                                loading ? [...Array(6)].map((_, i) =>
                                    <div key={ i } style={ { width: 350, marginBottom: 15, marginLeft: 15 } }>
                                        <Skeleton active={ loading } />
                                    </div>
                                ) :
                                    products && products.map((product, i) => {
                                        if (i < 6) return <ProductCard key={ i } { ...product } loading={ loading } />

                                    })
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* Link  */ }
                        <div className="mt-7 text-center">
                            <Link className="link-underline" to={ SHOP_PATH }>Discover more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
