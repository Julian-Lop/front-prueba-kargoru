import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
import {getQuotation,getAllLocation} from '../Redux/Actions/index'
import '../css/index.css'


export default function QuotationView(){
    const {id} = useParams() 
    const dispatch = useDispatch()

    const locations = useSelector((state) => state.locations)
    const currentQuotation = useSelector((state) => state.currentQuotation)

    useEffect(()=>{
        dispatch(getQuotation(Number(id)))
        dispatch(getAllLocation())
    },[])


    return (
        <div class="QuoteView">
            <div class='container'>
                    {currentQuotation.usuario && locations.length?<div class="card">
                    <h1 class='m-2'>Vista de cotización</h1>
                    <div class="card-body">
                        <h5 class="card-title">Cotizacion ID:{currentQuotation.id}</h5>
                        <h6>Para: {currentQuotation.usuario.nombre}</h6>
                        <p class="card-text">Cotización realizada a nombre de {currentQuotation.usuario.nombre}</p>
                        <br></br>
                        
                        <label>Email:</label>
                        <input type="text" class="form-control" id="email" value={currentQuotation.usuario.email} disabled={true} />
                        <hr></hr>

                        <label>Celular:</label>
                        <input type="text" class="form-control" id="celular" value={currentQuotation.usuario.celular} disabled={true} />
                        <hr></hr>
                       
                        <label>Origen:</label>
                        <input type="text" class="form-control" id="origin" value={locations.find(location => location.id === currentQuotation.origenId).nombre}  disabled={true} />
                        <hr></hr>
                       
                        <label>Destino:</label>
                        <input type="text" class="form-control" id="arrive" value={locations.find(location => location.id === currentQuotation.destinoId).nombre} disabled={true} />
                        <hr></hr>
                        
                        <label>Fecha de salida:</label>
                        <input type="text" class="form-control" id="departureDate" value={currentQuotation.fechaSalida} disabled={true} />
                        <hr></hr>
                       
                        <label>Fecha de llegada:</label>
                        <input type="text" class="form-control" id="arriveDate" value={currentQuotation.fechaLlegada} disabled={true} />
                        <hr></hr>
                       
                        <label>Vehiculo:</label>
                        <input type="text" class="form-control" id="vehicle" value={currentQuotation.vehiculo.nombre} disabled={true} />
                        <hr></hr>

                        <label>Costo total:</label>
                        <div class="input-group">
                        <div class="input-group-text">$</div>
                        <input type="text" class="form-control" id="cost" value={currentQuotation.costo} disabled={true}/>
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