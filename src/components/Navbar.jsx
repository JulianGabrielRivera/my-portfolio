import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav
        className='navbar navbar-expand-lg navbar-light w-100 fixed-top'
        style={{ backgroundColor: '#4d1426' }}
      >
        <div className='container-fluid mx-5'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='true'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse ' id='navbarTogglerDemo02'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 mt-3'>
              <li className='nav-item me-4'>
                <Link
                  to='/home'
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  Home
                </Link>
              </li>

              <li className='nav-item me-4'>
                {' '}
                <Link
                  to='/portfolio'
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  Portfolio
                </Link>
              </li>
              <li className='nav-item me-4'>About</li>

              <li className='nav-item me-4'>Contact</li>
            </ul>
          </div>
          <div className='fontAwesomeIcons'>
            <a
              href='https://github.com/JulianGabrielRivera'
              style={{ color: 'white' }}
            >
              <i
                class='fa-brands fa-github'
                style={{ marginRight: '20px' }}
              ></i>
            </a>
            <a
              href='https://linkedin.com/in/julian-g-rivera'
              style={{ color: 'white' }}
            >
              <i
                class='fa-brands fa-linkedin'
                style={{ marginRight: '20px' }}
              ></i>
            </a>
          </div>
        </div>
        <hr />
      </nav>
    </>
  );
}

export default Navbar;
