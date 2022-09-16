import { Drawer } from 'antd'
import React from 'react'
import { useGlobalState } from '../hooks/useGlobalSate'


/* 
    1. Sử dụng Drawer(antd) render UI search
    2. Handle nút search , enter cho value debound 500ms
    3. Gọi api product và thêm search by title
    4. handle link "view all"
    5. thêm search vào trang product list
    6. Gắn thông tin search lên product list để user biết đang search cái gì
 */

export default function SearchModal() {
    const { isOpen, setIsOpen } = useGlobalState()
    return (
        <Drawer
            visible={ isOpen }
            closeIcon={ true } onClose={ () => setIsOpen(false) }
            headerStyle={ { display: "none" } }
            width='470'
            bodyStyle={ { padding: 0 } }
        >
            <div className="modal-dialog modal-dialog-vertical " role="document">
                <div className="modal-content w-100">
                    {/* Close */ }
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="fe fe-x" aria-hidden="true" onClick={ () => setIsOpen(false) } />
                    </button>
                    {/* Header*/ }
                    <div className="modal-header line-height-fixed font-size-lg">
                        <strong className="mx-auto">Search Products</strong>
                    </div>
                    {/* Body: Form */ }
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label className="sr-only" htmlFor="modalSearchCategories">Categories:</label>
                                <select className="custom-select" id="modalSearchCategories">
                                    <option selected>All Categories</option>
                                    <option>Women</option>
                                    <option>Men</option>
                                    <option>Kids</option>
                                </select>
                            </div>
                            <div className="input-group input-group-merge">
                                <input className="form-control" type="search" placeholder="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-border" type="submit">
                                        <i className="fe fe-search" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Body: Results (add `.d-none` to disable it) */ }
                    <div className="modal-body border-top font-size-sm">
                        {/* Heading */ }
                        <p>Search Results:</p>
                        {/* Items */ }
                        <div className="row align-items-center position-relative mb-5">
                            <div className="col-4 col-md-3">
                                {/* Image */ }
                                <img className="img-fluid" src="/img/products/product-5.jpg" alt="..." />
                            </div>
                            <div className="col position-static">
                                {/* Text */ }
                                <p className="mb-0 font-weight-bold">
                                    <a className="stretched-link text-body" href="./product.html">Leather mid-heel Sandals</a> <br />
                                    <span className="text-muted">$129.00</span>
                                </p>
                            </div>
                        </div>
                        <div className="row align-items-center position-relative mb-5">
                            <div className="col-4 col-md-3">
                                {/* Image */ }
                                <img className="img-fluid" src="/img/products/product-6.jpg" alt="..." />
                            </div>
                            <div className="col position-static">
                                {/* Text */ }
                                <p className="mb-0 font-weight-bold">
                                    <a className="stretched-link text-body" href="./product.html">Cotton floral print Dress</a> <br />
                                    <span className="text-muted">$40.00</span>
                                </p>
                            </div>
                        </div>
                        <div className="row align-items-center position-relative mb-5">
                            <div className="col-4 col-md-3">
                                {/* Image */ }
                                <img className="img-fluid" src="/img/products/product-7.jpg" alt="..." />
                            </div>
                            <div className="col position-static">
                                {/* Text */ }
                                <p className="mb-0 font-weight-bold">
                                    <a className="stretched-link text-body" href="./product.html">Leather Sneakers</a> <br />
                                    <span className="text-primary">$85.00</span>
                                </p>
                            </div>
                        </div>
                        <div className="row align-items-center position-relative mb-5">
                            <div className="col-4 col-md-3">
                                {/* Image */ }
                                <img className="img-fluid" src="/img/products/product-8.jpg" alt="..." />
                            </div>
                            <div className="col position-static">
                                {/* Text */ }
                                <p className="mb-0 font-weight-bold">
                                    <a className="stretched-link text-body" href="./product.html">Cropped cotton Top</a> <br />
                                    <span className="text-muted">$29.00</span>
                                </p>
                            </div>
                        </div>
                        <div className="row align-items-center position-relative mb-5">
                            <div className="col-4 col-md-3">
                                {/* Image */ }
                                <img className="img-fluid" src="/img/products/product-9.jpg" alt="..." />
                            </div>
                            <div className="col position-static">
                                {/* Text */ }
                                <p className="mb-0 font-weight-bold">
                                    <a className="stretched-link text-body" href="./product.html">Floral print midi Dress</a> <br />
                                    <span className="text-muted">$50.00</span>
                                </p>
                            </div>
                        </div>
                        {/* Button */ }
                        <a className="btn btn-link px-0 text-reset" href="./shop.html">
                            View All <i className="fe fe-arrow-right ml-2" />
                        </a>
                    </div>
                    {/* Body: Empty (remove `.d-none` to disable it) */ }
                    <div className="d-none modal-body">
                        {/* Text */ }
                        <p className="mb-3 font-size-sm text-center">
                            Nothing matches your search
                        </p>
                        <p className="mb-0 font-size-sm text-center">
                            😞
                        </p>
                    </div>
                </div>
            </div>
        </Drawer>
    )
}
