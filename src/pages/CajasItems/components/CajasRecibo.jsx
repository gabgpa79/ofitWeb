import React, { useRef }  from 'react'
import Moment from 'react-moment';
import {     
  Table,  
  Row,
  Button,
  Col } from "reactstrap";

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
    <h5 className="text-center mb-2">NOTA DE {this.props.precibo.tipo.toUpperCase()} </h5>    
    <p>Fecha : <Moment format="DD/MM/YYYY">{fechaHoy}</Moment></p>      
    
    
    <div className="sol">
        <Table className="table-reporteb">
        <thead>
            <tr>  
                <th width="10%">#</th>
                <th width="50%">Detalle</th>
                <th width="20%">Importe</th>
                <th width="20%">Total</th>                
            </tr>
        </thead>
        
        <tbody>
          <tr>
            <td>1</td>                                  
            <td>{this.props.precibo.label}</td>
            <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(this.props.precibo.monto)}</td>
            <td>{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(this.props.precibo.monto)}</td>
            </tr>  
        </tbody>        
        </Table>                              
    </div>  

     <div className="sol">
        <Table className="table-reportet">
       <tbody>
            <tr>  
                <td width="40%">______________________</td>
                <td width="20%"></td>
                <td width="40%">______________________</td>
            </tr>
            <tr>                  
                <td>FIRMA</td>                
                <td></td>                
                <td>C.I.</td>                
            </tr>            
            </tbody>        
        </Table>                              
    </div>  

      <p><b> Usuario : </b>{this.props.puser.nombre}</p>   

     </div>   
    </> 
    );
  }}


function CajasItemsDetalle ({ recibo, user }) {    
const componentRef = useRef();   
return(
    <div className="creporte">
        <ReactToPrint
            trigger={() => <Button className="fas fa-print btn-sm btn-info">Imprimir</Button>}
            content={() => componentRef.current}        
        />
        <ComponentToPrint
            ref={componentRef}          
            precibo={recibo}
            puser={user}
        />
    </div>
     )
}


export default CajasItemsDetalle