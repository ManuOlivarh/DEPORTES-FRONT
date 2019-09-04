import React, { Component } from 'react'
import '../App.scss'



class ListarEventos extends Component {
    render() {
        return (
            <div>
                
             <div className="crud-wrap">
                <div className="container mb-5">
                    <input type="text" className="form-control" placeholder="Búsqueda" name="search"/>
                  
   
                    <div className="button-box">
                    <button type="button" id="but" className="btn"><span class="fa fa-plus" ></span> Crear</button>
                <button type="button" id="but" className="btn" ><span class="fa fa-trash-o" ></span> Eliminar</button>
                    
                    </div>
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

            </div>
           
        )
    }
}

export default ListarEventos