/* ALTERAÇÕES MAIN

26/02/2021 by Leonardo Meira {
 - Adicionado novo componente (StdTitle), cujo propósito é ser um título de estilização padrão para o site.

 - Divs placeholders para produtos substituídas por um componente protótipo de produtos (ProductCard). Imagem do componente importada via CSS, por isso se repete.
 OBS: Precisamos arrumar um jeito de deixar as imagens dinâmicas, mas isso seria mais pra frente, com o uso de banco de dados.
}

27/02/2021 by Leonardo Meira {
 - Adicionado background degradê cinza claro (em todo o site) + 10 produtos em vez de 8 na seção de ofertas
}

*/


import '../../styles/component_styles/Main.css';
import StdTitle from '../std-title/StdTitle';
import ProductCard from '../product-card/ProductCard';


function Main() {

    return (
        <>
            <div className="main">
                <StdTitle
                    title="Ofertas de hoje" />
                <div className="grid_container">
                    <ProductCard
                        name="Chave Phillips 2"
                        price="9,99"/>
                    <ProductCard
                        name="Serra Elétrica"
                        price="599,99"/>
                    <ProductCard
                        name="Bomba Pneumática"
                        price="49,99"/>
                    <ProductCard
                        name="Chave Torx 1.5"
                        price="11,99"/>
                    <ProductCard
                        name="Alicate Pequeno"
                        price="15,99"/>
                    <ProductCard
                        name="Chave Phillips 2"
                        price="9,99"/>
                    <ProductCard
                        name="Chave Phillips 2"
                        price="9,99"/>
                    <ProductCard
                        name="Chave Phillips 2"
                        price="9,99"/>
                    <ProductCard
                        name="Chave Phillips 2"
                        price="9,99"/>
                    <ProductCard
                        name="Chave Phillips 2"
                        price="9,99"/>
                </div>
            </div>

        </>
    )
}

export default Main;