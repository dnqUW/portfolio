import Footer from "../components/footer.js";
import Navbar from "../components/navbar.js";
import "../css/home.css"

export default function Home() {
    return (
        <section>
            <Navbar/>
            <h1 className="heading1">Home</h1>
            <p></p>
            <Footer />
        </section>
    );
}


