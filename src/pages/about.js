import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import "../css/about.css"

export default function About() {
    return (
        <section>
            <Navbar />
            <h1>About</h1>
            <div className="about-container">
                <div className="about-text">
                    <p>Derek Quach is a technical writer of 1.5 years.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed dui id ex commodo commodo. Proin tortor neque, 
                        efficitur quis ultricies eu, pretium sit amet tellus. Donec vehicula dictum porta. Aliquam ipsum sem, blandit vel sapien nec, 
                        scelerisque fringilla ex. Sed dignissim enim tortor, sed tempor mauris hendrerit sed. Aenean ut elementum ligula, venenatis 
                        pellentesque sapien. Donec fringilla mattis lacus, eget tempor massa ultricies eget.
                    </p>
                    <p>
                    Sed mattis aliquam commodo. Duis sollicitudin posuere risus, in pharetra mauris venenatis a. Nam eget tortor ornare, semper enim ut, 
                    posuere erat. Nam sed sagittis nulla, eget pellentesque metus. Nulla justo erat, varius dictum iaculis eget, efficitur sed nulla. Sed 
                    mattis mi a erat accumsan sollicitudin. Aenean lobortis purus nec sagittis laoreet. Etiam pharetra, libero placerat elementum venenatis, 
                    ipsum enim eleifend felis, non semper quam arcu sed magna. Nunc a tempor purus, sit amet volutpat arcu. Quisque rutrum elementum ligula, 
                    aliquet feugiat est gravida id. Nullam feugiat dui elit, non finibus dui lobortis pretium.
                    </p>
                </div>
                <div>
                    <img src="./img/derek-quach-headshot.png" alt="derek quach headshot" className="headshot"/>
                </div>
            </div>
            
            <Footer />
        </section>
    );
}
