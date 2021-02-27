/* ALTERAÇÕES HEADER - 26/02/2021 by Leonardo Meira

- Imagem do logo movida para a pasta (images)

- Clicar no logo agora redireciona o usuário à página inicial

- Elementos HTML (a) substituídos por elementos react-router-dom (Link) ***USAR (a) APENAS PARA REFERÊNCIAS A SITES EXTERNOS***

*/

import '../../styles/component_styles/Header.css';
import Logo1 from '../../images/header/logo.png';
import { Link }from 'react-router-dom';

function Header() {

  return (
    <>
      <nav>
        <div className="logo">
          <Link to={"/"}><img src={Logo1} width="150px"/></Link>
        </div>

        <div className="centralized">
          <input id="nav-toggle" type="checkbox" />

          <div className="search">
            <input type="text" placeholder="Procurar"/>
          </div>

          <ul className="links">
            <li><Link to={"/"}>Promoções</Link></li>
            <li><Link to={"/sobre"}>Sobre</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
          </ul>
        </div>

        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
    </>
  )
}

export default Header;