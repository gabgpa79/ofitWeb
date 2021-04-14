import React, { useRef, useEffect }  from 'react'
import Moment from 'react-moment';
import { crudActions } from '../../actions/crud.actions'
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
    <h5 className="text-center mb-2">INFORME DE CLIENTE REGISTRADOS</h5>   
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
                    <th width="10%">Fecha</th>
                    <th width="50%">Nombre</th>
                    <th width="20%">CI</th>
                    <th width="20%">Teléfono</th>          
                </tr>
            </thead>
        {this.props.pdata.data && (
            <tbody>
                {this.props.pdata.data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>                      
                    <td><Moment format="DD/MM/YYYY">{item.createdAt}</Moment></td>                           
                    <td>{item.nombres}</td>
                    <td>{item.ci}</td>
                    <td>{item.telefono}</td>
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


function Clientes () {    
  const componentRef = useRef();   
  const {detalle, clientes, desde, hasta } = useSelector(state => state.informes)  
  const user = useSelector(state => state.usuarios.item)  
  const dispatch = useDispatch()

  

  useEffect(() =>{      
    return () =>{             
      dispatch(crudActions.getReset('INFORMES_RESET'))               
    };
  }, [dispatch]);

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
            pdata={clientes}
            pdesde={desde}
            phasta={hasta}
        />
    </div>
     )
}


export default Clientes