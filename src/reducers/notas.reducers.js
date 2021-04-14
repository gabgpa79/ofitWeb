const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{},
    plan:[],
    modalView: false
  };
  
export function notas(state = initialState, action) {
    switch (action.type) {
      case "NOTAS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "NOTAS_ADD":
        return {
          ...state,
          item: action.response.membresia
        };
      case "NOTAS_VIEW":
        return {
          ...state,
          modalView: action.view
        };
      case "NOTAS_PAGAR":
        return {
          ...state,
          item: action.response.Nota,
          plan: action.response.Plan.plan
        };    
      case "NOTAS_ITEM":
          return {
            ...state,
            item: action.response.not.Nota,
            plan: action.response.pla.plan,
          };  
      case "NOTAS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };            
      case "NOTAS_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };
      case "RESET_MEMBRESIA":
        return {
          ...state,
          item: initialState.item
        };  
      default:
        return state;
    }
  }
  