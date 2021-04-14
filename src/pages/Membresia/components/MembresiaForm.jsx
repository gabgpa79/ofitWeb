import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Label
} from "reactstrap"
import { stylesErp } from '../../../helpers'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select'
import DatePicker from 'react-date-picker';

import PaqueteSelect from '../../Paquetes/components/PaqueteSelect'

const defaultVal = (options, valor) =>{
  return options.filter(item =>
      item.value === valor
    )

}

const tipos =  [                                
                {"value":"normal","label":"normal"},
                {"value":"canje","label":"canje"},                
                {"value":"prueba","label":"prueba"},                
                ];
               

function add_months(dt, n) 
 {

   return new Date(dt.setMonth(dt.getMonth() + n));      
 }


 function getFecha(today) 
 {
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var tt = yyyy + '-' + mm + '-' + dd;    
    return tt
 }                



function MembresiaForm () {     
  const dispatch = useDispatch()  
  const item = useSelector(state => state.membresias.item) 
  const paquete = useSelector(state => state.paquetes.item)  
  const cliente = useSelector(state => state.clientes.item)  

   const [value, onChange] = useState(new Date());
   var d = new Date();
   const [values, onChanges] = useState(add_months(d,1));
       
 const changesHandler = prop => event => {                     
    const { value } = event ? event : '' 
    dispatch(crudActions.changeValue('MEMBRESIAS_CHANGE',prop,value))  
    
 }


const submitHandle = event => {       
    event.preventDefault()    
    
    
    /*console.log(item)
    console.log(user)
    console.log(paquete)*/


    let dat = item
    dat.orden = '1'
    dat.num = 1
    dat.ingresos = parseInt(paquete.valor)
    dat.intros = 30
    dat.ivigencia = getFecha(value)
    dat.fvigencia = getFecha(values)
    dat.paqueteId = paquete.id
    dat.clienteId = cliente.id
    let us = JSON.parse(localStorage.getItem('user')) 
    dat.usuarioId = us.id

    
    console.log(dat)
     dispatch(crudActions.setCreatePostList('MEMBRESIAS_DATA','membresias',item))  
     dispatch({ type: 'RESET_MEMBRESIA' });
    /*if(item.id)
    {
      dispatch(crudActions.setUpdatePutList('clientes',item))            
    }else{
      dispatch(crudActions.setCreatePostList('MEMBRESIAS_ADD','clientes',item))      
    } */   
 }


         
  return (    
         <Row>
          <Col md={12}>
           <Form onSubmit={ submitHandle}>              
            <div className="sub-form">              
                <Row>
                  <Col md="2" className="subcajas">
                      <Label>Paquete :</Label>
                    </Col>   
                    <Col md="4" className="subcajas">
                      <FormGroup>                          
                      <PaqueteSelect/>
                      </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>Tipo :</Label>
                    </Col>
                    <Col md="4" className="subcajas">
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
                      <Label>F.Inicio :</Label>
                    </Col>
                    <Col md="4" className="subcajas">
                    <FormGroup>                          
                    <DatePicker
                        onChange={onChange}
                        value={value}
                      />
                    </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <Label>F.Vigencia :</Label>
                    </Col>   
                    <Col md="4" className="subcajas">
                    <FormGroup>                          
                      <DatePicker
                        onChange={onChanges}
                        value={values}
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
          </Row>                         
  );
}

export default MembresiaForm