import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import {      
    Table,    
    Button
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../components/Navbars/Pagination'
import { useCallback } from 'react';

function ArticulosTable ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const articulos = useSelector(state => state.articulos)


  const makeHttpRequestWithPage = useCallback((page, num) =>{
    dispatch(crudActions.getListasGet('ARTICULOS_DATA','articulos',page, num,'name','ASC'))  
  },[dispatch])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      makeHttpRequestWithPage(1,12);
    }
     return () =>{            
        /*dispatch(crudActions.getReset('articulos_RESET'))*/
    };
  }, [dispatch, makeHttpRequestWithPage, mount]);

    
  return (    
    <>
    <div className="table-single">             
        <Table className="table-simple">
        <thead>
            <tr>  
                <th width="35%">Nombre</th>
                <th width="20%">Código</th>
                <th width="10%">Marca</th>
                <th width="10%">Tipo</th>
                <th width="10%">Categoría</th>
                <th width="10%">Línea</th>
                <th width="5%">Acciones</th>
            </tr>
        </thead>
        {articulos.data && (
            <tbody>
                {articulos.data.map((item) => (
                    <tr key={item.id}>                      
                      <td>{item.name}</td>
                      <td>{item.codigo}</td>
                      <td>{item.Marca.name}</td>
                      <td>{item.Tproducto.name}</td>
                      <td>{item.Categorium.name}</td>
                      <td>{item.Linea.name}</td>                      
                      <td className="text-center">
                      <Button className="btn btn-success btn-xs" onClick={() => {getComponent('editar','2',item.id)}} >
                      <FontAwesomeIcon icon={faEdit} />
                      </Button>
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
    total={articulos.total}
    paginas={articulos.paginas}
    current= {articulos.pagina} 
    pagina= {12}
    />
 </div>
 </>
  );
}

export default ArticulosTable