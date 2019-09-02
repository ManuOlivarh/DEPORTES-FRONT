
import React, {Component} from 'react'
import './bootstrap.min.css'
import Header from './components/Header-form';
import FormularioGeneral from './components/FormularioGeneral';




class App extends Component {
  
  state={}
  render() {
    return (

      <div className="bg-image">
      <div className="container">
        <Header titulo='CREACION DE EVENTOS DEPORTIVOS'/>


        
        <div className="row">
        <div className="mx-auto">
              <FormularioGeneral/>
        </div>
        </div>
    
      </div>
      </div>
    )
  }
}

export default App;