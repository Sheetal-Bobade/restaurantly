import '../App.css';
import '../main.css';
function Header() {
  return (
    <div className="App">
      <header id="header" class="header fixed-top">

<div class="topbar d-flex align-items-center">
  <div class="container d-flex justify-content-center justify-content-md-between">
    <div class="contact-info d-flex align-items-center">
      <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
      <i class="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
    </div>
    <div class="languages d-none d-md-flex align-items-center">
      <ul>
        <li>En</li>
        <li><a href="/">De</a></li>
      </ul>
    </div>
  </div>
</div>

<div class="branding d-flex align-items-cente">

  <div class="container position-relative d-flex align-items-center justify-content-between">
    <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
       <img src="../public/assets/img/logo.png" alt=""/>
      <h1 class="sitename">Restaurantly</h1>
    </a>

    <nav id="navmenu" class="navmenu">
      <ul>
        <li><a href="#hero" class="active">Home<br/></a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#specials">Specials</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#chefs">Chefs</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li class="dropdown"><a href="/"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
          <ul>
            <li><a href="/">Dropdown 1</a></li>
            <li class="dropdown"><a href="/"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="/">Deep Dropdown 1</a></li>
                <li><a href="/">Deep Dropdown 2</a></li>
                <li><a href="/">Deep Dropdown 3</a></li>
                <li><a href="/">Deep Dropdown 4</a></li>
                <li><a href="/">Deep Dropdown 5</a></li>
              </ul>
            </li>
            <li><a href="/">Dropdown 2</a></li>
            <li><a href="/">Dropdown 3</a></li>
            <li><a href="/">Dropdown 4</a></li>
          </ul>
        </li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>

    <a class="btn-book-a-table d-none d-xl-block" href="#book-a-table">Book a Table</a>

  </div>

</div>

</header>

    </div>
  );
}

export default Header;


