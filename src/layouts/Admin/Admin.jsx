import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userActions } from "../../actions";
import { Route, Switch} from "react-router-dom";


import AdminNavbar from "../../components/Navbars/AdminNavbar.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

import { Notify } from "react-redux-notify";
import Error from "../Error.jsx";
import Dashboard from "../../pages/Dashboard/Dashboard.jsx";

import { Spinner } from "react-redux-spinner";
import logo from "../../assets/img/lUNITY.png";

import Clientes from "../../pages/Clientes/ClientesView";
import Membresias from "../../pages/Membresia/MembresiaView";
import Notas from "../../pages/Notas/NotasView";
import Cajas from "../../pages/Cajas/CajasView";
import CajasItems from "../../pages/CajasItems/CajasItemsView";

import Configuracion from "../../pages/Configuracion/ConfiguracionView";
import Informes from "../../pages/Informes/InformesView";

import IMembresias from "../../pages/Informes/MembresiasView";
import ICajas from "../../pages/Informes/CajasView";



class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemr: [],
      modulos :JSON.parse(localStorage.getItem('items'))       

  }
}
  componentDidMount() {   
   this.cahrgeModule(); 
    
     
  }
   

   verificar = (component) => {
    switch (component) {
      case "Dashboard":
        return Dashboard;      
      case "Clientes":
        return Clientes;
      case "Cajas":
        return Cajas;
      case "Configuracion":
        return Configuracion;
      case "Informes":
        return Informes;          
      default:
        return null;
    }
  };

  cahrgeModule = () => {
    let items = [...this.state.itemr];
    this.state.modulos.map((prop, key) => {
      var dato = {
        path: prop.path,
        name: prop.name,
        icon: prop.icon,
        component: this.verificar(prop.component),
        layout: prop.layout,
      };
      items.push(dato);
      return null;
    });

    this.setState({
      itemr: items,
    });
  };


  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };  



  render() {    
    const { itemr } = this.state;    
    return (
      <>
      <div className="wrapper">        
        <Sidebar
            {...this.props}
            routes={itemr}           
            logo={{
              outterLink: "https://beggu-bo.com/",
              imgSrc: logo,
            }}
            toggleSidebar={this.toggleSidebar}
          />       
          <div
            className="main-panel"
            ref="mainPanel"          
          >
            <Spinner config={{ trickleRate: 3 }} />            
            <Notify />
            <AdminNavbar              
              toggleSidebar={this.toggleSidebar}
              logo={{
                outterLink: "https://beggu-bo.com/",
                text: "Unity",
                imgSrc: logo,
              }}
              sidebarOpened={this.state.sidebarOpened}
            />            
             <Switch>
              {this.getRoutes(itemr)}
              <Route path="/admin/dashboard" component={Dashboard} />
              <Route path="/admin/iclientes" component={Informes} />
              <Route path="/admin/imembresias" component={IMembresias} />
              <Route path="/admin/icajas" component={ICajas} />
              <Route path="/admin/membresia/:clienteId" render={(props) => <Membresias {...props} />}/>
              <Route path="/admin/notas/:notaId" render={(props) => <Notas {...props} />}/>  
              <Route path="/admin/cajasitems/:cajaId" render={(props) => <CajasItems {...props} />}/>              
              <Route component={Error} />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ...userActions,
    },
    dispatch
  ),
});

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
