import React from 'react';
import { useSelector } from 'react-redux'
import {  
  Row,
  Col
} from "reactstrap"

import { apiErp } from "../../../helpers";
import MembresiaForm from "./MembresiaForm"



function MembresIadetalle () {     
 
  const { item } = useSelector(state => state.clientes)
          
  return (    
      <div className="herramientas">          
           <div className="caja">
                <Row>
                  <Col md="10" className="cajas text-white">Membresia Cliente - Nombre: {item.nombres} - CI: {item.ci}</Col>
                </Row>                                
           </div>
           <div className="subcaja">
               <Row>
                 <Col md={9} className="clientedetalle">
                    <MembresiaForm/>
                 </Col>
                 <Col md={3} className="clientefoto">                  
                  <img
                    alt="cliente"
                    className="img-perfil"
                    src={apiErp + "/static/images/clientes/lg/" + item.filename}
                  />                                    
                 </Col>
               </Row>       
           </div>
        </div>               
  );
}

export default MembresIadetalle