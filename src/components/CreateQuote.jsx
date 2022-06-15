import '../css/index.css'

export default function CreateQuote(){
    return(
        <div className="CreateQuote ">
            <div className="container">
                <form className="row g-3">
                    <div className="col-md-6">
                        <label id='name' className="form-label">Nombre</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6">
                        <label id='cellphone' className="form-label">Celular</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Email</label>
                        <label class="visually-hidden" for="specificSizeInputGroupUsername">Username</label>
                        <div class="input-group">
                        <div class="input-group-text">@</div>
                        <input type="text" class="form-control" id="email" placeholder="example@gmail.com"/>
                    </div>
                    </div>
                    <div className="col-md-6">
                        <label for="inputState" className="form-label">Origen</label>
                        <select id="origin" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label for="inputState" className="form-label">Destino</label>
                        <select id="arrival" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label for="inputCity" className="form-label">Fecha salida</label>
                        <input type="date" className="form-control" id="departureDate"/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputCity" className="form-label">Fecha llegada</label>
                        <input type="date" className="form-control" id="arrivalDate"/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label">Vehiculo</label>
                        <select id="vehicle" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="terms"/>
                        <label className="form-check-label" for="gridCheck">
                            Acepta los terminos
                        </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Enviar cotización</button>
                    </div>
                </form>
            </div>    
        </div>
    )
}