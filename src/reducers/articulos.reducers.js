const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{
        name: "",
        codigo: "",    
        variantes: "",
        volumen: 0,
        bruto: 0,
        neto: 0,
        pventa: 0,
        filename: "",    
        pdescuento: 0,
        oferta: false,
        descuento: 0,
        descripcion: "",
        inStock: false,
        stock: 0,
        minimo: 0,
        inCatalogo: false,
        destacado: false,
        origen: "",
        pcompra: 0,
        reposicion: 0,    
        lineaId: 1,
        tipoId: 1,
        categoriaId: 1,
        marcaId: 1,
        Linea:{
          id:'',
          name:''
        },
        Marca:{
          id:'',
          name:''
        },
        Categorium:{
          id:'',
          name:''
        },
        Tproducto:{
          id:'',
          name:''
        }
    }    
  };
  
export function articulos(state = initialState, action) {
    switch (action.type) {
      case "ARTICULOS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "ARTICULOS_ADD":
        return {
          ...state,
          item: action.response.articulo
        };
      case "ARTICULOS_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "ARTICULOS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };            
      case "ARTICULOS_RESET":
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
  