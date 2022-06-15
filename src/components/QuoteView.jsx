import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
import {getQuote,getAllLocation} from '../Redux/Actions/index'
import '../css/index.css'


export default function QuoteView(){
    const {id} = useParams() 
    const dispatch = useDispatch()

    const locations = useSelector((state) => state.locations)
    const currentQuote = useSelector((state) => state.currentQuote)

    useEffect(()=>{
        dispatch(getQuote(Number(id)))
        dispatch(getAllLocation())
    },[])


    return (
        <div class="QuoteView">
            <div class='container'>
                    {currentQuote.usuario && locations.length?<div class="card">
                    <h1 class='m-2'>Vista de cotización</h1>
                    <div class="card-body">
                        <h5 class="card-title">Cotizacion ID:{currentQuote.id}</h5>
                        <h6>Para: {currentQuote.usuario.nombre}</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <br></br>
                        
                        <label>Email:</label>
                        <input type="text" class="form-control" id="email" value={currentQuote.usuario.email} disabled={true} />
                        <hr></hr>

                        <label>Celular:</label>
                        <input type="text" class="form-control" id="celular" value={currentQuote.usuario.celular} disabled={true} />
                        <hr></hr>
                       
                        <label>Origen:</label>
                        <input type="text" class="form-control" id="origin" value={locations.find(location => location.id === currentQuote.origenId).nombre}  disabled={true} />
                        <hr></hr>
                       
                        <label>Destino:</label>
                        <input type="text" class="form-control" id="arrive" value={locations.find(location => location.id === currentQuote.destinoId).nombre} disabled={true} />
                        <hr></hr>
                        
                        <label>Fecha de salida:</label>
                        <input type="text" class="form-control" id="departureDate" value={currentQuote.fechaSalida} disabled={true} />
                        <hr></hr>
                       
                        <label>Fecha de llegada:</label>
                        <input type="text" class="form-control" id="arriveDate" value={currentQuote.fechaLlegada} disabled={true} />
                        <hr></hr>
                       
                        <label>Vehiculo:</label>
                        <input type="text" class="form-control" id="vehicle" value={currentQuote.vehiculo.nombre} disabled={true} />
                        <hr></hr>

                        <label>Costo total:</label>
                        <div class="input-group">
                        <div class="input-group-text">$</div>
                        <input type="text" class="form-control" id="cost" value={currentQuote.costo} disabled={true}/>
                        </div>
                    </div>
                    </div>
                    :
                    <div class="card" aria-hidden="true">
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                            </p>
                        </div>
                    </div>
                    }<br></br>
            </div>
        </div>
    )
}