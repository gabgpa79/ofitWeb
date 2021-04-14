import React, { useCallback, useState,useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {  
  Row,
  Col,  
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import classnames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ArticulosTable from './components/ArticulosTable'
import ArticuloSearch from './components/ArticuloSearch'
import ArticuloForm from './components/ArticuloForm'

function ArticuloView () {     
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)   
  const [activeTab, setActiveTab] = useState('1');
  const [component, setComponent] = useState('datos')
  
  const getComponent = useCallback((name, tab) =>{    
    if(activeTab !== tab) setActiveTab(tab);
    switch(name){
      case 'lista':
      setComponent(<><ArticuloSearch/> <ArticulosTable/></>)
      break;
      case 'nuevo':
      setComponent(<ArticuloForm/>)
      break;      
      default:
        console.log('nan')
      break;  
    }    
  },[activeTab])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      getComponent('nuevo','1')      
   }
    return () =>{             
        /*dispatch(crudActions.getReset('CLIENTES_RESET'))       */
        console.log('descarga')
    };
  }, [mount, dispatch]);
  
  return (
    <div className="content">     
    <div className="submain-contenido"> 
    <Row className="subtabs">
      <Col  md="9">
      <Nav tabs>                                          
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}            
            onClick={() => { getComponent('datos', '1',1)}}>
          <FontAwesomeIcon icon={faChevronDown} />   
          {' '} Lista
          </NavLink>  
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { getComponent('nuevo', '2',1)}}>
          <FontAwesomeIcon icon={faChevronDown} />   
          {' '} Nuevo 
          </NavLink>  
        </NavItem>            
      </Nav>
      </Col>
      <Col md="2">
        <h6 className="sub-nav">Articulos</h6>
      </Col>
    </Row>        
     { component }
    </div>
  </div> 
  );
}

export default ArticuloView