import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {getAllQuotes} from '../Redux/Actions/index'
import '../css/index.css'
import { useEffect } from 'react'


export default function QuotesTable(){

    const dispatch = useDispatch()

    const quotes = useSelector((state) => state.quotes)

    useEffect(()=>{
        dispatch(getAllQuotes())
    },[])

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
                            <tr>
                                <th scope="row">{quote.id}</th>
                                <td>{quote.usuario.nombre}</td>
                                <td>{quote.usuario.email}</td>
                                <td>
                                    <Link to={'/quoteview/'+quote.id} className='view'><i className="fas fa-eye m-2"></i></Link>
                                    <Link to={'/quoteview/'+quote.id} className='edit'><i className="fas fa-pen m-2"></i></Link>
                                    <i className="fas fa-trash m-2"></i>
                                </td>
                            </tr>
                        )):null}
                    </tbody>
                </table>
            </div>
        </div>
    )
}