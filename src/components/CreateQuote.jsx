import {getAllLocation, getAllVehicles, createUser, createQuote} from '../Redux/Actions/index'
import '../css/index.css'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

export default function CreateQuote(){
    const dispatch = useDispatch() 

    const locations = useSelector((state) => state.locations)
    const vehicles = useSelector((state) => state.vehicles)

    const [quote, setquote] = useState(
        {
            email:'',
            origen:'',
            destino:'',
            fechaSalida:'',
            fechaLlegada:'',
            costo:'',
            vehiculo:''
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
        if(e.target.name === 'email') setquote({...quote, [e.target.name]:e.target.value})
        setuser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const handleChangeQuote = (e) => {
        setquote({
            ...quote,
            [e.target.name] : Number(e.target.value) && e.target.name !== 'celular'? Number(e.target.value): e.target.value
        })
    }

    const checkCost = (e) => {
        e.preventDefault()
        if(quote.email && quote.origen && quote.destino && 
            quote.fechaSalida && quote.fechaLlegada && quote.vehiculo){
            return setquote({...quote,costo:Math.floor(Math.random(100)*500000)})
        }
        return alert('Hay campos sin llenar')
    }

    const submitQuote = async (e) => {
        e.preventDefault()
        if(quote.email && quote.origen && quote.destino && 
            quote.fechaSalida && quote.fechaLlegada && 
            quote.vehiculo && quote.costo && user.nombre
            && user.email && user.celular){
            await dispatch(createUser(user))
            await dispatch(createQuote(quote))
            setquote({
                email:'',
                origen:'',
                destino:'',
                fechaSalida:'',
                fechaLlegada:'',
                costo:'',
                vehiculo:''
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
        <div className="CreateQuote">
            <div className="container" >
                <h2>Cotización</h2>
                <form className="row g-3" onSubmit={(e) => submitQuote(e)}>
                    <div className="col-md-6">
                        <label id='name' className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="inputEmail4" name='nombre' value={user.nombre} onChange={(e)=> handleChangeUser(e)}/>
                    </div>
                    <div className="col-md-6">
                        <label id='cellphone' className="form-label">Celular</label>
                        <input type="text" className="form-control" id="inputPassword4" name='celular' value={user.celular} onChange={(e)=> handleChangeUser(e)}/>
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Email</label>
                        <label class="visually-hidden" for="specificSizeInputGroupUsername">Username</label>
                        <div class="input-group">
                        <div class="input-group-text">@</div>
                        <input type="email" class="form-control" id="email" placeholder="example@gmail.com" name='email' value={user.email} onChange={(e)=> handleChangeUser(e)}/>
                    </div>
                    </div>
                    <div className="col-md-6">
                        <label for="inputState" className="form-label">Origen</label>
                        <select id="origin" className="form-select" onChange={(e) => handleChangeQuote(e)} name="origen">
                            <option selected={true} disabled={true}>Selecciona</option>
                            {locations.length?
                            locations.map(location => (<option key={location.id} value={location.id} name="origen">{location.nombre}</option>)):null}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label for="inputState" className="form-label">Destino</label>
                        <select id="arrival" className="form-select" onChange={(e) => handleChangeQuote(e)} name="destino">
                            <option selected={true} disabled={true}>Selecciona</option>
                            {locations.length?
                            locations.map(location => (<option key={location.id} value={location.id} name="destino">{location.nombre}</option>)):null}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label for="inputCity" className="form-label">Fecha salida</label>
                        <input type="date" className="form-control" id="departureDate" onChange={(e) => handleChangeQuote(e)} name="fechaSalida"/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputCity" className="form-label">Fecha llegada</label>
                        <input type="date" className="form-control" id="arrivalDate" onChange={(e) => handleChangeQuote(e)} name="fechaLlegada"/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label">Vehiculo</label>
                        <select id="vehicle" className="form-select" onChange={(e) => handleChangeQuote(e)} name="vehiculo">
                            <option selected={true} disabled={true}>Selecciona</option>
                            {vehicles.length?
                            vehicles.map(vehicle => (<option type="number" key={vehicle.id} value={vehicle.id} name="vehiculo">{vehicle.nombre}</option>)):null}
                        </select>
                    </div>
                    <div className="col-8">
                        <button onClick={(e) => checkCost(e) } className="btn btn-info">consultar costo</button>
                    </div>
                    <div className="col-4">
                        <h4>
                           $ {quote.costo}
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