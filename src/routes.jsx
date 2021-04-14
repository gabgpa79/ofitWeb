import Dashboard from "./pages/Dashboard/Dashboard";
import Clientes from "./pages/Clientes/ClientesView";
import Configuracion from "./pages/Configuracion/ConfiguracionView";
import Membresias from "./pages/Membresia/MembresiaView";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",        
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/clientes",
    name: "Clientes",        
    component: Clientes,
    layout: "/admin"
  },
  {
    path: "/configuracion",
    name: "Configuración",        
    component: Configuracion,
    layout: "/admin"
  },
  {
    path: "/membresias",
    name: "Membresias",        
    component:Membresias,
    layout: "/admin"
  }   

];
export default routes;