import React  from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Input, Label
} from "reactstrap"
import { stylesErp, paises  } from '../../../helpers'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select'
import ClienteImagen from './ClienteImagen'

const defaultVal = (options, valor) =>{
  return options.filter(item =>
      item.value === valor
    )

}

const tipos =  [                                
                {"value":"personal","label":"personal"},
                {"value":"empresarial","label":"empresarial"},                
                ];

function ClienteForm () {     
  const dispatch = useDispatch()
   
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
         <Row>
          <Col md={9}>
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
                            id="nombres"
                            type="text"
                            name="nombres"                                                        
                            value={item.nombres}
                            onChange={changeHandler}                                                   
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
                            name="nit"
                            id="nit"                            
                            value={item.nit}
                            onChange={ changeHandler }                                    
                          />
                      </FormGroup>
                    </Col>                    
                </Row>
                <Row>
                    <Col md="2" className="subcajas">
                      <Label>Dirección :</Label>
                    </Col>
                    <Col md="5" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type="text"
                            name="direccion"
                            id="direccion"                            
                            value={item.direccion}
                            onChange={ changeHandler }                                    
                          />
                      </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>Teléfono :</Label>
                    </Col>   
                    <Col md="3" className="subcajas">
                      <FormGroup>                          
                          <Input
                            id="telefono"
                            type="text"
                            name="telefono"                                                        
                            value={item.telefono}
                            onChange={changeHandler}                                                   
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
                      <Select                                                               
                          defaultValue={tipos[0]}
                          name="tipo"    
                          id="tipo"                    
                          options={tipos}      
                          isClearable={true}                          
                          value={defaultVal(tipos,item.tipo)}                                                                                                                                
                          onChange={ changesHandler('tipo')} 
                          styles={stylesErp} 
                          />
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
                      <Label>CI :</Label>
                    </Col>   
                    <Col md="3" className="subcajas">
                    <FormGroup>                          
                      <Input
                            type="text"
                            name="ci"
                            id="ci"                            
                            value={item.ci}
                            onChange={ changeHandler }                                    
                          />
                    </FormGroup>
                    </Col>                                                         
                </Row>

                <Row>
                    <Col md="5" className="subcajas">
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
            </Col>
            <Col md={3} className="subcajas">                          
              <ClienteImagen/>
            </Col>
          </Row>  
        </div>               
  );
}

export default ClienteForm