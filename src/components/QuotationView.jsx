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
        <div className="QuoteView">
            <div className='container'>
                    {currentQuotation.usuario && locations.length?<div className="card">
                    <h1 className='m-2'>Vista de cotización</h1>
                    <div className="card-body">
                        <h5 className="card-title">Cotizacion ID:{currentQuotation.id}</h5>
                        <h6>Para: {currentQuotation.usuario.nombre}</h6>
                        <p className="card-text">
                            Detalles de la carga: <br></br>
                            {currentQuotation.detalleCarga}
                        </p>
                        <br></br>
                        
                        <label>Email:</label>
                        <input type="text" className="form-control" id="email" value={currentQuotation.usuario.email} disabled={true} />
                        <hr></hr>

                        <label>Celular:</label>
                        <input type="text" className="form-control" id="celular" value={currentQuotation.usuario.celular} disabled={true} />
                        <hr></hr>
                       
                        <label>Origen:</label>
                        <input type="text" className="form-control" id="origin" value={locations.find(location => location.id === currentQuotation.origenId).nombre}  disabled={true} />
                        <hr></hr>
                       
                        <label>Destino:</label>
                        <input type="text" className="form-control" id="arrive" value={locations.find(location => location.id === currentQuotation.destinoId).nombre} disabled={true} />
                        <hr></hr>
                        
                        <label>Fecha de salida:</label>
                        <input type="text" className="form-control" id="departureDate" value={currentQuotation.fechaSalida} disabled={true} />
                        <hr></hr>
                       
                        <label>Tipo de transporte:</label>
                        <input type="text" className="form-control" id="vehicle" value={currentQuotation.vehiculo.nombre} disabled={true} />
                        <hr></hr>

                        <label>Costo total:</label>
                        <div className="input-group">
                        <div className="input-group-text">$</div>
                        <input type="text" className="form-control" id="cost" value={currentQuotation.costo} disabled={true}/>
                        </div>
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
                        </div>
                    </div>
                    }<br></br>
            </div>
        </div>
    )
}