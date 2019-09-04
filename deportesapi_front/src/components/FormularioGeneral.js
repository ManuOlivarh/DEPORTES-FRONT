import React, { Component } from 'react'
import '../App.scss'


class FormularioGeneral extends Component {
    render() {
        return (
            <div>
               <div class="login-wrap">
  <h2>Crear nuevo evento</h2>
  
  <div class="form">
    <input type="text" placeholder="Evento nuevo" name="un" />
    <input type="date" placeholder="Password" name="pw" />
    <button> Crear evento</button>
   </div>
</div>
            </div>
        )
    }
}

export default FormularioGeneral;
