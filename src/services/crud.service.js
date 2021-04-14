import { authHeader, apiErp } from "../helpers";

export const crudService = {
  getListaPost,
  getListaGet,
  getListasGet, 
  getListasDetalleGet,
  setCreatePostList,
  setCreatePostUnit,
  setUpdatePutList,
  setUpdatePutUnit,
  searchPostList,
  delGetList,
  getItem,  
  getListaSingle,
  upload,
  deletePostList,   
  informes
};

function informes(payload, dato) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };

  return fetch(`${apiErp}/informes/${payload}`, requestOptions).then(handleResponse);
}

function deletePostList(payload, pky) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  };
  return fetch(`${apiErp}/${payload}/${pky}`, requestOptions).then(handleResponse);
}

function upload(payload, dato, datoId) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader() },
    body: dato,
  };
  return fetch(
    `${apiErp}/${payload}/upload/item/${datoId}`,
    requestOptions
  ).then(handleResponse);
}

function getListaSingle(payload) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${apiErp}/${payload}/lista`, requestOptions).then(handleResponse);
}
function getItem(payload, pky) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${apiErp}/${payload}/${pky}`, requestOptions).then(handleResponse);
}

function delGetList(payload, pky) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  };
  return fetch(`${apiErp}/${payload}/${pky}`, requestOptions).then(handleResponse);
}

function searchPostList(payload, dato) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };

  return fetch(`${apiErp}/${payload}/search`, requestOptions).then(handleResponse);
}

function setUpdatePutUnit(payload, dato) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };
  return fetch(`${apiErp}/${payload}/${dato.id}`, requestOptions).then(
    handleResponse
  );
}

function setUpdatePutList(payload, dato) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };
  return fetch(`${apiErp}/${payload}/${dato.id}`, requestOptions).then(
    handleResponse
  );
}

function getListaPost(payload, dato) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };

  return fetch(`${apiErp}/${payload}/lista`, requestOptions).then(handleResponse);
}

function getListaGet(payload, dato) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${apiErp}/${payload}/lista/${dato}`, requestOptions).then(handleResponse);
}

function getListasGet(payload, page,num,prop,orden) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${apiErp}/${payload}/listas/${page}/${num}/${prop}/${orden}`, requestOptions).then(handleResponse);
}

function getListasDetalleGet(payload, page,num,dato) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${apiErp}/${payload}/listadetalle/${page}/${num}/${dato}`, requestOptions).then(handleResponse);
}

function setCreatePostList(payload, dato) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };

  return fetch(`${apiErp}/${payload}`, requestOptions).then(handleResponse);
}
function setCreatePostUnit(payload, dato) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };

  return fetch(`${apiErp}/${payload}/registro`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // logout();
        //location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
