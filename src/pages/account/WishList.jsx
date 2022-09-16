import { Skeleton } from "@mui/material";
import Pagination from "../../components/Pagination";
import WishListCard from "../../components/WishListCard";
import { useData } from "../../hooks/useData";
import { usePage } from "../../hooks/usePage";
import accountServices from "../../services/accountService";

export default function Wishlist() {
    let currentPage = usePage()

    const { data: products, loading, paginate } = useData(() => accountServices.getWishLists(`?page=${currentPage}`), [currentPage])

    return (
        <div>
            {/* CONTENT */ }
            <div className="row">
                <div className="col-lg-12 col-md-9 col-lg-8">
                    {/* Products */ }
                    {/* <div className="row d-flex justify-content-center">
                        <img src="https://elegantjewelersli.com/assets/images/empty-wishlist.png" alt="https://elegantjewelersli.com/assets/images/empty-wishlist.png" />
                        <h4>Your Wish List is Empty. </h4>
                    </div> */}
                    <div className="row">
                        {/* Item */ }
                        {
                            loading ? [...Array(15)].map((_, i) =>
                                <div key={ i } style={ { marginBottom: 15, marginLeft: 10 } }>
                                    <Skeleton animation="wave" width={ 240 } height={ 250 } />
                                    <Skeleton animation="wave" height={ 50 } />
                                    <Skeleton animation="wave" height={ 20 } />
                                </div>
                            ) : products && products.map((product) => {
                                return <WishListCard key={ product._id } product={ product.product } />
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

    )
}
