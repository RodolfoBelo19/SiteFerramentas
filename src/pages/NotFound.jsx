import '../styles/page_styles/NotFound.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import StdTitle from '../components/StdTitle'
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <Header />
                <div className="wrapper">
                    <StdTitle title="404 - Página Não Encontrada"></StdTitle>
                    <p class="paragraph">A página que você tentou acessar não existe.</p>
                    <Link to="/"><p class="link"><i class="fas fa-chevron-left"></i>Voltar para a página inicial</p></Link>
                </div>
            <Footer />
        </>
    )
}