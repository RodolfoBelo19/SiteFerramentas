import './Footer.css';

function Footer() {
    return (
        
        <footer>
            <div className="footer_column">

                <div className="footer_icon">
                    <ul>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href=""><i className="fab fa-twitter-square"></i></a></li>
                    </ul>
                </div>

                <div className="footer_column_1">
                    <div className="col">
                        <ul>
                            <li><strong>Company</strong></li>
                            <li>About</li>
                            <li>Carrers</li>
                            <li>Support</li>
                            <li>FAQ</li><br/>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li><strong>Resources</strong></li>
                            <li>Blog</li>
                            <li>Website</li>
                            <li>Login</li><br/>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li><strong>Get Help</strong></li>
                            <li>Helpe Center</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms</li>
                        </ul>
                        </div>
                    </div>



                        </div>

                        <div className="cop">
                            <strong><span>&copy; 2021 - Copyright - CFN</span></strong>
                        </div>
                
        </footer>
            
    )
}

export default Footer;