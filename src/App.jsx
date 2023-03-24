import Spline from '@splinetool/react-spline';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <>

      <body className="">
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">

            <div className="container-fluid">
              <a className="navbar-brand" href="#">Brand</a>
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fas fa-bars"></i>
              </button>


              <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a cclassName="nav-link" href="#">Link</a>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a className="dropdown-item" href="#">Action</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">Another action</a>
                      </li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"
                    >Disabled</a
                    >
                  </li>
                </ul>

              </div>

            </div>
          </nav>
          <div >
            <container>
              <div className="row row-centered pos"> <Spline scene="https://prod.spline.design/QabuomaV6XmEDysB/scene.splinecode" /> </div>
              <div className="">Test
              </div>
            </container>

          </div>



        </div>



      </body>
    </>
  );
}