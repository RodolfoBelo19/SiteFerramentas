import '../../styles/page_styles/Login.css';
import '../../components/std-title/StdTitle';
import StdTitle from '../../components/std-title/StdTitle';

export default function Login() {
    return (
        <div className="wrapper">
            <StdTitle
                title="Entrar" />
            
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
        </div>
    )   
}