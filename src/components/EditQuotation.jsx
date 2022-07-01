import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import {getQuotation,getAllLocation, getAllVehicles, editQuotation, createUser} from '../Redux/Actions/index'
import '../css/index.css'

export default function EditQuotation(){
    const {id} = useParams() 
    const dispatch = useDispatch()

    const locations = useSelector((state) => state.locations)
    const vehicles = useSelector((state) => state.vehicles)
    const currentQuotation = useSelector((state) => state.currentQuotation)


    const [quotation, setquotation] = useState({
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
        dispatch(getQuotation(Number(id)))
        dispatch(getAllLocation())
        dispatch(getAllVehicles())
    },[])

    useEffect(()=>{
        if(currentQuotation){
            fillState()
        }
    },[currentQuotation])

    const fillState = () => {
        quotation.nombre = currentQuotation.usuario?currentQuotation.usuario.nombre : ''
        quotation.id = currentQuotation.id
        quotation.email = currentQuotation.usuario? currentQuotation.usuario.email : ''
        quotation.celular = currentQuotation.usuario? currentQuotation.usuario.celular : ''
        quotation.origen = currentQuotation.origenId
        quotation.destino = currentQuotation.destinoId
        quotation.fechaSalida = currentQuotation.fechaSalida
        quotation.fechaLlegada = currentQuotation.fechaLlegada
        quotation.costo = currentQuotation.costo
        quotation.vehiculo = currentQuotation.vehiculoId
    }

    const handleChangeQuotation = (e) => {
        setquotation({
            ...quotation,
            [e.target.name]: Number(e.target.value) && e.target.name !== 'celular'? Number(e.target.value): e.target.value
        })
    }

    const submitQuotation = async (e) => {
        e.preventDefault()

        if(/\s/.test(quotation.nombre) || /\s/.test(quotation.celular) || 
        /\s/.test(quotation.email)) return alert('esapacios en blanco')

        if(/\s/.test(quotation.origen) || /\s/.test(quotation.destino) || 
        /\s/.test(quotation.fechaSalida) || /\s/.test(quotation.fechaLlegada) 
        || /\s/.test(quotation.costo) || /\s/.test(quotation.vehiculo))return alert('espacios en blanco')

        if(quotation.email && quotation.celular && quotation.origen && quotation.destino && quotation.fechaSalida
            && quotation.fechaLlegada && quotation.costo && quotation.vehiculo){
                await dispatch(createUser(quotation))
                await dispatch(editQuotation(quotation))
                return alert('editado exitosamente')
        }else{
            return alert('hay campos vacios')
        }
    }

    return(
        <div className='editQuotation'>
            <div className="container">

            {locations.length && currentQuotation && quotation?<div className="card">
                <h1 className='m-2'>Editar cotización</h1>
                <div className="card-body">
                    <h5 className="card-title">Cotizacion ID:{id}</h5>
                    <h6>Para: {quotation.email?quotation.nombre:null}</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <br></br>
                    
                    <label>Email:</label>
                    <input type="text" className="form-control" id="email" name="email" value={quotation.email} onChange={(e) => handleChangeQuotation(e)} />
                    <hr></hr>

                    <label>Celular:</label>
                    <input type="text" className="form-control" id="celular" name="celular" value={quotation.celular}  onChange={(e) => handleChangeQuotation(e)} />
                    <hr></hr>
                    

                    <label htmlFor="inputState" className="form-label">Origen</label>
                    <select id="origin" className="form-select" onChange={(e) => handleChangeQuotation(e)} name="origen" value={quotation.origen}>
                        <option selected={true} disabled={true}>Selecciona</option>
                        {locations.length?
                        locations.map(location => (<option key={location.id} value={location.id} name="origen">{location.nombre}</option>)):null}
                    </select>
                    <hr></hr>
                    
                    
                    <label htmlFor="inputState" className="form-label">Destino</label>
                    <select id="arrival" className="form-select" onChange={(e) => handleChangeQuotation(e)} name="destino" value={quotation.destino}>
                        <option selected={true} disabled={true}>Selecciona</option>
                        {locations.length?
                        locations.map(location => (<option key={location.id} value={location.id} name="destino">{location.nombre}</option>)):null}
                    </select>
                    <hr></hr>
                    
                    <label>Fecha de salida:</label>
                    <input type="date" className="form-control" id="departureDate" name="fechaSalida" value={quotation.fechaSalida} onChange={(e) => handleChangeQuotation(e)}/>
                    <hr></hr>
                    
                    <label>Fecha de llegada:</label>
                    <input type="date" className="form-control" id="arriveDate" name="fechaLlegada" value={quotation.fechaLlegada} onChange={(e) => handleChangeQuotation(e)}/>
                    <hr></hr>
                    
                    <label htmlFor="inputState" className="form-label">Vehiculo</label>
                    <select id="vehicle" className="form-select" onChange={(e) => handleChangeQuotation(e)} name="vehiculo" value={quotation.vehiculo}>
                        <option selected={true} disabled={true}>Selecciona</option>
                        {vehicles.length?
                        vehicles.map(vehicle => (<option type="number" key={vehicle.id} value={vehicle.id} name="vehiculo">{vehicle.nombre}</option>)):null}
                    </select>
                    <hr></hr>

                    <label>Costo total:</label>
                    <div className="input-group">
                    <div className="input-group-text">$</div>
                    <input type="number" className="form-control" id="cost" value={quotation.costo} name="costo" onChange={(e) => handleChangeQuotation(e)} />
                    </div>
                    <br></br>
                    <button type='submit' onClick={(e) => submitQuotation(e)} className="btn btn-warning">Editar<span className="fas fa-pen m-2" disabled={true}></span></button>
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