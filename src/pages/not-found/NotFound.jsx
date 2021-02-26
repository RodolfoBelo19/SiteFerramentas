import '../../styles/page_styles/NotFound.css';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function NotFound() {
    return (
        <>
            <Header />
                <div className="wrapper">
                    <h1>Error 404 - Not Found</h1>
                    <p>Please refer to the administrator.</p>
                </div>
            <Footer />
        </>
    )
}