import './Header.css';
import Logo1 from './logo.png';

function Header() {

  return (

    <>


      <nav>

        <div class="logo">
          <img src={Logo1} width="150px"/>
        </div>

        <div className="centralized">

          <input id="nav-toggle" type="checkbox" />

          <div className="search">
            <input type="text" placeholder="Procurar"/>
          </div>

          <ul class="links">
            <li><a href="#">Promoções</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Login</a></li>
          </ul>

        </div>

        <label for="nav-toggle" class="icon-burger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </label>

      </nav>

    </>

  )

}


export default Header