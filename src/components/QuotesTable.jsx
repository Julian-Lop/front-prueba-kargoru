import '../css/index.css'


export default function QuotesTable(){
    return(
        <div className="QuotesTable">
            <div className='container'>
                <table className="table">
                    <thead className='table-dark'>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr>
                        <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                                <i className="fas fa-eye m-2"></i>
                                <i className="fas fa-pen m-2"></i>
                                <i className="fas fa-trash m-2"></i>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>
                                <i className="fas fa-eye m-2"></i>
                                <i className="fas fa-pen m-2"></i>
                                <i className="fas fa-trash m-2"></i>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>
                            <i className="fas fa-eye m-2"></i>
                                <i className="fas fa-pen m-2"></i>
                                <i className="fas fa-trash m-2"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}