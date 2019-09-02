import React, { Component } from 'react'



class FormularioGeneral extends Component {
    render() {
        return (
            <div className="card mx-auto">
                <div className="card-body">
                    <h2 className="card-title font-weight-normal mb-5 pl-2 pr-3">Ingrese cada uno de los campos</h2>
                   
                    <form className="form-group">
                    
                    <label>Ingrese el tipo de evento:</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Evento Deportivo"
                    name="Evento"
                    />
                     <label>lorem impsum</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Evento Deportivo"
                    name="Evento"
                    />
                     <label>lorem impsum</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Evento Deportivo"
                    name="Evento"
                    />
                    </form>
                </div>
            </div>
        )
    }
}

export default FormularioGeneral;
