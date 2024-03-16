import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import ProjectData from "../data/projects.json";
import Card from "../components/project-cards.js";

export default function Projects() {
    
    let arrayCards = ProjectData.map((cardData) => {
        return <Card data={cardData}/>;
    });
    

    return (
        <section>
            <Navbar />
            <h1>Projects</h1>
            <div className="array-cards-container">
                {arrayCards}
            </div>
            <Footer />
        </section>
    );
}
