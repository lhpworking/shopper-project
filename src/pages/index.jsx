import BestPicks from "../components/BestPicks"
import Brands from "../components/Brands"
import Categories from "../components/Categories"
import Countdown from "../components/Countdown"
import Features from "../components/Features"
import Reviews from "../components/Reviews"
import TopSellers from "../components/TopSellers"
export default function Home() {
    return (
        <div>
            {/* CATEGORIES */ }
            <Categories />
            {/* FEATURES */ }
            <Features />
            {/* BEST PICKS */ }
            <BestPicks />
            {/* TOP SELLERS */ }
            <TopSellers />
            {/* COUNTDOWN */ }
            <Countdown />
            {/* REVIEWS */ }
            <Reviews />
            {/* BRANDS */ }
            <Brands />
        </div>
    )
}
