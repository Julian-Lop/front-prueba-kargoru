import {useParams} from 'react-router-dom'
import '../css/index.css'

export default function EditQuote(){

    const {id} = useParams() 
    let v = true

    return(
        <div className='EditQuote'>
            <div className="container">

            {v?<div className="card">
                <h1 className='m-2'>Editar cotización</h1>
                <div className="card-body">
                    <h5 className="card-title">Cotizacion ID:{id}</h5>
                    <h6>Para: Julian Andres Lopez Castañeda</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <br></br>
                    <label>Email</label>: <label>julian01andres@gmail.com</label>
                    <hr></hr>
                
                    <label>Celular</label>: <label>3174598351</label>
                    <hr></hr>
                
                    <label>Origen:</label>
                    <input type="text" class="form-control" id="origin" placeholder={"Cali"} disabled={false} />
                    <hr></hr>
                
                    <label>Destino:</label>
                    <input type="text" class="form-control" id="arrive" placeholder={"Bogotá"} disabled={false} />
                    <hr></hr>
                    
                    <label>Fecha de salida:</label>
                    <input type="text" class="form-control" id="departureDate" placeholder={"15/06/2022"} disabled={false} />
                    <hr></hr>
                
                    <label>Fecha de llegada:</label>
                    <input type="text" class="form-control" id="arriveDate" placeholder={"18/06/2022"} disabled={false} />
                    <hr></hr>
                
                    <label>Vehiculo:</label>
                    <input type="text" class="form-control" id="vehicle" placeholder={"sedan"} disabled={false} />
                    <hr></hr>

                    <label>Costo total:</label>
                    <div class="input-group">
                    <div class="input-group-text">$</div>
                    <input type="text" class="form-control" id="cost" placeholder="150.000" disabled={false}/>
                    </div>
                    <br></br>
                    <button type='submit' class="btn btn-warning">Go somewhere<span className="fas fa-pen m-2" disabled={true}></span></button>
                </div>
                </div>
                :
                <div className="card" aria-hidden="true">
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-8"></span>
                        </p>
                        <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                    </div>
                </div>
                }<br></br>
            </div>
        </div>
    )
}