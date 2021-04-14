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
  <div className="invoice-box"> 
    <h5 className="text-center mb-2">INFORME DE MEMBRESIAS</h5>   
    <h6 className="text-center" >
    ( <Moment format="DD/MM/YYYY">{this.props.pdesde}</Moment> ) - 
    ( <Moment format="DD/MM/YYYY">{this.props.phasta}</Moment> )
    </h6>                           
                       
     <h6 className="ml-3" >Total: { this.props.pdetalle }</h6>
      <Row>
        <Col md={11} className="nota ml-5">
          <Table className="table-simple">
            <thead>
                <tr>  
                    <th width="5%">#</th>
                    <th width="15%">Usuario</th>
                    <th width="15%">Total Inicial</th>
                    <th width="15%">Total Ingreso</th>
                    <th width="15%">Total Egreso</th>
                    <th width="15%">Total Final</th>
                    <th width="15%">Fecha Cierre</th>          
                </tr>
            </thead>
        {this.props.pdata.data && (
            <tbody>
                {this.props.pdata.data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>                                
                    <td>{item.Usuario.nombre ? item.Usuario.nombre : null}</td>                         
                    <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.montoInicial)}</td>
                    <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.montoIngreso)}</td>
                    <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.montoEgreso)}</td>
                    <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.montoFinal)}</td>
                    <td><Moment format="DD/MM/YYYY">{item.ivigencia}</Moment></td>                                               
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


function Cajas () {    
  const componentRef = useRef();   
  const {detalle, cajas, desde, hasta, total } = useSelector(state => state.informes)  
  const user = useSelector(state => state.usuarios.item)  


return(
    <div>
        <ReactToPrint
            trigger={() => <Button className="fas fa-print btn-sm btn-info">Imprimir</Button>}
            content={() => componentRef.current}        
        />
        <ComponentToPrint
            ref={componentRef}          
            puser={user}
            pdetalle={total}
            pdata={cajas}
            pdesde={desde}
            phasta={hasta}
        />
    </div>
     )
}


export default Cajas