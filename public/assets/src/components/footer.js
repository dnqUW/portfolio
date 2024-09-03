import "../css/footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="full-name">
                <p className="copy" style={{color: '#FFFFFF'}}>&copy;Derek Quach</p>
                <p className="react" style={{ color: '#FFFFFF'}}>| Made with React</p>
            </div>
            <div className="logos">
                <a href="mailto:derek.quach15@gmail.com"><FaEnvelope className="email-logo" style={{ color: '#FFFFFF'}}/></a>
                <a href="https://www.linkedin.com/in/derek-quach-4b69a51aa/" target="_blank" rel="noreferrer" > <FaLinkedin className="linkedin-logo" style={{ color: '#0077B5'}} /></a>
                <a href="https://www.github.com/dnquw" target="_blank" rel="noreferrer" ><FaGithub className="github-logo" style={{ color: '#FFFFFF'}}/></a>
            </div>
            
        </footer>
    );

}