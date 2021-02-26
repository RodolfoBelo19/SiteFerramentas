import './Header.css';



function Header() {

  return (

    <>
  <h1>teste</h1>
      <nav>
        <input id="nav-toggle" type="checkbox" />
        <div class="logo">NAV<strong>BAR</strong></div>
        <ul class="links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Project</a></li>
        </ul>
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