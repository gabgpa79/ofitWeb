import React from 'react'
import Moment from 'react-moment';
import { Table } from "reactstrap";

export class Recibo extends React.PureComponent {
  render() {
    let fecha = new Date()
    return (
     <div className="invoice-boxc">
      <div className="sol">
        <h5 className="text-center mb-2">NOVA FITT</h5>
        <h6 className="text-center mb-2">Fittnes Center</h6>
        <p className="text-dark">Recibo # {this.props.recibo.id}</p>
        <p className="text-dark">Fecha : <Moment format="DD/MM/YYYY">{fecha}</Moment></p>
        <p className="mb-2 text-dark">Cliente : {this.props.recibo.cliente}</p>          
      </div>

        <div className="sol">
        <Table className="table-reporteb">
          <thead>
            <tr>  
                <th  width="10%">#</th>
                <th width="60%">Detalle</th>
                <th width="20%">Importe</th>
                <th width="10%">Total</th>                
            </tr>
        </thead>
            <tbody>            
            <tr>                  
                <td>1</td>
                <td>{this.props.recibo.membresia}</td>
                <td>{this.props.recibo.importe}</td>
                <td>{this.props.recibo.importe}</td>                
            </tr>            
            </tbody>
          </Table>
      </div>    


          <Table className="table-simple">
            <tbody>
            <tr>
                <td><b> Usuario : </b>{this.props.recibo.usuario}</td>                                
            </tr>            
            </tbody>
          </Table>
         

    </div>      
    );
  }
}

export default Recibo;
