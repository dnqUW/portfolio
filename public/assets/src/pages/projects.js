import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import ProjectData from "../data/projects.json";
import Card from "../components/project-cards.js";
import "../css/projects.css";

export default function Projects() {
    
    let arrayCards = ProjectData.map((cardData) => {
        return <Card data={cardData} key={cardData.name}/>;
    });
    
    return (
        <section>
            <Navbar />
            <h1 className="projects-word">Projects</h1>
            <div className="array-cards-container">
                {arrayCards}
            </div>
            <Footer />
        </section>
    );
}
