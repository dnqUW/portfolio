import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import "../css/resume.css";

export default function Resume() {
    return (
        <section className="resume-section">
            <Navbar/>
                <h1>Resume</h1>
                <div className="res-div">
                    <iframe className="resume-file" src="./assets/Updated_tech_writer_resume (6).pdf" title="resume"/>
                </div>
            <Footer />
        </section>
    );
}
