import '../../styles/page_styles/Sobre.css';

import backImg from '../../images/teste5.png'

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function Sobre() {
    return (
        <>
            <Header />
                <div className="wrapper">
                    <div className="title-wrapper">
                        <div className="title-cursor"></div><h1 className="about-title">Sobre nós</h1>
                    </div>
                    <img className="back-img" src={backImg} alt="Ferramentas"/>
                    <p>Líder absoluta em todo o Grande Rio no segmento de utilidades, a Casa das Ferramentas faz parte do Grupo CFN.</p>
                </div>
            <Footer />
        </>
    )
}