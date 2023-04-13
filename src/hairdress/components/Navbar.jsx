 
export const Navbar = () => {
  const isLogged = true;

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-4'>
      <div className='container-fluid'>
        <a className='navbar-brand custom-text-pink'>
          HAIR BY EVE
        </a>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          { /* Navbar */ }
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 mx-2'>
            <li className='nav-item'>
              <a className='nav-link'>Inicio</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link'>Productos</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link'>Servicios</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link'>Contacto</a>
            </li>
          </ul>
          { /* Navbar */ }

          { /* Login */ }
          <ul className='navbar-nav mx-2'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className='fas fa-user'></i>
              </a>

              <ul className='dropdown-menu mb-4'>
                <li><a className='dropdown-item' href="#"><i className='fas fa-shopping-cart'></i> Carrito de compras</a></li>
                <li><a className='dropdown-item' href="#"><i className='fas fa-sticky-note'></i> Ver mis reservas</a></li>
                <li><hr className='dropdown-divider' /></li>
                <li><a className='dropdown-item' href="#"><i className='fas fa-sign-out-alt text-danger'></i> Cerrar Sesión</a></li>
              </ul>
            </li>
          </ul>
          { /* Login */ }
        </div>
      </div>
    </nav>
  );
}
