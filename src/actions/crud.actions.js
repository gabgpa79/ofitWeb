import { crudService } from "../services";
import { alertActions } from "./";
import { createNotification } from "react-redux-notify";
export const crudActions = {
  changeValue,
  getListaPost,
  getListaGet,
  getListasGet,
  getListasDetalleGet,
  setCreatePostList,  
  setCreatePostUnit,
  setUpdatePutList,
  setUpdatePutUnit,
  searchPostList,    
  getItem,
  getItemo,  
  getDelList,  
  getReset,
  getListaSingle,
  upload,
  deletePostList,  
  viewModal,
  registro,
  informes
};


/*|===================================ALL==========================================|*/
function informes(xredux, payload, dato, desde, hasta) {
  return (dispatch) => {    
    crudService
      .informes(payload, dato)
      .then((response) => {
         
        dispatch(inf(xredux, response.result, desde, hasta));        
      })
      .catch((err) => {
        dispatch(createNotification(alertActions.error(err)));
      });
  };
}

export function inf(redu, response, desde, hasta) {
  
  return {
    type: redu,
    response: response,
    desde:desde,
    hasta:hasta

  };
}

function viewModal(xredux, est) {  
  return (dispatch) => {    
    dispatch({type: xredux, view:est});
  };
}

/*|===================================ALL==========================================|*/
function upload(xredux, payload, data, datoId) {
  return (dispatch) => {
    /*dispatch(inicial());*/
    crudService
      .upload(payload, data, datoId)
      .then((response) => {
       
        /*dispatch(Up(xredux, response.result));*/
        dispatch(
          createNotification(alertActions.success("dato actualizado !!"))
        );
      })
      .catch((err) => {
        dispatch(createNotification(alertActions.error(err)));
      });
  };
}

export function Up(redu, response) {
  return {
    type: redu,
    response: response,
    /*[pendingTask]: end,*/
  };
}

/*|===================================ALL==========================================|*/


/******************** SET VALUE **************************/
function changeValue(xredux, props, values) {  
  return (dispatch) => {
    dispatch(change(xredux, props, values));
  };
}

export function change(xredux, props, values) {  
  return {  
    type: xredux,
    props: props,
    value: values
  };
}
/******************** SET VALUE **************************/

/******************** GET LISTA **************************/
function getListaGet(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .getListaGet(payload, dato)
      .then((response) => {                             
                      
        dispatch(ListaGet(xredux, response.result));

      })
      .catch((err) => {
        dispatch(createNotification(alertActions.error(err)));       
        
      });
  };
}

function getListasGet(xredux, payload, page,num,prop,orden) {  
  return (dispatch) => {
    crudService
      .getListasGet(payload, page,num,prop,orden)
      .then((response) => {                  
        dispatch(ListaGet(xredux, response.result));
      })
      .catch((err) => {
        dispatch(createNotification(alertActions.error(err)));       
        
      });
  };
}

function getListaSingle(xredux, payload) {  
  return (dispatch) => {
    crudService
      .getListaSingle(payload)
      .then((response) => {                                     
        dispatch(ListaGet(xredux, response.result));
        
      })
      .catch((err) => {
        dispatch(createNotification(alertActions.error(err)));       
        
      });
  };
}

function getListasDetalleGet(xredux, payload, page,num,dato) {  
  return (dispatch) => {
    crudService
      .getListasDetalleGet(payload, page,num,dato)
      .then((response) => {                                   
        dispatch(ListaGet(xredux, response.result));
      })
      .catch((err) => {
        dispatch(createNotification(alertActions.error(err)));       
        
      });
  };
}

export function ListaGet(xredux, result) {  
 
  return {
    type: xredux,
    response: result
  };
}
/******************** GET LISTA **************************/

/******************** POST LISTA **************************/
function getListaPost(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .getListaPost(payload, dato)
      .then((response) => {                                        
        dispatch(ListaPost(xredux, response.result));        
    

      })
      .catch((err) => {
        dispatch(createNotification(alertActions.error(err)));       
        
      });
  };
}

function searchPostList(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .searchPostList(payload, dato)
      .then((response) => {                        
        dispatch(ListaPost(xredux, response.result));        
      })
      .catch((err) => {
        dispatch(createNotification(alertActions.error(err)));       
        
      });
  };
}



export function ListaPost(xredux, result) {  
 
  return {  
    type: xredux,
    response: result
  };
}
/******************** POST LISTA **************************/

/******************** POST UNIT **************************/
function setCreatePostUnit(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .setCreatePostUnit(payload, dato)
      .then((response) => {                        
        dispatch(UnitPost(xredux, response.result));
        dispatch(createNotification(alertActions.success(response.result.message)));               
      })
      .catch((err) => {
        dispatch(createNotification(alertActions.error(err)));       
        
      });
  };
}

