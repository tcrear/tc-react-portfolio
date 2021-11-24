import React from "react";
import '../styles/footer.css';
// import Email from "../image/email.png";
// import Github from "../image/github.png";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const styles = {
    footerIcon: {
      margin: 25,
      fontSize: '2em',
      color: 'black'
    },
    footer: {
      backgroundColor: '#ffffff',
    }
  };

function Footer() {
    return (
        <footer style={styles.footer} className="footer">
            <div className="container text-center">
                 <a 
                    href="https://github.com/tcrear" target="_blank" rel="noreferrer">              
                    <FaGithub style={styles.footerIcon}/>
                 </a>
                 <a 
                    href="mailto:tammie.crear@gmail.com" target="_blank" rel="noreferrer">
                    <FaEnvelope style={styles.footerIcon} />
                </a>
            </div>
            <div class ="footer-copyright text-center py-3">© 2021 Copyright: Tammie Crear</div>
      </footer>
    )
};

export default Footer;

