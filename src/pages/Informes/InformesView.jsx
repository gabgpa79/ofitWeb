import React, { useEffect, useState } from 'react';
import { crudActions } from '../../actions/crud.actions'
import { useDispatch } from 'react-redux'

import DatePicker from 'react-date-picker';
import Clientes  from './Clientes';
import { Link } from "react-router-dom";
import ReactToPrint from 'react-to-print';
import {  

  Row,
  Col,  
  Nav,
  NavItem,
  NavLink,
  FormGroup,
  Label,
  Form,
  Button,
  Input
} from "reactstrap"
import classnames from 'classnames';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faList, faSave, faTags } from "@fortawesome/free-solid-svg-icons";
import { stylesErp, paises  } from '../../helpers'



function InformesView () {     
  const dispatch = useDispatch()
    const [activeTab, setActiveTab] = useState('1');    
    const [value1, onChange1] = useState(new Date());    
    const [value2, onChange2] = useState(new Date());        

  useEffect(() =>{        
    return () =>{             
        dispatch(crudActions.getReset('INFORMES_RESET'))       
        console.log('descarga')
    };
  }, [dispatch]);



 const submitHandle = event => {       
   event.preventDefault()       
   const item = {}
   item.desde = value1
   item.hasta = value2         
   dispatch(crudActions.informes('INFORMES_CLIENTES','clientes',item,value1,value2))          
   
 }
  
  return (
     <div className="content">     
    <div className="main-contenido"> 
    <Row>
      <Col className="tabs">
      <Nav tabs>                
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}>
          <FontAwesomeIcon icon={faList} />   
          {' '} Informes
          </NavLink>
      

        </NavItem>        
      </Nav>
      </Col>
    </Row>

   <Row>
      <Col md={4}>
        <Link to={`/admin/informes/`}>
          <Button className={"btn btn-success btn-xs"}>
            <FontAwesomeIcon icon={faTags} />
            { ' ' }
            Informe de Clientes
          </Button>
        </Link>
      </Col>
      <Col md={4}>
       <Link to={`/admin/imembresias/`}>
          <Button className={"btn btn-default btn-xs"}>
            <FontAwesomeIcon icon={faTags} />
            { ' ' }
            Informe de Membresias
          </Button>
        </Link>
      </Col>
      <Col md={4}>
       <Link to={`/admin/icajas/`}>
          <Button className={"btn btn-default btn-xs"}>

            <FontAwesomeIcon icon={faTags} />
            { ' ' }
            Informe de Cajas
          </Button>
        </Link>
      </Col>
    </Row>
                        





    <div className="informes">    
           <Form onSubmit={ submitHandle}>  
            <h6>Parametros </h6>
            <div className="sub-form">              
                <Row>                                        
                     <Col md="2" className="subcajas">
                      <Label>Desde :</Label>
                    </Col>   
                    <Col md="3" className="subcajas">
                    <FormGroup>                          
                      <DatePicker
                        onChange={onChange1}
                        value={value1}
                      />
                    </FormGroup>
                    </Col>
                      <Col md="2" className="subcajas">
                      <Label>Hasta :</Label>
                    </Col>   
                    <Col md="3" className="subcajas">
                    <FormGroup>                          
                      <DatePicker
                        onChange={onChange2}
                        value={value2}
                      />
                    </FormGroup>
                    </Col>
                    <Col md="2" className="subcajas">
                      <FormGroup>                          
                      <Button 
                      type="submit"
                      className="btn-md btn-info">
                        <FontAwesomeIcon icon={faSave} />  
                          {' '} Generar
                      </Button>
                      </FormGroup>  
                    </Col>                    
                </Row>
                               
            </div>                 
            
            </Form>  

    <Row>
      <Col>
        <Clientes/>
      </Col>
    </Row>
        
    </div>
    </div>
  </div> 
  );
}

export default InformesView