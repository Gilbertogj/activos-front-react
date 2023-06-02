import React from "react";
import { Link, useLocation } from "react-router-dom";
import { DeleteClientButton } from "../delete-client-button/DeleteClientButton";

import { ReactComponent as EditarLogo } from "../../assets/svg/iconoEditar.svg";


export const DetalleUnidad = ({ detallesUnidad, urlId }) => {
  const { pathname } = useLocation();

  return (
    <div className="container">
      {detallesUnidad.id ? (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div style={{ width: "40px" }} className="invisible">
              .
            </div>
            <div className="text-center">
              <h2>Camión olla </h2>
            </div>
            <div>
              <div className="d-flex  flex-column align-items-center">
                {/* {detallesCliente.id &&
                  pathname.includes("logistica") &&
                  !pathname.includes("realizar-pedido") && ( */}
                    {/* <Link
                      to={`/concreco/logistica/editar-cliente/${detallesCliente.id}`}
                    > */}
                      <div style={{ width: "40px" }}>
                        <EditarLogo />
                      </div>
                    {/* </Link> */}
                   {/* )} */}
              
               
                {/* {detallesCliente.id && !pathname.includes("pedido") && (
                  <DeleteClientButton />
                )} */}


        
              
              </div>
              <div className="d-flex  flex-column align-items-center">
                <Link
                to={`/unidades/agregar-informacion-financiera/${detallesUnidad.id}`}
                className="btn mb-2"
                style={{ backgroundColor: "#00C08B", color: "white" }}
              >
                Agregar Información Financiera
              </Link>
              </div>
              <div className="d-flex  flex-column align-items-center">
                <Link
                to={`/unidades/agregar-seguro/${detallesUnidad.id}`}
                className="btn mb-2"
                style={{ backgroundColor: "#00C08B", color: "white" }}
              >
                Agregar Seguro
              </Link>
              </div>
              <div className="d-flex  flex-column align-items-center">
                <Link
                to={`/unidades/agregar-transito/${detallesUnidad.id}`}
                className="btn mb-2"
                style={{ backgroundColor: "#00C08B", color: "white" }}
              >
                Agregar Informacion de Tránsito
              </Link>
              </div>
            </div>
            
          </div>

          <div className="row">
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Número económico: </strong> {detallesUnidad.numero_economico}
              </li>
              <li className="list-group-item">
                <strong>Nombre:</strong> Camion Olla 
              </li>
              <li className="list-group-item">
                <strong>Estatus de la unidad: </strong> {detallesUnidad.status_unidad}
              </li>
              <li className="list-group-item">
                <strong>Ubicación resguardo:</strong>{detallesUnidad.ubicacion_resguardo ? detallesUnidad.ubicacion_resguardo: "N/A"}
              </li>
              <li className="list-group-item">
                <strong>Categoría:</strong> {detallesUnidad.categoria}
              </li>
              <li className="list-group-item">
                <strong>Familia:</strong> {detallesUnidad.familia}
               
              </li>
              <li className="list-group-item">
                <strong>Subfamilia:</strong> {detallesUnidad.subfamilia ? detallesUnidad.subfamilia: "N/A"}
              </li>
              <li className="list-group-item">
                <strong>Año de la unidad:</strong>{" "}{detallesUnidad.ano_unidad}
              </li>
              <li className="list-group-item">
                <strong>Marca de la unidad: </strong> {detallesUnidad.marca_unidad}
              </li>
              <li className="list-group-item">
                <strong>Modelo de la unidad:</strong> {detallesUnidad.modelo}
              </li>
              <li className="list-group-item">
                <strong>Número de serie de la unidad:</strong> {detallesUnidad.numero_serie_unidad}
              </li>
              <li className="list-group-item">
                <strong>Tipo de combustible:</strong> {detallesUnidad.tipo_combustible}
              </li>
              <li className="list-group-item">
                <strong>Fotografía frontal:</strong> 
                {detallesUnidad.fotografia_frontal ? (
              <a
                target="_blank"
                rel="noreferrer"
                href={detallesUnidad.fotografia_frontal}
              >
                Imagen
              </a>
            ) : (
              " No hay imagen"
            )}
              </li>
              <li className="list-group-item">
                <strong>Foto lateral derecha:</strong> 
                {detallesUnidad.fotografia_derecha ? (
              <a
                target="_blank"
                rel="noreferrer"
                href={detallesUnidad.fotografia_derecha}
              >
                Imagen
              </a>
            ) : (
              " No hay imagen"
            )}
              </li>
              <li className="list-group-item">
                <strong>Foto lateral izquierda:</strong> 
                {detallesUnidad.fotografia_izquierda ? (
              <a
                target="_blank"
                rel="noreferrer"
                href={detallesUnidad.fotografia_izquierda}
              >
                Imagen
              </a>
            ) : (
              " No hay imagen"
            )}
              </li>
              <li className="list-group-item">
                <strong> Foto trasera:</strong> 
                {detallesUnidad.fotografia_trasera ? (
              <a
                target="_blank"
                rel="noreferrer"
                href={detallesUnidad.fotografia_trasera}
              >
                Imagen
              </a>
            ) : (
              " No hay imagen"
            )}
              </li>
              <li className="list-group-item">
                <strong>Foto cabina:</strong> 
                {detallesUnidad.fotografia_cabina ? (
              <a
                target="_blank"
                rel="noreferrer"
                href={detallesUnidad.fotografia_cabina}
              >
                Imagen
              </a>
            ) : (
              " No hay imagen"
            )}
              </li>
              <li className="list-group-item">
                <strong>Foto placa identificación:</strong> 
                {detallesUnidad.fotografia_placa_identificacion ? (
              <a
                target="_blank"
                rel="noreferrer"
                href={detallesUnidad.fotografia_placa_identificacion}
              >
                Imagen
              </a>
            ) : (
              " No hay imagen"
            )}
              </li>
              <li className="list-group-item">
                <strong>Marca motor:</strong> {detallesUnidad.marca_motor}
                
              </li>
              <li className="list-group-item">
                <strong>Modelo motor:</strong> {detallesUnidad.modelo_motor}
              </li>
              <li className="list-group-item">
                <strong>Numero serie del motor:</strong> {detallesUnidad.numero_serie_motor}
              </li>
              <li className="list-group-item">
                <strong>Foto frontal del motor:</strong> 
                {detallesUnidad.foto_motor_frontal ? (
              <a
                target="_blank"
                rel="noreferrer"
                href={detallesUnidad.foto_motor_frontal}
              >
                Imagen
              </a>
            ) : (
              " No hay imagen"
            )}
              </li>
              <li className="list-group-item">
                <strong>Foto lateral derecha del motor:</strong>
                {detallesUnidad.foto_lateral_dereacha ? (
              <a
                target="_blank"
                rel="noreferrer"
                href={detallesUnidad.foto_lateral_dereacha}
              >
                Imagen
              </a>
            ) : (
              " No hay imagen"
            )}
              </li>
              <li className="list-group-item">
                <strong>Foto lateral izquierda del motor:</strong> 
                {detallesUnidad.foto_lateral_izquierda ? (
              <a
                target="_blank"
                rel="noreferrer"
                href={detallesUnidad.foto_lateral_izquierda}
              >
                Imagen
              </a>
            ) : (
              " No hay imagen"
            )}
              </li>
              <li className="list-group-item">
                <strong>Foto del número de serie motor:</strong> 
                {detallesUnidad.foto_numero_serie_motor ? (
              <a
                target="_blank"
                rel="noreferrer"
                href={detallesUnidad.foto_numero_serie_motor}
              >
                Imagen
              </a>
            ) : (
              " No hay imagen"
            )}
              </li>
              <li className="list-group-item">
                <strong>Número de serie del chasis:</strong> {detallesUnidad.numero_serie_chasis}
              </li>
              <li className="list-group-item">
                <strong>Foto número de serie del chasis:</strong> 
                {detallesUnidad.foto_numero_serie_chasis ? (
              <a
                target="_blank"
                rel="noreferrer"
                href={detallesUnidad.foto_numero_serie_chasis}
              >
                Imagen
              </a>
            ) : (
              " No hay imagen"
            )}
              </li>
              <li className="list-group-item">
                <strong>Comentarios generales:</strong> {detallesUnidad.comentarios_generales}
              </li>
              {/* <li className="list-group-item">
                <strong>Fecha de creación:</strong>{" "}
                {detallesCliente.created_at.slice(0, 10)}
                prueba
              </li> */}
              
            </ul>
          </div>

          <div className="d-flex justify-content-end mt-2 ">
            

            

            
              <Link
                to={`/unidades/unidad/${detallesUnidad.id}/informacion-financiera/1`}
                className="btn mb-2"
                style={{ backgroundColor: "#00C08B", color: "white" }}
              >
                Ver Información Financiera
              </Link>
             
           
            {/* {pathname.includes("comercializacion") &&
              !pathname.includes("cotizacion") && (
                <Link
                  to={`/concreco/comercializacion/cliente/${detallesCliente.id}/obras`}
                  className="btn mb-2"
                  style={{ backgroundColor: "#00C08B", color: "white" }}
                >
                  Ver Obras
                </Link>
              )} */}
              
          </div>
          <div className="d-flex justify-content-end mt-2 ">
            
            <Link
              to={`/unidades/unidad/${detallesUnidad.id}/seguro/1`}
              className="btn mb-2"
              style={{ backgroundColor: "#00C08B", color: "white" }}
            >
              Ver Seguro de la Unidad
            </Link>
            
         
      
        </div>

        <div className="d-flex justify-content-end mt-2 ">
            
            <Link
              to={`/unidades/unidad/${detallesUnidad.id}/transito/1`}
              className="btn mb-2"
              style={{ backgroundColor: "#00C08B", color: "white" }}
            >
              Ver Tránsito de la unidad 
            </Link>
        </div>

        <div className="d-flex justify-content-end mt-2 ">
            
            <Link
              to={`/unidades/unidad/${detallesUnidad.id}/transito/1`}
              className="btn mb-2"
              style={{ backgroundColor: "#00C08B", color: "white" }}
            >
              Ver Inventario de la unidad  
            </Link>
        </div>



          {/* <div className="d-flex justify-content-end mt-2 ">
              {pathname.includes("logistica") && !pathname.includes("pedido") && (
              <Link
                to={`/concreco/logistica/cliente/${detallesCliente.id}/condicion-venta`}
                className="btn mb-2"
                style={{ backgroundColor: "#00C08B", color: "white" }}
              >
                Ver Condiciones de Venta
              </Link>
            )}
            </div> */}
        </>
      ) : (
        <p>No existe la unidad #{urlId} </p>
       
      
      )}
    </div>
  );
};