import React, {  useState,useEffect } from 'react';

import {  useDispatch } from 'react-redux'
import {  
  Row,
  Col,  
  Nav,
  NavItem,  
  NavLink
} from "reactstrap"
import classnames from 'classnames';
import { Link } from "react-router-dom";

import MembresiaDetalle from './components/MembresiaDetalle'
import MembresiasTable from './components/MembresiasTable'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTags } from "@fortawesome/free-solid-svg-icons";
import { crudActions } from '../../actions/crud.actions'

function MembresiaView({...props}) {     
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)   
  const [activeTab] = useState('2');  
  
  useEffect(() =>{    
    if(!mount) {
      setMount(true);
        const {  match: { params }} = props;        
        dispatch(crudActions.getItem('CLIENTES_ITEM','clientes',params.clienteId))
        dispatch(crudActions.getListasDetalleGet('MEMBRESIAS_DATA','membresias',1,12, params.clienteId)) 
      
    }
     return () =>{            
        dispatch(crudActions.getReset('MEMBRESIAS_RESET'))
    };
  }, [dispatch, mount, props]);


  return (
        <div className="content">     
          <div className="main-contenido">   
            <Row>
              <Col className="tabs">
              <Nav tabs>                
                <NavItem>
                  <NavLink className={classnames({ active: activeTab === '1' })}>
                    <Link to={`/admin/clientes`}
                      className={"btn btn-warning btn-fs"}>                      
                      <FontAwesomeIcon icon={faList} />
                    {' '} Clientes    
                    </Link>                  
                  </NavLink>  
                </NavItem>

                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '2' })}                    
                    >
                  <FontAwesomeIcon icon={faTags} />   
                  {' '} Membresias
                  </NavLink>                          
                </NavItem>        
              </Nav>
              </Col>
            </Row> 
            <MembresiaDetalle/>
            <MembresiasTable/>
          </div>
        </div> 
  );
}

export default MembresiaView