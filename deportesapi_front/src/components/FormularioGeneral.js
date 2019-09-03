import React, { Component } from 'react'



class FormularioGeneral extends Component {
    render() {
        return (
            <div className="card mx-auto">
                <div className="card-body">
                    <h2 className="card-title font-weight-normal mb-5 pl-2 pr-3">Ingrese cada uno de los campos</h2>
                   
                    <form className="form-group">
                    
                    <label>Ingrese el nombre del de evento:</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Evento Deportivo"
                    name="Evento"
                    />
                     <label className="mt-3">Ingrese la fecha:</label>
                    <input
                    type="date"
                    className="form-control"
                    name="fecha"
                    />
                     <label className="mt-3">Lorem ipsum dolor sit amet</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="consectetur adipiscing elit"
                    name="input-libre"
                    />
                    </form>
                </div>
            </div>
        )
    }
}

export default FormularioGeneral;
