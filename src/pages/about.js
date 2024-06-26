import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import "../css/about.css"

export default function About() {
    return (
        <section>
            <Navbar />
            <h1 className="about-header">About</h1>
            <div className="about-container">
                <div className="about-text">
                <div>
                    <img src="./img/derek-quach-headshot.png" alt="derek quach headshot" className="headshot"/>
                </div>
                    <p>Derek Quach is a technical writer of 1.5 years.</p>
                    <p>Derek Quach graduated from the University of Washington with a BA in English and a AS in Biology from Highline College.
                    </p>
                    <p>
                        Derek has partaken in Revature's bootcamp as one of the student engineers. He aced all 93 (combined) Java and SQL coding labs, challenges, and mini‑project.
                        Achieved 100% completion & score on all assignments and labs. SQL queries, Big O, data structures, algorithms.
                        Developed social media API application and corresponding technical documentation
                        Derek has also worked for a company called humanID, a single sign-on service as a technical writer and the technical writing lead. This is where he: 
                    </p>
                    <ul>
                            <li>Maintained all tech writing standard operating procedures, tutorials, training manuals, and field documentation of our SaaS login</li>
                            <li>Expanded blog’s article count for technical audiences by 10% and optimized SEO score and web traffic by 15%</li> 
                            <li>Instructed and delegated over 50 technical writing tasks and tracked three onboarding processes single handedly</li> 
                            <li>23% augmentation rate domain authority. Suitability for general audience average score from 80% to 90%</li> 
                            <li>Utilized graphics to supplement clear and concise documentation. Surpassed expected quantity of deliverables</li> 
                            <li>Slashed documentation delivery time by 25% while working with software engineers & SME team</li> 
                            <li> You can find his portfolio <a href="https://docs.google.com/document/d/1KzdC-j_ZJHwQkWCjf3Rf23OVJ1YUacFW7CGb2oPUI4c/edit#heading=h.p2coezihwrl9">here</a> </li>
                    </ul>
                    <p className="bottom-text">
                        Additionally, he worked as an IT tech at TQ Computers Inc. where he serviced over 80 clients' devices. He then researched,
                        evaluated and recommeneded solutions to business owners and end users.
                    </p>
                </div>
                
            </div>
            
            <Footer />
        </section>
    );
}
