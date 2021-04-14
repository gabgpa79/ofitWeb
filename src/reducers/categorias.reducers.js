const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{
        id:0,
        name: ''        
    }    
  };
  
export function categorias(state = initialState, action) {
    switch (action.type) {
      case "CATEGORIAS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };      
      case "CATEGORIAS_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "CATEGORIAS_DATA":
          return {
            ...state,
            data: action.response
          };            
      case "CATEGORIAS_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };
        
      default:
        return state;
    }
  }
  