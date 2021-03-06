import {Link} from 'react-router-dom'
import '../css/index.css'

export default function Navbar(){
    return (
        <div className="Navbar">
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-absolute top-0 start-0">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/quotestable">Cotizaciones</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/createquote">Crear Cotizaciones</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}