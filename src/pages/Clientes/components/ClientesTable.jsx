import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import {      
    Table,    
    Button
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {    
  faEdit,
  faTags
} from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../components/Navbars/Pagination'
import { useCallback } from 'react';

function ClientesTable ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const clientes= useSelector(state => state.clientes)


  
  const makeHttpRequestWithPage = useCallback((page, num) =>{
    dispatch(crudActions.getListasGet('CLIENTES_DATA','clientes',page, num,'nombres','ASC'))  
  },[dispatch])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      makeHttpRequestWithPage(1,12);
    }
     return () =>{            
        /*dispatch(crudActions.getReset('CLIENTES_RESET'))*/
    };
  }, [dispatch, makeHttpRequestWithPage, mount]);

    
  return (    
    <>
    <div className="table-single">             
        <Table className="table-simple">
        <thead>
            <tr>  
                <th width="35%">Nombre</th>
                <th width="25%">Dirección</th>
                <th width="10%">Nit</th>
                <th width="10%">Ci</th>
                <th width="10%">Estado</th>   
                <th width="10%"></th>                
            </tr>
        </thead>
        {clientes.data && (
            <tbody>
                {clientes.data.map((item) => (
                    <tr key={item.id}>                      
                      <td>{item.nombres}</td>
                      <td>{item.direccion}</td>
                      <td>{item.nit}</td>
                      <td>{item.ci}</td>
                      <td>{item.estado ? "activo": "desactivado"}</td>
                      <td>
                        <Button className="btn btn-success btn-xs" onClick={() => {getComponent('editar','2',item.id)}} >
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Link to={`/admin/membresia/${item.id}`}>
                           <Button className={"btn btn-warning btn-xs"}>
                              <FontAwesomeIcon icon={faTags} />
                           </Button>
                        </Link>
                      </td>
                    </tr>  
                    ))}
            </tbody>
        )}
    </Table>    
 </div> 
 <div className="navegador" >
    <Pagination
    makeHttpRequestWithPage={ makeHttpRequestWithPage }
    total={clientes.total}
    paginas={clientes.paginas}
    current= {clientes.pagina} 
    pagina= {12}
    />
 </div>
 </>
  );
}

export default ClientesTable