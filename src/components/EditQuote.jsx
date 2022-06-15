import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import {getQuote,getAllLocation, getAllVehicles, editQuote, createUser} from '../Redux/Actions/index'
import '../css/index.css'

export default function EditQuote(){
    const {id} = useParams() 
    const dispatch = useDispatch()

    const locations = useSelector((state) => state.locations)
    const vehicles = useSelector((state) => state.vehicles)
    const currentQuote = useSelector((state) => state.currentQuote)


    const [quote, setquote] = useState({
            id:'',
            nombre:'',
            email:'',
            celular:'',
            origen:'',
            destino:'',
            fechaSalida:'',
            fechaLlegada:'',
            costo:'',
            vehiculo:''
    })

    useEffect(()=>{
        dispatch(getQuote(Number(id)))
        dispatch(getAllLocation())
        dispatch(getAllVehicles())
    },[])

    useEffect(()=>{
        if(currentQuote){
            fillState()
        }
    },[currentQuote])

    const fillState = () => {
        quote.nombre = currentQuote.usuario?currentQuote.usuario.nombre : ''
        quote.id = currentQuote.id
        quote.email = currentQuote.usuario? currentQuote.usuario.email : ''
        quote.celular = currentQuote.usuario? currentQuote.usuario.celular : ''
        quote.origen = currentQuote.origenId
        quote.destino = currentQuote.destinoId
        quote.fechaSalida = currentQuote.fechaSalida
        quote.fechaLlegada = currentQuote.fechaLlegada
        quote.costo = currentQuote.costo
        quote.vehiculo = currentQuote.vehiculoId
    }

    const handleChangeQuote = (e) => {
        setquote({
            ...quote,
            [e.target.name]: Number(e.target.value) && e.target.name !== 'celular'? Number(e.target.value): e.target.value
        })
    }

    const submitQuote = async (e) => {
        e.preventDefault()
        if(quote.email && quote.celular && quote.origen && quote.destino && quote.fechaSalida
            && quote.fechaLlegada && quote.costo && quote.vehiculo){
                await dispatch(createUser(quote))
                await dispatch(editQuote(quote))
                return alert('editado exitosamente')
        }else{
            return alert('hay campos vacios')
        }
    }

    return(
        <div className='EditQuote'>
            <div className="container">

            {locations.length && currentQuote && quote.email?<div className="card">
                <h1 className='m-2'>Editar cotización</h1>
                <div className="card-body">
                    <h5 className="card-title">Cotizacion ID:{id}</h5>
                    <h6>Para: {quote.nombre}</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <br></br>
                    
                    <label>Email:</label>
                    <input type="text" className="form-control" id="email" name="email" value={quote.email} onChange={(e) => handleChangeQuote(e)} />
                    <hr></hr>

                    <label>Celular:</label>
                    <input type="text" className="form-control" id="celular" name="celular" value={quote.celular}  onChange={(e) => handleChangeQuote(e)} />
                    <hr></hr>
                    

                    <label htmlFor="inputState" className="form-label">Origen</label>
                    <select id="origin" className="form-select" onChange={(e) => handleChangeQuote(e)} name="origen" value={quote.origen}>
                        <option selected={true} disabled={true}>Selecciona</option>
                        {locations.length?
                        locations.map(location => (<option key={location.id} value={location.id} name="origen">{location.nombre}</option>)):null}
                    </select>
                    <hr></hr>
                    
                    
                    <label htmlFor="inputState" className="form-label">Destino</label>
                    <select id="arrival" className="form-select" onChange={(e) => handleChangeQuote(e)} name="destino" value={quote.destino}>
                        <option selected={true} disabled={true}>Selecciona</option>
                        {locations.length?
                        locations.map(location => (<option key={location.id} value={location.id} name="destino">{location.nombre}</option>)):null}
                    </select>
                    <hr></hr>
                    
                    <label>Fecha de salida:</label>
                    <input type="date" className="form-control" id="departureDate" name="fechaSalida" value={quote.fechaSalida} onChange={(e) => handleChangeQuote(e)}/>
                    <hr></hr>
                    
                    <label>Fecha de llegada:</label>
                    <input type="date" className="form-control" id="arriveDate" name="fechaLlegada" value={quote.fechaLlegada} onChange={(e) => handleChangeQuote(e)}/>
                    <hr></hr>
                    
                    <label htmlFor="inputState" className="form-label">Vehiculo</label>
                    <select id="vehicle" className="form-select" onChange={(e) => handleChangeQuote(e)} name="vehiculo" value={quote.vehiculo}>
                        <option selected={true} disabled={true}>Selecciona</option>
                        {vehicles.length?
                        vehicles.map(vehicle => (<option type="number" key={vehicle.id} value={vehicle.id} name="vehiculo">{vehicle.nombre}</option>)):null}
                    </select>
                    <hr></hr>

                    <label>Costo total:</label>
                    <div className="input-group">
                    <div className="input-group-text">$</div>
                    <input type="number" className="form-control" id="cost" value={quote.costo} name="costo" onChange={(e) => handleChangeQuote(e)} />
                    </div>
                    <br></br>
                    <button type='submit' onClick={(e) => submitQuote(e)} className="btn btn-warning">Editar<span className="fas fa-pen m-2" disabled={true}></span></button>
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
                        <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
                    </div>
                </div>
                }<br></br>
            </div>
        </div>
    )
}