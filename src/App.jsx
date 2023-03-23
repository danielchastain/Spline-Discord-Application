import Spline from '@splinetool/react-spline';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
        </div>
      </nav>
      <body>
        <div className="bg-body-tertiary">
          <div className="tp-7">
            <Spline scene="https://prod.spline.design/QabuomaV6XmEDysB/scene.splinecode" />
          </div>

        <div>Website</div>
        </div>
      </body>


    </>

  );
}