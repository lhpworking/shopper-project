import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import { useData } from '../../hooks/useData';
import { productServices } from '../../services/productServices';
import { currency } from '../../utils/currency';

export default function ProductDetail() {
    const { id } = useParams()
    console.log(id);
    const { data, loading } = useData(() => productServices.getProductDetail(id), [id])
    console.log("data 1", data);
    const { data: products } = useData(() => productServices.getProducts(), [])
    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }, [id])
    return (
        data && <div >
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
                                    {
                                        data?.name
                                    }
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </nav>
            {/* PRODUCT */ }
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    {/* Card */ }
                                    <div className="card">
                                        {/* Badge */ }
                                        <div className="badge badge-primary card-badge text-uppercase">
                                            { data?.inventory_status }
                                        </div>
                                        {/* Slider */ }
                                        <div className="mb-4" data-flickity="{&quot;draggable&quot;: false, &quot;fade&quot;: true}" id="productSlider">
                                            {/* Item */ }
                                            {
                                                <a href={ data?.thumbnail_url } data-fancybox >
                                                    <img src={ data?.thumbnail_url } alt={ data?.name } className="card-img-top" />
                                                </a>
                                            }

                                        </div>
                                    </div>

                                </div>
                                <div className="col-12 col-md-6 pl-lg-10">
                                    {/* Header */ }
                                    <div className="row mb-1">
                                        <div className="col">
                                            {/* Preheading */ }
                                            <a className="text-muted" href="shop.html">{ data?.brand_name }</a>
                                        </div>
                                        <div className="col-auto">
                                            {/* Rating */ }
                                            <div className="rating font-size-xs text-dark" data-value={ data?.rating_average }>
                                                <div className="rating-item">
                                                    <i className="fas fa-star" />
                                                </div>
                                                <div className="rating-item">
                                                    <i className="fas fa-star" />
                                                </div>
                                                <div className="rating-item">
                                                    <i className="fas fa-star" />
                                                </div>
                                                <div className="rating-item">
                                                    <i className="fas fa-star" />
                                                </div>
                                                <div className="rating-item">
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                            <a className="font-size-sm text-reset ml-2" href="#reviews">
                                                Reviews ({ data?.review_count })
                                            </a>
                                        </div>
                                    </div>
                                    {/* Heading */ }
                                    <h3 className="mb-2">{ data?.name }</h3>
                                    {/* Price */ }
                                    <div className="mb-7">
                                        <span className="font-size-lg font-weight-bold text-gray-350 text-decoration-line-through">{ currency(data?.price) }</span>
                                        <span className="ml-1 font-size-h5 font-weight-bolder text-primary">{ currency(data?.real_price) }</span>
                                        <span className="font-size-sm ml-1">({ data?.stock_item.qty ? "In stock" : "Sold Out" })</span>
                                    </div>
                                    {/* Form */ }
                                    <form>
                                        <div className="form-group">
                                            {/* Label */ }
                                            {
                                                data?.configurable_options?.map((item, i) => {
                                                    return (
                                                        <p className="mb-5" key={ i }>
                                                            { item?.name }: <strong id="colorCaption">{ item?.values.map((val, i) => {
                                                                return (
                                                                    val.label
                                                                )
                                                            }) }</strong>
                                                        </p>
                                                    )
                                                })
                                            }
                                            {/* Radio */ }
                                            {/* <div className="mb-8 ml-n1">
                                                        <div className="custom-control custom-control-inline custom-control-img">
                                                            <input type="radio" className="custom-control-input" id="imgRadioOne" name="imgRadio" data-toggle="form-caption" data-target="#colorCaption" defaultValue="White" defaultChecked />
                                                            <label className="custom-control-label" htmlFor="imgRadioOne">
                                                                <span className="embed-responsive embed-responsive-1by1 bg-cover" style={ { backgroundImage: 'url(/img/products/product-7.jpg)' } } />
                                                            </label>
                                                        </div>
                                                        <div className="custom-control custom-control-inline custom-control-img">
                                                            <input type="radio" className="custom-control-input" id="imgRadioTwo" name="imgRadio" data-toggle="form-caption" data-target="#colorCaption" defaultValue="Black" />
                                                            <label className="custom-control-label" htmlFor="imgRadioTwo">
                                                                <span className="embed-responsive embed-responsive-1by1 bg-cover" style={ { backgroundImage: 'url(/img/products/product-49.jpg)' } } />
                                                            </label>
                                                        </div>
                                                    </div> */}
                                        </div>
                                        <div className="form-group">

                                            {/* <p className="mb-5">
                                                        Size: <strong><span id="sizeCaption">7.5</span> US</strong>
                                                    </p> */}
                                            {/* <div className="mb-2">
                                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                            <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioOne" defaultValue={ 6 } data-toggle="form-caption" data-target="#sizeCaption" />
                                                            <label className="custom-control-label" htmlFor="sizeRadioOne">6</label>
                                                        </div>
                                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                            <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioTwo" defaultValue="6.5" data-toggle="form-caption" data-target="#sizeCaption" disabled />
                                                            <label className="custom-control-label" htmlFor="sizeRadioTwo">6.5</label>
                                                        </div>
                                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                            <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioThree" defaultValue={ 7 } data-toggle="form-caption" data-target="#sizeCaption" />
                                                            <label className="custom-control-label" htmlFor="sizeRadioThree">7</label>
                                                        </div>
                                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                            <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioFour" defaultValue="7.5" data-toggle="form-caption" data-target="#sizeCaption" defaultChecked />
                                                            <label className="custom-control-label" htmlFor="sizeRadioFour">7.5</label>
                                                        </div>
                                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                            <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioFive" defaultValue={ 8 } data-toggle="form-caption" data-target="#sizeCaption" />
                                                            <label className="custom-control-label" htmlFor="sizeRadioFive">8</label>
                                                        </div>
                                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                            <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioSix" defaultValue="8.5" data-toggle="form-caption" data-target="#sizeCaption" />
                                                            <label className="custom-control-label" htmlFor="sizeRadioSix">8.5</label>
                                                        </div>
                                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                            <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioSeven" defaultValue={ 9 } data-toggle="form-caption" data-target="#sizeCaption" disabled />
                                                            <label className="custom-control-label" htmlFor="sizeRadioSeven">9</label>
                                                        </div>
                                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                            <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioEight" defaultValue="9.5" data-toggle="form-caption" data-target="#sizeCaption" disabled />
                                                            <label className="custom-control-label" htmlFor="sizeRadioEight">9.5</label>
                                                        </div>
                                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                            <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioNine" defaultValue={ 10 } data-toggle="form-caption" data-target="#sizeCaption" />
                                                            <label className="custom-control-label" htmlFor="sizeRadioNine">10</label>
                                                        </div>
                                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                            <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioTen" defaultValue="10.5" data-toggle="form-caption" data-target="#sizeCaption" />
                                                            <label className="custom-control-label" htmlFor="sizeRadioTen">10.5</label>
                                                        </div>
                                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                            <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioEleven" defaultValue={ 11 } data-toggle="form-caption" data-target="#sizeCaption" />
                                                            <label className="custom-control-label" htmlFor="sizeRadioEleven">11</label>
                                                        </div>
                                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                            <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioTwelve" defaultValue={ 12 } data-toggle="form-caption" data-target="#sizeCaption" />
                                                            <label className="custom-control-label" htmlFor="sizeRadioTwelve">12</label>
                                                        </div>
                                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                            <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioThirteen" defaultValue={ 13 } data-toggle="form-caption" data-target="#sizeCaption" />
                                                            <label className="custom-control-label" htmlFor="sizeRadioThirteen">13</label>
                                                        </div>
                                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                            <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioFourteen" defaultValue={ 14 } data-toggle="form-caption" data-target="#sizeCaption" />
                                                            <label className="custom-control-label" htmlFor="sizeRadioFourteen">14</label>
                                                        </div>
                                                    </div> */}
                                            {/* Size chart */ }
                                            {/* <p className="mb-8">
                                                        <img src="/img/icons/icon-ruler.svg" alt="..." className="img-fluid" /> <a className="text-reset text-decoration-underline ml-3" data-toggle="modal" href="#modalSizeChart">Size
                                                            chart</a>
                                                    </p> */}
                                            <div className="form-row mb-7">
                                                <div className="col-12 col-lg-auto">
                                                    {/* Quantity */ }
                                                    <select className="custom-select mb-2">
                                                        <option value={ 1 } selected>1</option>
                                                        <option value={ 2 }>2</option>
                                                        <option value={ 3 }>3</option>
                                                        <option value={ 4 }>4</option>
                                                        <option value={ 5 }>5</option>
                                                    </select>
                                                </div>
                                                <div className="col-12 col-lg">
                                                    {/* Submit */ }
                                                    <button type="submit" className="btn btn-block btn-dark mb-2">
                                                        Add to Cart <i className="fe fe-shopping-cart ml-2" />
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Text */ }
                                            <p>
                                                <span className="text-gray-500">Is your size/color sold out?</span>
                                                <a className="text-reset text-decoration-underline" data-toggle="modal" href="#modalWaitList">Join the
                                                    Wait List!</a>
                                            </p>
                                            {/* Share */ }
                                            <p className="mb-0">
                                                <span className="mr-4">Share:</span>
                                                <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                                <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                                <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                    <i className="fab fa-pinterest-p" />
                                                </a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* DESCRIPTION */ }
            <section className="pt-11">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Nav */ }
                            <div className="nav nav-tabs nav-overflow justify-content-start justify-content-md-center border-bottom">
                                <a className="nav-link active" data-toggle="tab" href="#descriptionTab">
                                    Description
                                </a>
                            </div>
                            {/* Content */ }
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="descriptionTab">
                                    <div className="row justify-content-center py-9">
                                        <div className="col-12 col-lg-10 col-xl-8">
                                            <div className="row">
                                                <div className="col-12">
                                                    {/* Text */ }
                                                    <p className="text-gray-500">
                                                        { data?.top_features }
                                                    </p>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    {/* List */ }
                                                    <ul className="list list-unstyled mb-md-0 text-gray-500">
                                                        <li>
                                                            <strong className="text-body">SKU</strong>: #{ data?.sku }
                                                        </li>
                                                        <li>
                                                            <strong className="text-body">Occasion</strong>: Lifestyle, Sport
                                                        </li>
                                                        <li>
                                                            <strong className="text-body">Country</strong>: Italy
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    {/* List */ }
                                                    <ul className="list list-unstyled mb-0">
                                                        <li>
                                                            <strong>Outer</strong>: Leather 100%, Polyamide 100%
                                                        </li>
                                                        <li>
                                                            <strong>Lining</strong>: Polyester 100%
                                                        </li>
                                                        <li>
                                                            <strong>CounSoletry</strong>: Rubber 100%
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* PRODUCTS */ }
            <section className="pt-11">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Heading */ }
                            <h4 className="mb-10 text-center">You might also like</h4>
                            {/* Items */ }
                            <div className="row">
                                {
                                    products && products.slice(0, 3).map((product, i) => {
                                        return <ProductCard key={ i } { ...product } loading={ loading } />

                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* REVIEWS */ }
            <section className="pt-9 pb-11" id="reviews">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Heading */ }
                            <h4 className="mb-10 text-center">Customer Reviews</h4>
                            {/* Header */ }
                            <div className="row align-items-center">
                                <div className="col-12 col-md-auto">
                                    {/* Dropdown */ }
                                    <div className="dropdown mb-4 mb-md-0">
                                        {/* Toggle */ }
                                        <a className="dropdown-toggle text-reset" data-toggle="dropdown" href="#">
                                            <strong>Sort by: Newest</strong>
                                        </a>
                                        {/* Menu */ }
                                        <div className="dropdown-menu mt-3">
                                            <a className="dropdown-item" href="#!">Newest</a>
                                            <a className="dropdown-item" href="#!">Oldest</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md text-md-center">
                                    {/* Rating */ }
                                    <div className="rating text-dark h6 mb-4 mb-md-0" data-value={ data?.rating_average }>
                                        <div className="rating-item">
                                            <i className="fas fa-star" />
                                        </div>
                                        <div className="rating-item">
                                            <i className="fas fa-star" />
                                        </div>
                                        <div className="rating-item">
                                            <i className="fas fa-star" />
                                        </div>
                                        <div className="rating-item">
                                            <i className="fas fa-star" />
                                        </div>
                                        <div className="rating-item">
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                    {/* Count */ }
                                    <strong className="font-size-sm ml-2">Reviews ({ data?.review_count })</strong>
                                </div>
                                <div className="col-12 col-md-auto">
                                    {/* Button */ }
                                    <a className="btn btn-sm btn-dark" data-toggle="collapse" href="#reviewForm">
                                        Write Review
                                    </a>
                                </div>
                            </div>
                            {/* New Review */ }
                            <div className="collapse" id="reviewForm">
                                {/* Divider */ }
                                <hr className="my-8" />
                                {/* Form */ }
                                <form>
                                    <div className="row">
                                        <div className="col-12 mb-6 text-center">
                                            {/* Text */ }
                                            <p className="mb-1 font-size-xs">
                                                Score:
                                            </p>
                                            {/* Rating form */ }
                                            <div className="rating-form">
                                                {/* Input */ }
                                                <input className="rating-input" type="range" min={ 1 } max={ 5 } defaultValue={ 5 } />
                                                {/* Rating */ }
                                                <div className="rating h5 text-dark" data-value={ 5 }>
                                                    <div className="rating-item">
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    <div className="rating-item">
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    <div className="rating-item">
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    <div className="rating-item">
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    <div className="rating-item">
                                                        <i className="fas fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Name */ }
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="reviewName">Your Name:</label>
                                                <input className="form-control form-control-sm" id="reviewName" type="text" placeholder="Your Name *" required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Email */ }
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="reviewEmail">Your Email:</label>
                                                <input className="form-control form-control-sm" id="reviewEmail" type="email" placeholder="Your Email *" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Name */ }
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="reviewTitle">Review Title:</label>
                                                <input className="form-control form-control-sm" id="reviewTitle" type="text" placeholder="Review Title *" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Name */ }
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="reviewText">Review:</label>
                                                <textarea className="form-control form-control-sm" id="reviewText" rows={ 5 } placeholder="Review *" required defaultValue={ "" } />
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            {/* Button */ }
                                            <button className="btn btn-outline-dark" type="submit">
                                                Post Review
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* Reviews */ }
                            <div className="mt-8">
                                {/* Review */ }
                                <div className="review">
                                    <div className="review-body">
                                        <div className="row">
                                            <div className="col-12 col-md-auto">
                                                {/* Avatar */ }
                                                <div className="avatar avatar-xxl mb-6 mb-md-0">
                                                    <span className="avatar-title rounded-circle">
                                                        <i className="fa fa-user" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md">
                                                {/* Header */ }
                                                <div className="row mb-6">
                                                    <div className="col-12">
                                                        {/* Rating */ }
                                                        <div className="rating font-size-sm text-dark" data-value={ 5 }>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        {/* Time */ }
                                                        <span className="font-size-xs text-muted">
                                                            Logan Edwards, <time dateTime="2019-07-25">25 Jul 2019</time>
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* Title */ }
                                                <p className="mb-2 font-size-lg font-weight-bold">
                                                    So cute!
                                                </p>
                                                {/* Text */ }
                                                <p className="text-gray-500">
                                                    Justo ut diam erat hendrerit. Morbi porttitor, per eu. Sodales curabitur diam sociis. Taciti
                                                    lobortis nascetur. Ante laoreet odio hendrerit.
                                                    Dictumst curabitur nascetur lectus potenti dis sollicitudin habitant quis vestibulum.
                                                </p>
                                                {/* Footer */ }
                                                <div className="row align-items-center">
                                                    <div className="col-auto d-none d-lg-block">
                                                        {/* Text */ }
                                                        <p className="mb-0 font-size-sm">Was this review helpful?</p>
                                                    </div>
                                                    <div className="col-auto mr-auto">
                                                        {/* Rate */ }
                                                        <div className="rate">
                                                            <a className="rate-item" data-toggle="vote" data-count={ 3 } href="#" role="button">
                                                                <i className="fe fe-thumbs-up" />
                                                            </a>
                                                            <a className="rate-item" data-toggle="vote" data-count={ 0 } href="#" role="button">
                                                                <i className="fe fe-thumbs-down" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto d-none d-lg-block">
                                                        {/* Text */ }
                                                        <p className="mb-0 font-size-sm">Comments (0)</p>
                                                    </div>
                                                    <div className="col-auto">
                                                        {/* Button */ }
                                                        <a className="btn btn-xs btn-outline-border" href="#!">
                                                            Comment
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Review */ }
                                <div className="review">
                                    {/* Body */ }
                                    <div className="review-body">
                                        <div className="row">
                                            <div className="col-12 col-md-auto">
                                                {/* Avatar */ }
                                                <div className="avatar avatar-xxl mb-6 mb-md-0">
                                                    <span className="avatar-title rounded-circle">
                                                        <i className="fa fa-user" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md">
                                                {/* Header */ }
                                                <div className="row mb-6">
                                                    <div className="col-12">
                                                        {/* Rating */ }
                                                        <div className="rating font-size-sm text-dark" data-value={ 3 }>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        {/* Time */ }
                                                        <span className="font-size-xs text-muted">
                                                            Sophie Casey, <time dateTime="2019-07-07">07 Jul 2019</time>
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* Title */ }
                                                <p className="mb-2 font-size-lg font-weight-bold">
                                                    Cute, but too small
                                                </p>
                                                {/* Text */ }
                                                <p className="text-gray-500">
                                                    Shall good midst can't. Have fill own his multiply the divided. Thing great. Of heaven whose
                                                    signs.
                                                </p>
                                                {/* Footer */ }
                                                <div className="row align-items-center">
                                                    <div className="col-auto d-none d-lg-block">
                                                        {/* Text */ }
                                                        <p className="mb-0 font-size-sm">Was this review helpful?</p>
                                                    </div>
                                                    <div className="col-auto mr-auto">
                                                        {/* Rate */ }
                                                        <div className="rate">
                                                            <a className="rate-item" data-toggle="vote" data-count={ 2 } href="#" role="button">
                                                                <i className="fe fe-thumbs-up" />
                                                            </a>
                                                            <a className="rate-item" data-toggle="vote" data-count={ 1 } href="#" role="button">
                                                                <i className="fe fe-thumbs-down" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto d-none d-lg-block">
                                                        {/* Text */ }
                                                        <p className="mb-0 font-size-sm">Comments (1)</p>
                                                    </div>
                                                    <div className="col-auto">
                                                        {/* Button */ }
                                                        <a className="btn btn-xs btn-outline-border" href="#!">
                                                            Comment
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Child review */ }
                                    <div className="review review-child">
                                        <div className="review-body">
                                            {/* Content */ }
                                            <div className="row">
                                                <div className="col-12 col-md-auto">
                                                    {/* Avatar */ }
                                                    <div className="avatar avatar-xxl mb-6 mb-md-0">
                                                        <span className="avatar-title rounded-circle">
                                                            <i className="fa fa-user" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md">
                                                    {/* Header */ }
                                                    <div className="row mb-6">
                                                        <div className="col-12">
                                                            {/* Rating */ }
                                                            <div className="rating font-size-sm text-dark" data-value={ 4 }>
                                                                <div className="rating-item">
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="rating-item">
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="rating-item">
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="rating-item">
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="rating-item">
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            {/* Time */ }
                                                            <span className="font-size-xs text-muted">
                                                                William Stokes, <time dateTime="2019-07-14">14 Jul 2019</time>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {/* Title */ }
                                                    <p className="mb-2 font-size-lg font-weight-bold">
                                                        Very good
                                                    </p>
                                                    {/* Text */ }
                                                    <p className="text-gray-500">
                                                        Made face lights yielding forth created for image behold blessed seas.
                                                    </p>
                                                    {/* Footer */ }
                                                    <div className="row align-items-center">
                                                        <div className="col-auto d-none d-lg-block">
                                                            {/* Text */ }
                                                            <p className="mb-0 font-size-sm">Was this review helpful?</p>
                                                        </div>
                                                        <div className="col-auto mr-auto">
                                                            {/* Rate */ }
                                                            <div className="rate">
                                                                <a className="rate-item" data-toggle="vote" data-count={ 7 } href="#" role="button">
                                                                    <i className="fe fe-thumbs-up" />
                                                                </a>
                                                                <a className="rate-item" data-toggle="vote" data-count={ 0 } href="#" role="button">
                                                                    <i className="fe fe-thumbs-down" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-auto d-none d-lg-block">
                                                            {/* Text */ }
                                                            <p className="mb-0 font-size-sm">Comments (0)</p>
                                                        </div>
                                                        <div className="col-auto">
                                                            {/* Button */ }
                                                            <a className="btn btn-xs btn-outline-border" href="#!">
                                                                Comment
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Pagination */ }
                            <nav className="d-flex justify-content-center mt-9">
                                <ul className="pagination pagination-sm text-gray-400">
                                    <li className="page-item">
                                        <a className="page-link page-link-arrow" href="#">
                                            <i className="fa fa-caret-left" />
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link page-link-arrow" href="#">
                                            <i className="fa fa-caret-right" />
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* FEATURES */ }
            <section className="bg-light py-9">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Item */ }
                            <div className="d-flex mb-6 mb-lg-0">
                                {/* Icon */ }
                                <i className="fe fe-truck font-size-lg text-primary" />
                                {/* Body */ }
                                <div className="ml-6">
                                    {/* Heading */ }
                                    <h6 className="heading-xxs mb-1">
                                        Free shipping
                                    </h6>
                                    {/* Text */ }
                                    <p className="mb-0 font-size-sm text-muted">
                                        From all orders over $100
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Item */ }
                            <div className="d-flex mb-6 mb-lg-0">
                                {/* Icon */ }
                                <i className="fe fe-repeat font-size-lg text-primary" />
                                {/* Body */ }
                                <div className="ml-6">
                                    {/* Heading */ }
                                    <h6 className="mb-1 heading-xxs">
                                        Free returns
                                    </h6>
                                    {/* Text */ }
                                    <p className="mb-0 font-size-sm text-muted">
                                        Return money within 30 days
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Item */ }
                            <div className="d-flex mb-6 mb-md-0">
                                {/* Icon */ }
                                <i className="fe fe-lock font-size-lg text-primary" />
                                {/* Body */ }
                                <div className="ml-6">
                                    {/* Heading */ }
                                    <h6 className="mb-1 heading-xxs">
                                        Secure shopping
                                    </h6>
                                    {/* Text */ }
                                    <p className="mb-0 font-size-sm text-muted">
                                        You're in safe hands
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Item */ }
                            <div className="d-flex">
                                {/* Icon */ }
                                <i className="fe fe-tag font-size-lg text-primary" />
                                {/* Body */ }
                                <div className="ml-6">
                                    {/* Heading */ }
                                    <h6 className="mb-1 heading-xxs">
                                        Over 10,000 Styles
                                    </h6>
                                    {/* Text */ }
                                    <p className="mb-0 font-size-sm text-muted">
                                        We have everything you need
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
