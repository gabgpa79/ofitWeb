import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Input, Label
} from "reactstrap"
import { stylesErp, paises, getCiudades } from '../../../helpers'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select'

import CategoriaSelect from '../../Categorias/components/CategoriaSelect'
import MarcaSelect from '../../Marcas/components/MarcaSelect'

const defaultVal = (options, valor) =>{
  return options.filter(item =>
      item.value === valor
    )

}

function ArticuloForm () {     
  const dispatch = useDispatch()
  const [ciudades, setCiudades] = useState([])    
  const item = useSelector(state => state.clientes.item)  
       
  const changeHandler = event => {    
  const { name, value } = event.target  
   dispatch(crudActions.changeValue('CLIENTES_CHANGE',name,value))  
 }

 const changesHandler = prop => event => {                     
    const { value } = event ? event : '' 
    dispatch(crudActions.changeValue('CLIENTES_CHANGE',prop,value))  
    
 }

 const paisHandler = prop => event => { 
  const { value } = event ? event : '0'  
  dispatch(crudActions.changeValue('CLIENTES_CHANGE',prop,value))
  setCiudades(getCiudades(value))
  
}

const submitHandle = event => {       
    event.preventDefault()    
    if(item.id)
    {
      dispatch(crudActions.setUpdatePutUnit('clientes',item))            
    }else{
      dispatch(crudActions.setCreatePostUnit('CLIENTES_ADD','clientes',item))      
    }    
 }

         
  return (    
      <div className="herramientas">         
        <h6>Registro de Clientes</h6>                        
           <Form onSubmit={ submitHandle}>  
            <h5>Datos de contanto </h5>
            <div className="sub-form">              
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Nombres :</Label>
                    </Col>                    
                    <Col md="5" className="subcajas">
                      <FormGroup>                          
                          <Input
                            id="name"
                            type="text"
                            name="name"                                                        
                            value={item.name}
                            onChange={changeHandler}                                                   
                          />
                      </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>Código :</Label>
                    </Col>
                    <Col md="3" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type="text"
                            name="codigo"
                            id="codigo"                            
                            value={item.codigo}
                            onChange={ changeHandler }                                    
                          />
                      </FormGroup>
                    </Col>                    
                </Row>
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Categoría :</Label>
                    </Col>
                    <Col md="2" className="subcajas">
                      <FormGroup>                          
                        <CategoriaSelect/>  
                      </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>Linea :</Label>
                    </Col>
                    <Col md="2" className="subcajas">
                      <FormGroup>                          
                          
                      </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>Marca :</Label>
                    </Col>
                    <Col md="2" className="subcajas">
                      <FormGroup>                          
                        <MarcaSelect/>  
                      </FormGroup>
                    </Col>                                                                             
                </Row>

                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Descripción :</Label>
                    </Col>
                    <Col md="10" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type="text"
                            name="descripcion"
                            id="descripcion"                            
                            value={item.descripcion}
                            onChange={ changeHandler }                                    
                          />
                      </FormGroup>
                    </Col>                                                                             
                </Row>

                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Email :</Label>
                    </Col>
                    <Col md="5" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type="text"
                            name="email"
                            id="email"                            
                            value={item.email}
                            onChange={ changeHandler }                                    
                          />
                      </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>Tipo :</Label>
                    </Col>   
                    <Col md="3" className="subcajas">
                      <FormGroup>                          
                      
                      </FormGroup>
                    </Col>                                                         
                </Row>
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>País :</Label>
                    </Col>
                    <Col md="5" className="subcajas">
                    <FormGroup>                          
                    <Select                                                               
                          defaultValue={paises[0]}
                          name="pais"    
                          id="pais"                    
                          options={paises}      
                          isClearable={true}                          
                          value={defaultVal(paises,item.pais)} 
                          onChange={ paisHandler('pais')} 
                          styles={stylesErp} 
                          />
                    </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>Ciudad :</Label>
                    </Col>   
                    <Col md="3" className="subcajas">
                    <FormGroup>                          
                    <Select                                                               
                          defaultValue={ciudades[0]}
                          name="ciudad"    
                          id="ciudad"                    
                          options={ciudades}      
                          isClearable={true}                          
                          value={defaultVal(ciudades,item.ciudad)} 
                          onChange={ changesHandler('ciudad') } 
                          styles={stylesErp} 
                          />
                    </FormGroup>
                    </Col>                                                         
                </Row>
            </div>      
            <h5>Datos Facturación</h5>            
            <div className="sub-form">              
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Nombre :</Label>
                    </Col>
                    <Col md="5" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type="text"
                            name="facturacionNombre"
                            id="facturacionNombre"                            
                            value={item.facturacionNombre}
                            onChange={ changeHandler }                                    
                          />
                    </FormGroup>
                    </Col>                   
                    <Col md="2" className="subcajas">
                      <Label>Nit :</Label>
                    </Col>   
                    <Col md="3" className="subcajas">
                      <FormGroup>                                                
                          <Input
                            type="text"
                            name="facturacionNit"
                            id="facturacionNit"                            
                            value={item.facturacionNit}
                            onChange={ changeHandler }                                    
                          />                    
                      </FormGroup>
                    </Col>                                                              
                </Row>


                <Row>
                    <Col md="2" className="subcajas">                    
                       <label>Dirección :</label>                          
                    </Col>                    
                    <Col md="5" className="subcajas">
                    <FormGroup>                                                
                          <Input
                            type="text"
                            name="facturacionDireccion"
                            id="facturacionDireccion"                            
                            value={item.facturacionDireccion}
                            onChange={ changeHandler }                                    
                          />                    
                      </FormGroup>
                    </Col>                                                            
                </Row>                 
                </div>    
            <h5>Datos Financieros</h5>            
            <div className="sub-form">              
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Deuda máxima :</Label>
                    </Col>
                    <Col md="2" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type="number"
                            name="deudaMaxima"
                            id="deudaMaxima"                            
                            value={item.deudaMaxima}
                            onChange={ changeHandler }                                    
                          />
                    </FormGroup>
                    </Col>                   
                    <Col md="2" className="subcajas">
                      <Label>Deuda actual :</Label>
                    </Col>   
                    <Col md="2" className="subcajas">
                      <FormGroup>                                                
                          <Input
                            type="number"
                            name="deudaActual"
                            id="deudaActual"
                            value={item.deudaActual}
                            onChange={ changeHandler }                                    
                          />                    
                      </FormGroup>
                    </Col>                                                              
                </Row>                
                </div>   
                <div className="sub-form mt-2">                              
                  <Row>
                    <Col md="10" className="subcajas">
                    </Col>  
                    <Col md="2" className="subcajas">
                      <Button 
                      type="submit"
                      className={item.id ?"btn-md btn-warning" : "btn-md btn-info"}>
                        <FontAwesomeIcon icon={faSave} />  
                          {' '} {item.id ? " Actualizar" : " Guardar"}
                      </Button>
                    </Col>                               
                  </Row>   
                </div>                   
            </Form>                              
        </div>               
  );
}

export default ArticuloForm