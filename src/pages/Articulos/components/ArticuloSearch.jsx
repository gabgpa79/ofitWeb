import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,
  Col,
  Button, Form, FormGroup, Input, Label
} from "reactstrap"
import { stylesErp } from '../../../helpers'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select'

const defaultVal = (options, valor) =>{
  return options.filter(item =>
      item.value === valor
    )

}

function ArticuloSearch () {     
  const dispatch = useDispatch()
  const [item, setItem] = useState({
    "name":"",
    "codigo":"",    
    "page":1,
    "num":12,
    "prop":"name",
    "orden":"ASC"    
  });

  const changeHandler = event => {    
  const { name, value } = event.target  
  setItem({
    ...item,
    [name]: value
  })  
 }

 const changesHandler = event => {          
    const { value } = event ? event : '0' 
    setItem({
      ...item,
      tipo: value
    })  
  
 }

 const submitHandle = event => {       
    event.preventDefault()    
    dispatch(crudActions.searchPostList('ARTICULOS_DATA','articulos',item))  

 }
          
  return (    
      <div className="herramientas">          
           <div className="caja">
                <Row>
                  <Col md="10" className="cajas text-white">Lista de articulos</Col>
                </Row>                                
           </div>
           <div className="subcaja">
           <Form onSubmit={ submitHandle}>                   
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
                            placeholder="--todos--"
                            value={item.name}
                            onChange={changeHandler}                                                   
                          />
                      </FormGroup>
                    </Col>
                    <Col md="1" className="subcajas">
                      <Label>Cod. :</Label>
                    </Col>
                    <Col md="3" className="subcajas">
                    <FormGroup>                          
                          <Input
                            type="text"
                            name="codigo"
                            id="codigo"
                            placeholder="--todos--"
                            value={item.codigo}
                            onChange={ changeHandler }                                    
                          />
                      </FormGroup>
                    </Col>
                    <Col md="1" className="subcajas">
                      <Button className="btn-md btn-info">
                       <FontAwesomeIcon icon={faSearch} />                        
                       </Button>
                    </Col>                    
                </Row>                
            </Form>                   
           </div>
        </div>               
  );
}

export default ArticuloSearch