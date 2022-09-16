import LogInModal from "../components/LogInModal";
import RegisterModal from "../components/RegisterModal";

export default function Auth() {
    return (
        <section className="py-12">
            <div className="container">
                <div className="row">
                    {/* log in modal */ }
                    <LogInModal />
                    {/* register modal */ }
                    <RegisterModal />
                </div>
            </div>
        </section>
    )
}
