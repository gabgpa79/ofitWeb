const initialState = {
    clientes: [],    
    cajas: [],    
    membresias: [],    
    data: [],    
    pagina: 0,
    paginas: 0,
    total: 0,
    desde:'2021-01-01',
    hasta:'2021-12-01',

  };
  
export function informes(state = initialState, action) {
    switch (action.type) {      
      case "INFORMES_CLIENTES":
        return {          
          ...state,
          detalle: action.response.detalle,
          clientes: action.response.data,
          total: action.response.data.total,      
          desde: action.desde,
          hasta: action.hasta
        };    
      case "INFORMES_MEMBRESIAS":
        return {          
          ...state,
          detalle: action.response.detalle,
          membresias: action.response.data,
          total: action.response.data.total,      
          desde: action.desde,
          hasta: action.hasta
        };    
      case "INFORMES_CAJAS":
        return {          
          ...state,
          detalle: action.response.detalle,
          cajas: action.response.data,
          total: action.response.data.total,      
          desde: action.desde,
          hasta: action.hasta
        };        
     case "INFORMES_RESET":
        return {
          ...state,
          clientes: [],          
          membresias:[],
          cajas:[],
          pagina: 0,
          paginas: 0,
          total: 0,
          desde:'2021-01-01',
          hasta:'2021-12-01'
        };          
        
      default:
        return state;
    }
  }
  