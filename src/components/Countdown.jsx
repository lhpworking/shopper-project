import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SHOP_PATH } from "../constants/path";

export default function Countdown() {
    const $ = document.querySelector.bind(document);


    useEffect(() => {
        const dataDate = $("[data-date]").getAttribute("data-date")
        const countDownDate = new Date(dataDate).getTime()

        const updateCountDown = setInterval(() => {

            // Get today's date and time
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            let distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            $("[data-days]").innerHTML = days
            $("[data-hours]").innerHTML = hours
            $("[data-minutes]").innerHTML = minutes
            $("[data-seconds]").innerHTML = seconds

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(updateCountDown);
                $(".counter").innerHTML = "End"
            }
        }, 1000)
    }, [])

    return (
        < section className="py-13 bg-cover" style={ { backgroundImage: 'url(/img/covers/cover-4.jpg)' }
        }>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-12 col-md-8 col-lg-6">
                        {/* Heading */ }
                        <h3 className="mb-7">
                            Get -50% from <br />Summer Collection
                        </h3>
                        {/* Counter */ }
                        <div className="d-flex mb-9 counter" id="1" data-countdown data-date="Jan 5, 2024 15:37:25">
                            <div className="text-center">
                                <div className="font-size-h1 font-weight-bolder text-primary days" data-days>00</div>
                                <div className="heading-xxs text-muted">Days</div>
                            </div>
                            <div className="px-1 px-md-4">
                                <div className="font-size-h2 font-weight-bolder text-primary">:</div>
                            </div>
                            <div className="text-center">
                                <div className="font-size-h1 font-weight-bolder text-primary" data-hours>00</div>
                                <div className="heading-xxs text-muted">Hours</div>
                            </div>
                            <div className="px-1 px-md-4">
                                <div className="font-size-h2 font-weight-bolder text-primary">:</div>
                            </div>
                            <div className="text-center">
                                <div className="font-size-h1 font-weight-bolder text-primary" data-minutes>00</div>
                                <div className="heading-xxs text-muted">Minutes</div>
                            </div>
                            <div className="px-1 px-md-4">
                                <div className="font-size-h2 font-weight-bolder text-primary">:</div>
                            </div>
                            <div className="text-center">
                                <div className="font-size-h1 font-weight-bolder text-primary" data-seconds>00</div>
                                <div className="heading-xxs text-muted">Seconds</div>
                            </div>
                        </div>
                        {/* Button */ }
                        <Link className="btn btn-dark" to={ SHOP_PATH }>
                            Shop Now <i className="fe fe-arrow-right ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </ section>
    )
}