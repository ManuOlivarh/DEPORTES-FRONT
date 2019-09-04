
import React, {Component} from 'react'
import './bootstrap.min.css'
import Header from './components/Header-form';
import FormularioGeneral from './components/FormularioGeneral';
import Nav from './components/Nav';
import ListarEventos from './components/ListarEventos';
import'./App.scss';



class App extends Component {
  
  state={}
  render() {
    return (

      <div className="bg-image">

      <div>

      
      </div>

      <div className="container">
        <Header titulo='CREACION DE EVENTOS DEPORTIVOS'/>


        
        <div className="row">
        <div className="mx-auto">
              <ListarEventos/>
        </div>
        </div>
    
      </div>
      </div>
    )
  }
}

export default App;