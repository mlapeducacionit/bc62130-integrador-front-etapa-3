import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav class="nav-bar">
      {" "}
      {/* <!-- nav-bar --> */}
      <ul class="nav-bar__nav-list">
        <li class="nav-bar__nav-item">
          <a href="#" class="nav-bar__nav-link">
            Inicio
          </a>
        </li>
        <li class="nav-bar__nav-item">
          <a href="#" class="nav-bar__nav-link">
            Alta
          </a>
        </li>
        <li class="nav-bar__nav-item">
          <a href="#" class="nav-bar__nav-link">
            Contacto
          </a>
        </li>
        <li class="nav-bar__nav-item">
          <a href="#" class="nav-bar__nav-link">
            Nosotros
          </a>
        </li>
      </ul>
    </nav> /* <!-- nav-bar --> */
  );
};

export default Navbar;
