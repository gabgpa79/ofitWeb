import React from 'react';
import { useSelector} from 'react-redux'

import {  
  Row,
  Col
} from "reactstrap"
import { apiErp } from "../../../helpers";


function MembresiaDetalles () {     

  const { item } = useSelector(state => state.clientes)
  const membresia  = useSelector(state => state.membresias.item)

  return (    
      <div className="herramientas">          
           <div className="caja">
                <Row>
                  <Col md="10" className="cajas text-white">Membresia Nota </Col>
                </Row>                                
           </div>
           <div className="subcaja">
               <Row>
                 <Col md={9} className="clientedetalles">
                    <p><b>Cliente:</b> {item.nombres }</p>
                    <p><b>Ci:</b> {item.ci }</p>

                    <p><b>Paquete:</b> {membresia.Paquete.nombre }</p>
                    <p><b>Vigencia:</b> ( {membresia.ivigencia}  -  {membresia.fvigencia }</p>                    
                    <p><b>Total:</b> {membresia.ingresos+ "Bs." }</p>
                    <p><b>Ingresos:</b> {membresia.intros }</p>
                    <p><b>N° pagos:</b> {membresia.num }</p>
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

export default MembresiaDetalles