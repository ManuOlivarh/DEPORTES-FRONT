import React, { Component } from 'react'
import '../App.scss'



class ListarEventos extends Component {
    render() {
        return (
            <div>
                
             <div className="crud-wrap">
            <div className="col-md-12">
                <div className="">
                    <input type="text" className="form-control" placeholder="Búsqueda" name="search"/>
                  
   
                    <div className="buttons-area">
   
                    <button type="button" className="btn btn-info" ><span className="image-button"><i className="fas fa-plus-circle"></i></span></button>
                    <button type="button" className="btn btn-info"><span></span></button>
                </div>
            </div>
            <table className="table">
                <thead>
                    <th><input type="checkbox"/></th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Birthday</th>
                    <th>Phone</th>
                    <th>Created Time</th>
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