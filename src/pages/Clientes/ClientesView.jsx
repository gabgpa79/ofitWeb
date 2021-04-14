import React, { useState,useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'
import {  
  Row,
  Col,  
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import classnames from 'classnames';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faList } from "@fortawesome/free-solid-svg-icons";

import ClientesTable from './components/ClientesTable'
import ClientesSearch from './components/ClienteSearch'
import ClienteForm from './components/ClienteForm'




function ClientesView () {     
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)   
  const [activeTab, setActiveTab] = useState('1');
  const [component, setComponent] = useState('lista')
  
  const getComponent = useCallback((name, tab, pky) =>{    
    if(activeTab !== tab) setActiveTab(tab);
    switch(name){
      case 'lista':
      setComponent(<><ClientesSearch/><ClientesTable getComponent={getComponent}/></>)      
      break;
      case 'formulario':
      setComponent(<ClienteForm/>)
      break;
      case 'editar':
      setComponent(<ClienteForm/>)
      dispatch(crudActions.getItem('CLIENTES_ITEM','clientes',pky))
      break;      
      default:
        console.log('nan')
      break;  
    }    
  },[activeTab, dispatch])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      getComponent('lista','1',1)
      console.log('carga')
      
   }
    return () =>{             
        dispatch(crudActions.getReset('CLIENTES_RESET'))               
    };
  }, [getComponent, mount, dispatch]);
  
  return (
    <div className="content">     
    <div className="main-contenido"> 
    <Row>
      <Col className="tabs">
      <Nav tabs>                
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}            
            onClick={() => { getComponent('lista', '1',1)}}
          >
          <FontAwesomeIcon icon={faList} />   
          {' '} Lista
          </NavLink>  
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { getComponent('formulario', '2',1)}}
            >
          <FontAwesomeIcon icon={faPlusCircle} />   
          {' '} Nuevo cliente
          </NavLink>                          
        </NavItem>        
      </Nav>
      </Col>
    </Row>
        
    
      {component}      
    </div>
  </div> 
  );
}

export default ClientesView