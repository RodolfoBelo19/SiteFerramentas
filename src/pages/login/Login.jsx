import '../../styles/page_styles/Login.css';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import StdTitle from '../../components/std-title/StdTitle';

export default function Login() {
    return (
        <>
            <Header />
            <div className="login-wrapper">
                               
                <div className="form-area">
                    <StdTitle
                        title="Login" />
                    <div className="form">
                        <div className="email">
                            <p>E-mail</p>
                            <input type="email"/>
                        </div>

                        <div className="password">
                            <p>Senha</p>
                            <input type="password"/>
                        </div>

                        <button>Entrar</button>
                    </div>
                    <footer className="login-footer">
                        <p><Link className="footer-link" to="/dadada">Esqueci meu login</Link></p>
                        <p><Link className="footer-link" to="/dadada">Esqueci minha senha</Link></p>
                    </footer>
                </div>
            </div>
            <Footer />
        </>
    )   
}