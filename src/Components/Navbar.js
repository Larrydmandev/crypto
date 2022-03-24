import react from 'react';
import {Link} from 'react-router-dom';

function Navbar(params) {
   return(
      <section className="nav-sec">
         <div>
            <nav className="navbar navbar-expand fixed-top-lg navbar-light bg-light">
               <div className="container-fluid">
                  <Link className="navbar-brand a-brand" to="/">CRYPTO</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse ul-nav" id="navbarNav">
                     <ul className="navbar-nav">
                        <li className="nav-item">
                           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link active" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link active" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link active">Disabled</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         </div>
      </section>
   )
}

export default Navbar