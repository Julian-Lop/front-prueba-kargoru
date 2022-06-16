import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {getAllQuotes,deleteQuote} from '../Redux/Actions/index'
import '../css/index.css'
import { useEffect,useState } from 'react'


export default function QuotesTable(){

    const dispatch = useDispatch()

    const quotes = useSelector((state) => state.quotes)
    const [warning, setwarning] = useState(false)
    const [id,setid] = useState()

    useEffect(()=>{
        dispatch(getAllQuotes())
    },[])

    const modalWarning = (id) => {
        setwarning(!warning)
        setid(Number(id))
    } 

    const deleteQ = async () => {
        await dispatch(deleteQuote(id))
        await dispatch(getAllQuotes())
        return setwarning(!warning)
    }

    return(
        <div className="QuotesTable">
            <div className='container'>
                <table className="table">
                    <thead className='table-dark'>
                        <tr>
                        <th scope="col">ID Cotización</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {quotes.length?quotes.map(quote => (
                            <tr key={quote.id}>
                                <th scope="row">{quote.id}</th>
                                <td>{quote.usuario.nombre}</td>
                                <td>{quote.usuario.email}</td>
                                <td>
                                    <Link to={'/quoteview/'+quote.id} className='view'><i className="fas fa-eye m-2"></i></Link>
                                    <Link to={'/editquote/'+quote.id} className='edit'><i className="fas fa-pen m-2"></i></Link>
                                    <i className="fas fa-trash m-2" onClick={() => modalWarning(quote.id)}></i>
                                </td>
                            </tr>
                        )):null}
                    </tbody>
                </table>
                {warning?<div className='fondo'>
                <div className='alerta'>
                    <h4>Desea eliminar la cotización id : {id}</h4>
                    <button className="btn btn-danger m-2" onClick={() => deleteQ()}>Eliminar<span className="fas fa-trash m-2"></span></button>
                    <button className="btn btn-dark m-2" onClick={() => modalWarning()}>Salir<span class="fas fa-times m-2"></span></button>
                    </div>
                </div>:null}
            </div>
        </div>
    )
}