import React, { Component } from 'react'
import '../App.scss'
import FormularioGeneral from './FormularioGeneral';



class ListarEventos extends Component {
    

    constructor(props){
       
       super (props)
        this.state={
            show:false
        };

        this.toggle = this.toggle.bind(this)
    }
    

    toggle=()=>{
        const{show}=this.state;
        this.setState({show : !show});

    }

    
    render() {
        return (
            <div>
                
             <div className="crud-wrap">
             <h2 className="mb-4">Manejar Eventos</h2>
                
                    
                  
   
                    <div className="col sm-6">
                    <input type="text" id="buscar" className="form-control" placeholder="Búsqueda" name="search"/>
                    <button type="button" id="but" className="btn" onClick={this.toggle}><span class="fa fa-plus" ></span> Crear</button>
                     <button type="button" id="but" className="btn" ><span class="fa fa-trash-o" ></span> Eliminar</button>
                    
                    </div>
        
            <div className="container-table"> 
            <table className="table">
                <thead>
                    <th><input type="checkbox"/></th>
                    <th>ID</th>
                    <th>Deportes</th>
                    <th>Version</th>
                    <th>Fecha</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>
                  
                        <td><input type="checkbox"/></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <small>Edit</small>
                        </td>
                        <td>
                            <small>Delete</small>
                        </td>
    
                </tbody>
            </table>
      

            </div>
            </div>

            <div className="formu">{this.state.show && <FormularioGeneral/>}</div>           
        </div>

        )
    }
}

export default ListarEventos