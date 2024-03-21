import Footer from "../components/footer.js";
import Navbar from "../components/navbar.js";
import "../css/home.css"

export default function Home() {
    return (
        <section>
            <Navbar/>
            <h1 className="heading1">Derek Quach</h1>
            <div className="introduction">

                <p>Derek Quach is a technical writer of 1.5 years and software developer of 1 year (with 4 years collegiate level), IT tech of 2 years, and 5+ years writing for target audiences. English BA & Bio AA.
                    Has excellent: project management, programming, SEO/keyword research, verbal and writing skills. Has experience and familar with SSO, SDLC, REST
                    API, JSON. Works well with developers, SMEs, software, and, SSO, in sprints.
                    
                </p>
                <img className="headshot-linked-in" src="./img/thumbnail.jpg" alt="headshot"/>
                

            </div>
        
            <div className="logos">
                {/* all icons are from icon8 */}
                <img className="java" src="./assets/logos/icons8-java-100.png" alt="java logo"/>
                <img className="SQL" src="./assets/logos/icons8-sql-100.png" alt="SQL logo"/>
                <img className="Markdown" src="./assets/logos/icons8-markdown-100.png" alt="Markdown logo"/>
                <img className="HTML" src="./assets/logos/icons8-html-100.png" alt="HTML logo"/>
                <img className="Oxygen XML" src="./assets/logos/icons8-xml-100.png" alt="XML logo"/>
                <img className="CSS" src="./assets/logos/icons8-css-100.png" alt="CSS logo"/>
                <img className="Git" src="./assets/logos/icons8-git-50.png" alt="Git logo"/>
                <img className="GitHub" src="./assets/logos/icons8-github-120.png" alt="GitHub logo"/>
            </div>
            <Footer />
        </section>
    );
}


