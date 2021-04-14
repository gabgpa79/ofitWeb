import {
    NOTIFICATION_TYPE_SUCCESS, 
    NOTIFICATION_TYPE_WARNING,
    NOTIFICATION_TYPE_INFO,
    NOTIFICATION_TYPE_ERROR
} from 'react-redux-notify';

export const alertActions = {
    success,
    warning,
    info,
    error
};

function success(message) {
    return { 
      type: NOTIFICATION_TYPE_SUCCESS,
      message: message,
      duration: 1500,
      canDismiss: true,
      icon: '<i className="fa fa-check" />'
    };
}

function warning(message) {
    return { 
      type: NOTIFICATION_TYPE_WARNING,
      message: message,      
      duration: 1500,
      canDismiss: true,
      icon: "ꜟ"
    };
}

function info(message) {
    return { 
      type: NOTIFICATION_TYPE_INFO,
      message: message,      
      duration: 1500,
      canDismiss: true
    };
}

function error(message) {  
  const msg = message.toString() === 'TypeError: NetworkError when attempting to fetch resource.' ? 'Sin conexion a BD' : message
    return { 
      type: NOTIFICATION_TYPE_ERROR,
      message: msg,      
      duration: 1500,
      canDismiss: true
    };
}