export function UnitPost(xredux, result) { 
                                 
  return {  
    type: xredux,
    response: result
  };
}
/******************** POST UNIT **************************/

/******************** RESET **************************/
function getReset(xredux) {  
  return (dispatch) => {    
        dispatch(reset(xredux));
  };
}

export function reset(xredux) {  
  return {
    type: xredux
  };
}
/******************** RESET **************************/

/******************** POST LISTA **************************/
function setCreatePostList(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .setCreatePostList(payload, dato)
      .then((response) => {                   
      if(xredux === "CAJAS_ITEMS_DATAS")
      {
          
        dispatch(ItemGet('CAJAS_ITEMS_DATA', response.result.items));           
        dispatch(ListaPost("CAJAS_ITEM", response.result.caja));        
      } else{
        dispatch(ListaPost(xredux, response.result));              
      }                               
          dispatch(createNotification(alertActions.success(response.message)));       
      })
      .catch((err) => {
        dispatch(createNotification(alertActions.error(err)));       
        
      });
  };
}

function registro(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .setCreatePostList(payload, dato)
      .then((response) => {   
                     
        dispatch(ListaPost(xredux, response.result));                        
      })
      .catch((err) => {
        dispatch(createNotification(alertActions.error(err)));      
        
      });
  };
}

/******************** POST LISTA **************************/


/******************** POST LISTA **************************/
function deletePostList(xredux, payload, dato) { 
  return (dispatch) => {
    crudService
      .deletePostList(payload, dato)
      .then((response) => {                                            
        dispatch(ListaPost(xredux, response.result));    
     
        dispatch(createNotification(alertActions.success(response.message)));       
      })
      .catch((err) => {
        dispatch(createNotification(alertActions.error(err)));       
        
      });
  };
}

/******************** POST LISTA **************************/

/******************** PUT LISTA **************************/
function setUpdatePutList(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .setUpdatePutList(payload, dato)
      .then((response) => {                                                 
      
        dispatch(ListaPost(xredux, response.result));        
        dispatch(createNotification(alertActions.success(response.message)));               
      })
      .catch((err) => {
        if(xredux === "NOTAS_PAGAR")        
        {
          dispatch(createNotification(alertActions.error("No tiene caja abierta")));                         
        }else{
          dispatch(createNotification(alertActions.error(err)));         
        }
      });
  };
}

/******************** PUT LISTA **************************/

/******************** PUT UNIT **************************/
function setUpdatePutUnit(payload, dato) {  
  return (dispatch) => {
    crudService
      .setUpdatePutUnit(payload, dato)
      .then((response) => {                                         
        dispatch(createNotification(alertActions.warning('Dato actualizado')));       
      })
      .catch((err) => {
        dispatch(createNotification(alertActions.error(err)));               
      });
  };
}

/******************** PUT UNIT **************************/

/******************** GET ITEM **************************/
function getItem(xredux, payload, pky) {  
  return (dispatch) => {
    crudService
      .getItem(payload, pky)
      .then((response) => {                                
        if(xredux === 'NOTAS_ITEM')
        {
          dispatch(ItemGet('MEMBRESIAS_ITEM', response.result.mem.Membresia));
          dispatch(ItemGet('NOTAS_ITEM', response.result)); 
          dispatch(ItemGet('CLIENTES_ITEM', response.result.cli));                                   
        }else{
          dispatch(ItemGet(xredux, response.result));
        }
        
      })
      .catch((err) => {
        dispatch(createNotification(alertActions.error(err)));       
        
      });
  };
}

export function ItemGet(xredux, result) {  
  return {
    type: xredux,
    response: result
  };
}

function getItemo(xredux, payload, pky) {  
  return (dispatch) => {
    crudService
      .getItem(payload, pky)
      .then((response) => {                                        
          dispatch(ItemGet('CAJAS_ITEM', response.result.cajau));
          dispatch(ItemGet('CAJAS_ITEMS_DATA', response.result.itemsu));           
       
      })
      .catch((err) => {
        dispatch(createNotification(alertActions.error(err)));       
        
      });
  };
}

/******************** GET ITEM **************************/

/******************** DELETE LISTA **************************/
function getDelList(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .delGetList(payload, dato)
      .then((response) => {                                         
        dispatch(ListaPost(xredux, response.result));        
        dispatch(createNotification(alertActions.error(response.message)));       
      })
      .catch((err) => {
        dispatch(createNotification(alertActions.error(err)));       
        
      });
  };
}

/******************** DELETE LISTA **************************/