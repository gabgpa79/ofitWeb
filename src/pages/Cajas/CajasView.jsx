import React, { useState,useEffect } from 'react';

import { useDispatch } from 'react-redux'
import {  
  Row,
  Col,  
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import classnames from 'classnames';
import { Link } from "react-router-dom";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { crudActions } from '../../actions/crud.actions'
import CajasTable from './components/CajasTable'
import CajaForm from './components/CajaForm'

function CajasView() {     
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)   
  const [activeTab] = useState('2');  
  let us = JSON.parse(localStorage.getItem('user'))
  
  useEffect(() =>{    
    if(!mount) {
      setMount(true);                
        dispatch(crudActions.getListasDetalleGet('CAJAS_DATA','cajas',1,12, us.id))       
    }
     return () =>{            
        dispatch(crudActions.getReset('CAJAS_RESET'))
    };
  }, [dispatch, mount, us.id]);


  return (
        <div className="content">     
          <div className="main-contenido">   
            <Row>
              <Col className="tabs">
              <Nav tabs>                
                <NavItem>
                  <NavLink className={classnames({ active: activeTab === '2' })}>
                    <Link to={`/admin/cajas`}
                      className={"btn btn-warning btn-fs text-white"}>                      
                      <FontAwesomeIcon icon={faList} />
                    {' '} Cajas    
                    </Link>                  
                  </NavLink>  
                </NavItem>

                
              </Nav>
              </Col>
            </Row> 
            <CajaForm/>
            <CajasTable/>
          </div>
        </div> 
  );
}

export default CajasView