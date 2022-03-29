import react from 'react';
import {Link} from 'react-router-dom';

function Navbar(params) {
   return(
      <section className="nav-sec">
         <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <div class="container-fluid">
                  <Link class="navbar-brand" to="/">CRYPTO</Link>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                     <ul class="navbar-nav">
                        <li class="nav-item">
                           <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link disabled">Disabled</a>
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