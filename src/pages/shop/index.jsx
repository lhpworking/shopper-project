import { Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { A11y, Navigation, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoryShop from "../../components/CategoryShop";
import Pagination from "../../components/Pagination";
import ProductCard from "../../components/ProductCard";
import { HOME_PATH } from "../../constants/path";
import { useData } from "../../hooks/useData";
import { usePage } from "../../hooks/usePage";
import { productServices } from "../../services/productServices";



export default function Shop() {
    let currentPage = usePage()
    const { category } = useParams()
    const { data: products, paginate, loading } = useData(() =>
        productServices.getProducts(`?page=${currentPage}${category ? `&categories=${category}` : ''}`), [currentPage, category])
    const { categories, loadingCategory } = useSelector(store => store.product)
    console.log(categories?.data);

    return (
        <div>
            {/* CONTENT */ }
            <section className="py-11">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-3">
                            {/* Filters */ }
                            <CategoryShop />
                        </div>
                        <div className="col-12 col-md-8 col-lg-9">
                            {/* Slider */ }
                            <Swiper
                                modules={ [Navigation, Pagination, Scrollbar, A11y] }
                                spaceBetween={ 50 }
                                slidesPerView={ 1 }
                                navigation
                                pagination={ { clickable: true } }
                                scrollbar={ { draggable: true } }
                                onSwiper={ (swiper) => console.log(swiper) }
                                onSlideChange={ () => console.log('slide change') }
                            >
                                <SwiperSlide> <div className="w-100">
                                    <div className="card bg-h-100 bg-left" style={ { backgroundImage: 'url(/img/covers/cover-24.jpg)' } }>
                                        <div className="row" style={ { minHeight: '400px' } }>
                                            <div className="col-12 col-md-10 col-lg-8 col-xl-6 align-self-center">
                                                <div className="card-body px-md-10 py-11">
                                                    {/* Heading */ }
                                                    <h4>
                                                        2019 Summer Collection
                                                    </h4>
                                                    {/* Button */ }
                                                    <a className="btn btn-link px-0 text-body" href="shop.html">
                                                        View Collection <i className="fe fe-arrow-right ml-2" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-2 col-lg-4 col-xl-6 d-none d-md-block bg-cover" style={ { backgroundImage: 'url(/img/covers/cover-16.jpg)' } } />
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide><div className="w-100">
                                    <div className="card bg-cover" style={ { backgroundImage: 'url(/img/covers/cover-29.jpg)' } }>
                                        <div className="row align-items-center" style={ { minHeight: '400px' } }>
                                            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                                                <div className="card-body px-md-10 py-11">
                                                    {/* Heading */ }
                                                    <h4 className="mb-5">Get -50% from Summer Collection</h4>
                                                    {/* Text */ }
                                                    <p className="mb-7">
                                                        Appear, dry there darkness they're seas. <br />
                                                        <strong className="text-primary">Use code 4GF5SD</strong>
                                                    </p>
                                                    {/* Button */ }
                                                    <a className="btn btn-outline-dark" href="shop.html">
                                                        Shop Now <i className="fe fe-arrow-right ml-2" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide><div className="w-100">
                                    <div className="card bg-cover" style={ { backgroundImage: 'url(/img/covers/cover-30.jpg)' } }>
                                        <div className="row align-items-center" style={ { minHeight: '400px' } }>
                                            <div className="col-12">
                                                <div className="card-body px-md-10 py-11 text-center text-white">
                                                    {/* Preheading */ }
                                                    <p className="text-uppercase">Enjoy an extra</p>
                                                    {/* Heading */ }
                                                    <h1 className="display-4 text-uppercase">50% off</h1>
                                                    {/* Link */ }
                                                    <a className="link-underline text-reset" href="shop.html">Shop Collection</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <div class="swiper-pagination"></div>

                            </Swiper>

                            {/* Header */ }
                            <div className="row align-items-center mb-7 women-clo" >
                                <div className="col-12 col-md">
                                    {/* Heading */ }
                                    {
                                        category ? "" : <h3 className="mb-1" > All products</h3>

                                    }
                                    {
                                        categories?.data && categories?.data.map((el, i) => {
                                            if (el.id.toString() === category) {
                                                return <h3 className="mb-1" key={ el.id }> { el.title }</h3>
                                            }
                                        })
                                    }
                                    {/* Breadcrumb */ }
                                    <ol className="breadcrumb mb-md-0 font-size-xs text-gray-400">
                                        <li className="breadcrumb-item">
                                            <Link className="text-gray-400" to={ HOME_PATH }>Home</Link>
                                        </li>
                                        {
                                            categories?.data && categories?.data.map((el, i) => {
                                                if (el.id.toString() === category) {
                                                    return <li className="breadcrumb-item active" key={ el.id }>
                                                        { el.title }
                                                    </li>
                                                }

                                            })
                                        }

                                    </ol>
                                </div>
                                <div className="col-12 col-md-auto">
                                    {/* Select */ }
                                    <select className="custom-select custom-select-xs">
                                        <option selected>Most popular</option>
                                    </select>
                                </div>
                            </div>
                            {/* Tags */ }
                            <div className="row mb-7">
                                <div className="col-12">
                                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                        Shift dresses <a className="text-reset ml-2" href="#!" role="button">
                                            <i className="fe fe-x" />
                                        </a>
                                    </span>
                                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                        Summer <a className="text-reset ml-2" href="#!" role="button">
                                            <i className="fe fe-x" />
                                        </a>
                                    </span>
                                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                        M <a className="text-reset ml-2" href="#!" role="button">
                                            <i className="fe fe-x" />
                                        </a>
                                    </span>
                                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                        White <a className="text-reset ml-2" href="#!" role="button">
                                            <i className="fe fe-x" />
                                        </a>
                                    </span>
                                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                        Red <a className="text-reset ml-2" href="#!" role="button">
                                            <i className="fe fe-x" />
                                        </a>
                                    </span>
                                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                        Adidas <a className="text-reset ml-2" href="#!" role="button">
                                            <i className="fe fe-x" />
                                        </a>
                                    </span>
                                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                        $10.00 - $49.00 <a className="text-reset ml-2" href="#!" role="button">
                                            <i className="fe fe-x" />
                                        </a>
                                    </span>
                                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                                        $50.00 - $99.00 <a className="text-reset ml-2" href="#!" role="button">
                                            <i className="fe fe-x" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                            {/* Products */ }
                            <div className="row">
                                {
                                    loading ? [...Array(15)].map((_, i) =>
                                        <div key={ i } style={ { marginBottom: 15, marginLeft: 15 } }>
                                            < Skeleton variant="rectangular" animation="wave" width={ 250 } height={ 250 } />
                                            <Skeleton animation="wave" width={ "40%" } />
                                            <Skeleton animation="wave" height={ 60 } />
                                            <Skeleton animation="wave" width="60%" />
                                        </div>
                                    ) : products && products.map((product) => {
                                        return <ProductCard key={ product.id } { ...product } />
                                    })
                                }

                            </div>
                            {/* Pagination */ }
                            {
                                paginate && <Pagination totalPage={ paginate.totalPage } />
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
