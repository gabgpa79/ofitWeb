import React, { useState,useEffect } from 'react';

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

import MembresiaDetalles from '../Membresia/components/MembresiaDetalles'
import NotaDetalle from './components/NotaDetalle'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTags } from "@fortawesome/free-solid-svg-icons";
import { crudActions } from '../../actions/crud.actions'

function NotasView({...props}) {     
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)   
  const [activeTab] = useState('2');  


  
  useEffect(() =>{    
    if(!mount) {
      setMount(true);
        const {  match: { params }} = props;            
        dispatch(crudActions.getItem('NOTAS_ITEM','membresias',params.notaId))      
    }
     return () =>{            
        /*dispatch(crudActions.getReset('CLIENTES_RESET'))*/
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
            
            <Row>
              <Col md={12}>
               <MembresiaDetalles/> 
              </Col>              
            </Row>

            <Row>
              <Col md={12}>
                <NotaDetalle/>
              </Col>                         
            </Row>

          

          </div>
        </div> 
  );
}

export default NotasView