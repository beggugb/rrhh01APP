import React,{useEffect} from "react";
import { Card, CardTitle, CardHeader, Row, Col  } from "reactstrap";
import { useSelector, useDispatch } from 'react-redux'  
import { crudActions } from '../../actions'
import Calendar from "./Tareas/components/Calendar"
import FormTarea from "./Tareas/components/FormTarea"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faUsers, faHeadset, faBookmark} from "@fortawesome/free-solid-svg-icons";

const InicioView = () => {
  const dispatch = useDispatch()   
  const { clienteT, cotizacionT, prospectoT, ticketT } = useSelector(state => state.informes)
  const usuario = JSON.parse(localStorage.getItem('@userUnity'))
  const empresa = JSON.parse(localStorage.getItem('@userEmpresa'))
  let d = new Date()
  let gestion = d.getFullYear()
  
  const makeHttpRequestWithPage = () =>{
    let iok={
      "usuarioId":usuario.id,
      "rolId": usuario.rolId,
      "gestion": gestion
    }
    dispatch(crudActions.GET_INFORMES('INFORMES_DASHBOARD_CLIENTE','clientcons',iok))      
  }

  useEffect(() => {
    /*makeHttpRequestWithPage()*/
    return () => {
      /*dispatch({type:'INFORMES_RESET_CLIENTE'}) */
    };
  }, []);

  return(
    <>    
    <div className="content">        
      <div className="main-contenido">     
      <Row className="mt-1">           
          <Col md={3}>
          <Card>
          <CardHeader>
            <div className="card-icono"><FontAwesomeIcon icon={faUsers} /></div>
              <CardTitle className="text-dark"> PERSONAS </CardTitle>
              <p>860</p>                                   
              </CardHeader>
          </Card>    
          </Col>
          <Col md={3}>
          <Card>
          <CardHeader>
            <div className="card-icono"><FontAwesomeIcon icon={faHeadset} /></div>
              <CardTitle className="text-dark"> CONTRATOS </CardTitle>
              <p>36</p>                                   
              </CardHeader>
          </Card>    
          </Col>
          <Col md={3}>
          <Card>
          <CardHeader>
            <div className="card-icono"><FontAwesomeIcon icon={faBookmark} /></div>
              <CardTitle className="text-dark"> EMPLEADOS </CardTitle>
              <p>80</p>                                   
              </CardHeader>
          </Card>    
          </Col>           
          <Col md={3}>
          <Card>
          <CardHeader>
            <div className="card-rojo"><FontAwesomeIcon icon={faDollarSign} /></div>
              <CardTitle className="text-dark mt-2"> POSTULACIONES</CardTitle>              
              <p>12</p>                                  
              </CardHeader>
          </Card>    
          </Col> 
        </Row>         
      <Row>
        <Col md="3">
          <Card>
            <FormTarea/>
          </Card>
        </Col>
        <Col md="9">
          <Card>
            <Calendar />
          </Card>
        </Col>               
      </Row>
      </div>
    </div>    
    </>
  )

};
export default InicioView;
