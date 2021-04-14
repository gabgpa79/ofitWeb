import React, { useRef }  from 'react'
import Moment from 'react-moment';
import {     
  Table,  
  Row,
  Button,
  Col } from "reactstrap";
import { useSelector, useDispatch } from 'react-redux'
/*export class CajasItemsDetalle extends React.PureComponent {
import ReactToPrint from "react-to-print";
import { useReactToPrint } from 'react-to-print';*/

import ReactToPrint from "react-to-print";


 export class ComponentToPrint extends React.PureComponent {
  render() {
    const fechaHoy = new Date();     
    return (
      <>
    <div className="frecibos">
    <h5 className="text-center mb-2">INFORME DE MEMBRESIAS</h5>   
    <h6 className="text-center" >
    ( <Moment format="DD/MM/YYYY">{this.props.pdesde}</Moment> ) - 
    ( <Moment format="DD/MM/YYYY">{this.props.phasta}</Moment> )
    </h6>                           
      
    

    <h6 className="ml-5">Total : 
    {new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(this.props.pdetalle)}
    </h6>
      <Row>
        <Col md={11} className="nota ml-5">
          <Table className="table-simple">
            <thead>
                <tr>  
                    <th width="5%">#</th>
                    <th width="40%">Nombres</th>
                    <th width="30%">Paquete</th>
                    <th width="20%">F.Registro</th>
                    <th width="20%">Monto</th>          
                </tr>
            </thead>
        {this.props.pdata.data && (
            <tbody>
                {this.props.pdata.data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>            
                    <td>{item.Cliente.nombres ? item.Cliente.nombres : 'n'}</td>                              
                    <td>{item.Paquete.nombre ? item.Paquete.nombre : 'n'}</td>
                    <td><Moment format="DD/MM/YYYY">{item.ivigencia}</Moment></td>                                               
                     <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.ingresos)}</td>
                    </tr>  
                    ))}
            </tbody>
        )}
         </Table>                    
        </Col>
      </Row>
    </div>     
    </> 
    );
  }}


function Membresias () {    
  const componentRef = useRef();   
  const {detalle, membresias, desde, hasta, total } = useSelector(state => state.informes)  
  const user = useSelector(state => state.usuarios.item)  

  

return(
    <div className="creporte">
        <ReactToPrint
            trigger={() => <Button className="fas fa-print btn-sm btn-info">Imprimir</Button>}
            content={() => componentRef.current}        
        />
        <ComponentToPrint
            ref={componentRef}          
            puser={user}
            pdetalle={detalle}
            pdata={membresias}
            pdesde={desde}
            phasta={hasta}
        />
    </div>
     )
}


export default Membresias