import { userService } from "../services";
import { alertActions } from "./";
import { history } from "../helpers";
import { createNotification } from "react-redux-notify";
import { pendingTask, begin, end } from "react-redux-spinner";

export const userActions = {  
  login,
  logout,
};

/******************************************/
function login(user) {
  return (dispatch) => {    
    userService
      .login(user)
      .then((response) => {                        
        if(response.user){          
          dispatch(LOGIN(response));
          history.push("/admin");
        }        
        
        dispatch(createNotification(alertActions.success(response.user.message)) );                       
      })
      .catch((err) => {
        
        /*dispatch(createNotification(alertActions.error(err)));        */        
      });
  };
}

export function LOGIN(resp) {     
  
  return {
    type: "LOGIN_SUCCESS",
    response: resp.user.usuario
  };
}

function logout() {    
  return (dispatch) => {
    userService.logout();
    dispatch(loginOut());
    history.push("/admin");
  };
}

export function loginOut() {
  return {
    type: "LOGIN_LOGOUT",
  };
}
/******************************************/

export function inicial() {
  return {
    type: "INICIO",
    [pendingTask]: begin,
  };
}

export function final() {
  return {
    type: "FINAL",
    [pendingTask]: end,
  };
}
