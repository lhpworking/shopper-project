import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ACCOUNT_ADDRESS_PATH, ACCOUNT_ORDERS_PATH, ACCOUNT_PAYMENT_PATH, ACCOUNT_PERSONAL_INFO_PATH, ACCOUNT_WISHLIST_PATH, LOGOUT_PATH } from "../constants/path";
import { logoutAction } from "../stores/userReducer";


export default function NavAccount() {
    const dispatch = useDispatch()
    const onLogout = (e) => {
        e.preventDefault()
        dispatch(logoutAction())
    }
    return (
        <nav className="mb-10 mb-md-0">
            <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                <Link className="list-group-item list-group-item-action dropright-toggle active" to={ ACCOUNT_ORDERS_PATH }>
                    Orders
                </Link>
                <Link className="list-group-item list-group-item-action dropright-toggle " to={ ACCOUNT_WISHLIST_PATH }>
                    Wish list
                </Link>
                <Link className="list-group-item list-group-item-action dropright-toggle " to={ ACCOUNT_PERSONAL_INFO_PATH }>
                    Personal Info
                </Link>
                <Link className="list-group-item list-group-item-action dropright-toggle " to={ ACCOUNT_ADDRESS_PATH }>
                    Addresses
                </Link>
                <Link className="list-group-item list-group-item-action dropright-toggle " to={ ACCOUNT_PAYMENT_PATH }>
                    Payment Methods
                </Link>
                <Link className="list-group-item list-group-item-action dropright-toggle" onClick={ onLogout } to={ LOGOUT_PATH }>
                    Logout
                </Link>
            </div>
        </nav>
    )
}
