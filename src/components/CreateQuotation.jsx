import {getAllLocation, getAllVehicles, createUser, createQuotation} from '../Redux/Actions/index'
import '../css/index.css'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

export default function CreateQuotation(){
    const dispatch = useDispatch() 

    const locations = useSelector((state) => state.locations)
    const vehicles = useSelector((state) => state.vehicles)

    const [quotation, setquotation] = useState(
        {
            email:'',
            origen:'',
            destino:'',
            fechaSalida:'',
            costo:'',
            vehiculo:'',
            detalleCarga:''
        }
    )

    const [user, setuser] = useState({
        nombre:'',
        email:'',
        celular:''
    })

    useEffect(()=>{
        dispatch(getAllLocation())
        dispatch(getAllVehicles())
    },[])

    const handleChangeUser = (e) => {
        if(e.target.name === 'email') setquotation({...quotation, [e.target.name]:e.target.value})
        setuser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const handleChangeQuotation = (e) => {
        setquotation({
            ...quotation,
            [e.target.name] : Number(e.target.value) && e.target.name !== 'celular'? Number(e.target.value): e.target.value
        })
    }

    const checkCost = (e) => {
        e.preventDefault()
        if(quotation.email && quotation.origen && quotation.destino && 
            quotation.fechaSalida && quotation.vehiculo && quotation.detalleCarga){
            return setquotation({...quotation,costo:Math.floor(Math.random(100)*500000)})
        }
        return alert('Hay campos sin llenar')
    }

    const submitQuotation = async (e) => {
        e.preventDefault()
        if(/\s/.test(user.nombre) || /\s/.test(user.celular) || 
        /\s/.test(user.email)) return alert('espacios en blanco')

        if(/\s/.test(quotation.origen) || /\s/.test(quotation.destino) || 
        /\s/.test(quotation.fechaSalida) || /\s/.test(quotation.costo) || 
        /\s/.test(quotation.vehiculo))return alert('espacios en blanco')


        if(quotation.email && quotation.origen && quotation.destino && 
            quotation.fechaSalida && quotation.vehiculo && 
            quotation.costo && quotation.detalleCarga
            && user.nombre && user.email && user.celular){
            await dispatch(createUser(user))
            await dispatch(createQuotation(quotation))
            setquotation({
                email:'',
                origen:'',
                destino:'',
                fechaSalida:'',
                costo:'',
                vehiculo:'',
                detalleCarga:''
            })

            setuser({
                nombre:'',
                email:'',
                celular:''
            })
            return alert('Cotización creada exitosamente')
        }
        return alert('hay campos sin llenar o no se ha consultado el costo')
    }

    return(
        <div className="createQuotation">
            <div className="container" >
                <h2>Cotización</h2>
                <form className="row g-3" onSubmit={(e) => submitQuotation(e)}>
                    <div className="col-md-6">
                        <label id='name' className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" name='nombre' value={user.nombre} onChange={(e)=> handleChangeUser(e)}/>
                    </div>
                    <div className="col-md-6">
                        <label id='cellphone' className="form-label">Celular</label>
                        <input type="text" className="form-control" id="celular" name='celular' value={user.celular} onChange={(e)=> handleChangeUser(e)}/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Email</label>
                        <label className="visually-hidden" htmlFor="specificSizeInputGroupUsername">Username</label>
                        <div className="input-group">
                        <div className="input-group-text">@</div>
                        <input type="email" className="form-control" id="email" placeholder="example@gmail.com" name='email' value={user.email} onChange={(e)=> handleChangeUser(e)}/>
                    </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputState" className="form-label">Origen</label>
                        <select id="origin" className="form-select" onChange={(e) => handleChangeQuotation(e)} name="origen">
                            <option selected={true} disabled={true}>Selecciona</option>
                            {locations.length?
                            locations.map(location => (<option key={location.id} value={location.id} name="origen">{location.nombre}</option>)):null}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputState" className="form-label">Destino</label>
                        <select id="arrival" className="form-select" onChange={(e) => handleChangeQuotation(e)} name="destino">
                            <option selected={true} disabled={true}>Selecciona</option>
                            {locations.length?
                            locations.map(location => (<option key={location.id} value={location.id} name="destino">{location.nombre}</option>)):null}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputCity" className="form-label">Fecha salida</label>
                        <input type="date" className="form-control" id="departureDate" onChange={(e) => handleChangeQuotation(e)} name="fechaSalida"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">Tipo de transporte</label>
                        <select id="vehicle" className="form-select" onChange={(e) => handleChangeQuotation(e)} name="vehiculo">
                            <option selected={true} disabled={true}>Selecciona</option>
                            {vehicles.length?
                            vehicles.map(vehicle => (<option type="number" key={vehicle.id} value={vehicle.id} name="vehiculo">{vehicle.nombre}</option>)):null}
                        </select>
                    </div>
                    <div className="col-md-12">
                        <label id='name' className="form-label">Detalle de Carga</label>
                        <input type="text" className="form-control" id="detalleCarga" name='detalleCarga' value={quotation.detalleCarga} onChange={(e) => handleChangeQuotation(e)}/>
                    </div>
                    <div className="col-8">
                        <button onClick={(e) => checkCost(e) } className="btn btn-info">consultar costo</button>
                    </div>
                    <div className="col-4">
                        <h4>
                           $ {quotation.costo}
                        </h4>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Enviar cotización</button>
                    </div>
                </form>
                <br></br>
            </div>    
        </div>
    )
}