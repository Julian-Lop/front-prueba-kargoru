import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {getAllQuotations,deleteQuotation} from '../Redux/Actions/index'
import '../css/index.css'
import { useEffect,useState } from 'react'


export default function QuotationTable(){

    const dispatch = useDispatch()

    const quotations = useSelector((state) => state.quotations)
    const [warning, setwarning] = useState(false)
    const [id,setid] = useState()

    useEffect(()=>{
        dispatch(getAllQuotations())
    },[])

    const modalWarning = (id) => {
        setwarning(!warning)
        setid(Number(id))
    } 

    const deleteQ = async () => {
        await dispatch(deleteQuotation(id))
        await dispatch(getAllQuotations())
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
                        {quotations.length?quotations.map(quotation => (
                            <tr key={quotation.id}>
                                <th scope="row">{quotation.id}</th>
                                <td>{quotation.usuario.nombre}</td>
                                <td>{quotation.usuario.email}</td>
                                <td>
                                    <Link to={'/quoteview/'+quotation.id} className='view'><i className="fas fa-eye m-2"></i></Link>
                                    <Link to={'/editquote/'+quotation.id} className='edit'><i className="fas fa-pen m-2"></i></Link>
                                    <i className="fas fa-trash m-2" onClick={() => modalWarning(quotation.id)}></i>
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