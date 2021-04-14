import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import { stylesErp } from '../../../helpers'


import { useCallback } from 'react';
import Select from 'react-select'
const defaultVal = (options, valor) =>{
    return options.filter(item =>
        item.value === valor
      )
  
  }

function CategoriaSelect ({getComponent}) {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const data = useSelector(state => state.categorias.data)
  const item = useSelector(state => state.categorias.item)
 
  const makeHttpRequestWithPage = useCallback((xredux, payload) =>{
    dispatch(crudActions.getListaSingle(xredux, payload))  
  },[dispatch])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      makeHttpRequestWithPage('CATEGORIAS_DATA','categorias');
    }
     return () =>{            
        dispatch(crudActions.getReset('CATEGORIAS_RESET'))
    };
  }, [dispatch, makeHttpRequestWithPage, mount]);

  const changeHandler = event => {    
    let io = event ? event.value: 0 
    dispatch(crudActions.changeValue('CATEGORIAS_CHANGE','id',io))   
   }
 
  return (    
    <>
        <Select                                                               
            defaultValue={data[0]}
            name="categoriaId"    
            id="categoriaId"                    
            options={data}      
            isClearable={true} 
            onChange={ changeHandler }                         
            value={defaultVal(data,item.id)}             
            styles={stylesErp}              
        />
    </>
  );
}

export default CategoriaSelect